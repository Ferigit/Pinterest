import React, { useState, useEffect } from "react";
import clsx from "classnames";
import {
  UseFormRegister,
  UseFormSetValue,
  useFormContext,
  FieldValues,
} from "react-hook-form";
import { FieldErrors } from "@/src/types/form";
import { ErrorMessage } from "@/src/components/common/index";
import { Button } from "@/src/components/common";

interface IProps {
  label: string;
  name: string;
  id: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<any>;
  tabIndex?: number;
}
export const TagListInput: React.FC<IProps> = ({
  label,
  name,
  errors,
  id,
  tabIndex = 0,
}: IProps) => {
  const [inputValue, setInputValue] = useState("");
  const { getValues, setValue, register, trigger } = useFormContext();
  const value = getValues(name) ?? [];
  const error = errors?.[name]?.message as string | undefined;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTag = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (inputValue) {
      setValue(name, [...value, inputValue]);
      trigger();
      setInputValue(""); // Clear input after adding
    }
  };

  useEffect(() => {
    register(name);
  }, []);

  return (
    <div>
      {label && (
        <label className="text-gray-400 text-sm" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="flex ">
        <input
          tabIndex={tabIndex}
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new tag and press enter"
          className={clsx(
            "py-3 px-4 h-12 w-full rounded-r-none text-black rounded-lg text-base text-dark hover:border-gray-200 border-2 border-gray",

            error ? "border-2 border-red-100" : "border-2 border-gray"
          )}
        />
        <Button
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            handleAddTag(e)
          }
          className="rounded-l-none"
        >
          Add
        </Button>
      </div>
      <ul className="flex justify-start items-center gap-2 mt-1">
        {value.map((item: any, index: number) => (
          <li key={index} className="px-2 py-1 bg-gray-200 rounded-md">
            {item}
          </li>
        ))}
      </ul>
      <ErrorMessage error={error} />
    </div>
  );
};
