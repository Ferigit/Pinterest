export const getDimensionsFromBase64 = async (
    base64String: string
  ): Promise<{ width: number; height: number }> => {
    const dataPart = base64String.split(",")[1];
    const binaryData = atob(dataPart);
    const uint8Array = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([uint8Array]);
    const url = URL.createObjectURL(blob);

    return new Promise<{ width: number; height: number }>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
        });
      };
      img.onerror = reject;
      img.src = url;
    });
  };