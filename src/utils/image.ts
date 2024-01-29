type ImageDimensions = {
  width: number;
  height: number;
};

export const getImageDimensions = (
  file: File | null
): Promise<ImageDimensions> | null => {
  if (!file) return null;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const dimensions: ImageDimensions = {
          width: img.width,
          height: img.height,
        };
        resolve(dimensions);
      };
      img.onerror = () => {
        reject(new Error("Failed to load image."));
      };

      if (event.target && typeof event.target.result === "string") {
        img.src = event.target.result;
      }
    };

    reader.readAsDataURL(file);
  });
};
