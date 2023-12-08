export const getFileMetadata = (file: Blob): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const file = e.target?.result;
      if (file) res(file as string);
      else rej(new Error("file is encrypted or corrupt!."));
    };
  });
};

export const getFormData = <T extends object>(values: T) => {
  const formData = new FormData();
  Object.keys(values).map((key) => {
    const actualValue = values[key];
    if (Array.isArray(actualValue)) {
      actualValue.map((val) => formData.append(`${key}[]`, val));
    } else {
      formData.append(key, actualValue);
    }
    return actualValue;
  });
  return formData;
};

/**
 *
 * @param name the name
 * @param {string | Blob[]} files the file values
 * @returns {Promise<FormData>}
 */
export const getFileFormData = (files: string | Blob[], name = "files"): Promise<FormData> => {
  return new Promise((res, rej) => {
    const formData = new FormData();
    for (const file of files) {
      formData.append(name, file);
    }
    res(formData);
  });
};

function generateRandomFileName(extension) {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000000);
  const fileName = `${timestamp}_${randomNumber}${extension}`;

  return fileName;
}

export async function getFileFromBase64(
  base64String: string,
  filename = generateRandomFileName(".png"),
  type = "image/png"
) {
  const response = await fetch(`${base64String}`);
  const blob = await response.blob();
  const file = new File([blob], filename, {
    type,
  });

  return file;
}

export function fileToObject(file: File) {
  if (!file) {
    return null;
  }

  // Create an object to store file metadata
  const fileObject = {
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file?.lastModified,
  };

  return fileObject;
}
