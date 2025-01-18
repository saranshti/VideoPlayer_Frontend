export function base64ToBlob(base64String, mimeType) {
  // Check if the base64String contains 'data:image' and strip it out if necessary
  const base64Data = base64String.includes("data:image")
    ? base64String.split(",")[1] // Extracts the part after `data:image/*;base64,`
    : base64String;

  // Ensure base64Data is a valid string
  if (!base64Data || !base64Data.match(/^[A-Za-z0-9+/=]+$/)) {
    throw new Error("Invalid Base64 string");
  }

  // Decode the Base64 string
  const byteCharacters = atob(base64Data); // atob decodes the Base64 string into binary characters
  const byteArrays = [];

  // Convert each byte to a uint8Array (needed for the Blob)
  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  // Create a Blob from the byteArrays and return it
  return new Blob(byteArrays, { type: mimeType });
}

export const convertSecondToMinuteandHour = (second) => {
  // Round the input seconds to the nearest integer
  const roundedSeconds = Math.round(second);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const seconds = roundedSeconds % 60;

  // Format the result as a string (with leading zeros if necessary)
  const formattedTime =
    (hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "") +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;

  // Remove the hour part if hours are 0
  return formattedTime.replace(/^00:/, "").replace(/:$/, "");
};
