import express from "express";
import cors from "cors";
import path from 'path'
import {findFileInAllDrives, getSystemDrives, getAudioMetadata} from './functions.js'

const app = express();
const port = 8000;
const musicFormatRegex = /\.(mp3|m4a|wav|ogg|aac)$/i

app.use(cors());
app.use(express.json());

app.post("/path", async (req, res) => {
  const { fileFullNames } = req.body;

  if (!Array.isArray(fileFullNames)) {
    return res.status(400).json({ error: "Please provide an array of file names!" });
  }

  // Validate filenames using regex
  const invalidFiles = fileFullNames.filter((file) => !musicFormatRegex.test(file));

  if (invalidFiles.length > 0) {
    return res.status(400).json({ error: `Invalid file names: ${invalidFiles.join(", ")}` });
  }

  try {
    const drives = getSystemDrives();

    const results = await Promise.all(
      fileFullNames.map(async (fileFullName) => {
        return await findFileInAllDrives(drives, fileFullName);
      })
    );

    const validResults = results.filter((path) => path !== "");

    if (validResults.length > 0) {
      return res.status(200).json({ paths: validResults });
    } else {
      return res.status(404).json({ error: "Files not found!" });
    }
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/file', async (req, res) => {
  const { allPaths } = req.body;

  if (!Array.isArray(allPaths)) {
    return res.status(400).json({ error: "Please provide an array of file paths!" });
  }

  // Ensure each item in allPaths is a string
  const invalidPaths = allPaths.filter((path) => typeof path !== "string");
  if (invalidPaths.length > 0) {
    return res.status(400).json({ error: `Invalid file paths: ${invalidPaths.join(", ")}` });
  }

  try {
    const cache = []
    const metadataList = await Promise.all(
      allPaths.map(async (filePath) => {
        if(!cache.includes(path.basename(filePath, path.extname(filePath)))){
          cache.push(path.basename(filePath, path.extname(filePath)))
          return await getAudioMetadata(filePath);
        }
      })
    );

    // Filter out null results (files that couldn't be read)
    const validMetadataList = metadataList.filter((metadata) => metadata !== null);

    if (validMetadataList.length > 0) {
      return res.status(200).json({ metadataList: validMetadataList });
    } else {
      return res.status(404).json({ error: "No valid audio files found!" });
    }
  } catch (err) {
    console.error("Error:", err); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/test', (req,res) => {
  
  return res.status(200).json({})
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});