import React, { useState, useRef, useEffect } from "react";
import { UseFormRegister, useFormContext, FieldValues } from "react-hook-form";
import { FieldErrors } from "@/src/types/form";
import { getImageDimensions } from "@/src/utils/image";
import { IDimension } from "@/src/types/window";

interface UseApiDataProps {
  className?: { container: string };
  register: UseFormRegister<any>;
  id?: string;
  name: string;
  errors?: FieldErrors<FieldValues>;
  tabIndex?: number;
}

interface ApiResponse {
  image?: File | null;
  error?: string | undefined;
  dimensions?: IDimension | null;
  handleEditImage?: (e: React.MouseEvent<HTMLElement>) => void;
  handleImageDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleImageUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useImageAttachmentLogic = ({
  register,
  errors,
  name,
}: UseApiDataProps): ApiResponse => {
  const [image, setImage] = useState<File | null>(null);
  const [dimensions, setDimensions] = useState<IDimension | null>(null);
  const { getValues, trigger, setValue } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const error = errors?.[name]?.message as string | undefined;

  //register input the form
  useEffect(() => {
    register(name);
  }, []);

  //reset the local image state when form reset
  useEffect(() => {
    if (!getValues(name)) setImage(null);
  }, [getValues(name)]);

  const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const acceptedFiles = event.dataTransfer?.files;
    if (acceptedFiles && acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      setImage(image);
      setValue(name, image);
      trigger();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
      setValue(name, event.target.files[0]);
      trigger();
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleEditImage = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setImage(null);
    setValue(name, null);

    trigger();
  };
  useEffect(() => {
    handleGetImageDimensions();
  }, [image]);

  const handleGetImageDimensions = async () => {
    try {
      const imageDimensions = await getImageDimensions(image);
      setDimensions(imageDimensions);
    } catch (error) {
      console.error("Error getting image dimensions:", error);
    }
  };

  return {
    image,
    error,
    dimensions,
    handleEditImage,
    handleImageDrop,
    handleImageUpload,
  };
};

export default useImageAttachmentLogic;
