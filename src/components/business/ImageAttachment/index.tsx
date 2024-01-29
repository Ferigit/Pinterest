import React, { useRef } from "react";
import clsx from "classnames";
import { Button } from "@/src/components/common";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { FieldErrors } from "@/src/types/form";
import { ErrorMessage } from "@/src/components/common/index";
import { EditIcon, FileUploadIcon } from "@/src/Icons/post";
import useImageAttachmentLogic from "./useImageAttachmentLogic";

interface ImageAttachmentProps {
  className?: { container: string };
  register: UseFormRegister<any>;
  id: string;
  name: string;
  errors?: FieldErrors<FieldValues>;
  tabIndex?: number;
}

export const ImageAttachment: React.FC<ImageAttachmentProps> = ({
  className,
  register,
  errors,
  name,
  tabIndex,
}) => {
  const {
    image,
    error,
    handleEditImage,
    handleImageDrop,
    handleImageUpload,
    dimensions,
  } = useImageAttachmentLogic({ register, errors, name });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className={clsx(
        "relative p-4 rounded-lg cursor-pointer bg-gray-100",
        className?.container,
        error ? "border-2 border-red-100" : "border-2 border-gray"
      )}
    >
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Attached Image"
          className={`mx-auto w-[${dimensions?.width}] h-[${dimensions?.height}] object-cover rounded-md`}
        />
      )}
      {image && (
        <Button
          onClick={handleEditImage}
          className="absolute right-4 top-4  p-0 z-50"
        >
          <EditIcon />
        </Button>
      )}
      {!image && (
        <div
          onClick={handleClick}
          className="flex gap-y-2 flex-col items-center justify-center h-48"
        >
          <FileUploadIcon />
          <p className="ml-4 text-sm text-gray-600 text-center">
            Choose a file or drag and drop <br />
            it here
          </p>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageUpload}
        className="hidden"
      />
      <div
        className="absolute inset-0 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleImageDrop}
        onClick={handleClick}
        tabIndex={tabIndex}
      ></div>
      <ErrorMessage error={error} />
    </div>
  );
};
