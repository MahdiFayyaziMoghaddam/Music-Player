import fs from "fs/promises"; // Use promises for async file operations
import path from "path";
import os from "os";
import { parseBlob } from "music-metadata";

// Cache for storing search results
const searchCache = new Map();

// RegEx
const musicFormatRegex = /\.(mp3|m4a|wav|ogg|aac)$/i;

// Function to dynamically detect system drives
export function getSystemDrives() {
  const platform = os.platform();

  if (platform === "win32") {
    // Windows: List drives like C:\, D:\, etc.
    const drives = [];
    for (let i = 65; i <= 90; i++) {
      const drive = `${String.fromCharCode(i)}:\\`;
      drives.push(drive);
    }
    console.log("Detected drives (Windows):", drives); // Log drives for debugging
    return drives;
  } else {
    // Unix-like systems: Use root and common mount points
    const drives = ["/", "/mnt", "/media"];
    console.log("Detected drives (Unix):", drives); // Log drives for debugging
    return drives;
  }
}

// Recursive function to search for a file in a directory
async function searchFileInDirectory(
  dir,
  fileFullName,
  depth = 0,
  maxDepth = 10
) {
  if (depth > maxDepth) {
    console.warn(`Max depth reached for directory: ${dir}`); // Log max depth
    return [];
  }

  let results = [];

  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);

      try {
        const stat = await fs.stat(fullPath);

        if (stat.isDirectory()) {
          const subDirResults = await searchFileInDirectory(
            fullPath,
            fileFullName,
            depth + 1,
            maxDepth
          );
          results = results.concat(subDirResults);
        } else if (file === fileFullName) {
          console.log(`Found file: ${fullPath}`); // Log found files
          results.push(fullPath);
        }
      } catch (err) {
        console.warn(
          `Cannot access file or directory: ${fullPath}`,
          err.message
        );
      }
    }
  } catch (err) {
    console.warn(`Cannot access directory: ${dir}`, err.message);
  }

  return results;
}

// Function to search for a file in all drives
export async function findFileInAllDrives(drives, fileFullName) {
  const cacheKey = `${fileFullName}-${drives.join(",")}`;
  if (searchCache.has(cacheKey)) {
    console.log(`Using cached results for: ${fileFullName}`); // Log cache hits
    return searchCache.get(cacheKey);
  }

  console.log(`Searching for: ${fileFullName}`); // Log search start
  const searchPromises = drives.map(async (drive) => {
    return await searchFileInDirectory(drive, fileFullName);
  });

  const results = await Promise.all(searchPromises);
  const flattenedResults = results.flat();

  searchCache.set(
    cacheKey,
    flattenedResults.length ? flattenedResults.join(", ") : ""
  );
  console.log(`Search results for ${fileFullName}:`, flattenedResults); // Log search results
  return flattenedResults.length ? flattenedResults.join(", ") : "";
}

// Function to get audio metadata
export const getAudioMetadata = async (filePath) => {
  try {
    if (!musicFormatRegex.test(filePath)) {
      console.error(`Unsupported file format: ${filePath}`);
      return null;
    }
    await fs.access(filePath);

    const fileBuffer = await fs.readFile(filePath);
    const blob = new Blob([fileBuffer], { type: "audio/mpeg" });
    const musicMetadata = await parseBlob(blob);

    return {
      title:
        musicMetadata.common?.title ||
        path.basename(filePath, path.extname(filePath)),
      artists: musicMetadata.common?.artists?.join(",") || "Unknown Artist",
      album: musicMetadata.common?.album || "Unknown Album",
      duration: musicMetadata.format.duration || 0,
      image: "",
      imageData: musicMetadata.common.picture[0],
      data: fileBuffer.toString("base64"),
      url: "",
      size: fileBuffer.length,
    };
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err.message);
    return null;
  }
};
