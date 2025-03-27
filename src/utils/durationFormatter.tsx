export default function durationFormatter(duration: number): string {
  if (!duration) {
    return "00:00:00";
  }

  return `${Math.floor(duration / 3600)
    .toString()
    .padStart(2, "0")}:${Math.floor((duration % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor((duration % 3600) % 60)
    .toString()
    .padStart(2, "0")}`;
}
