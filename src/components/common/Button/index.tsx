import React from "react";
import clsx from "classnames";

interface ButtonProps {
  label?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  tabIndex?: number;
  // TODO Add any other required props here
}
enum Sizes {
  "small" = "!px-1 !py-1 text-xs",
  "medium" = "px-3 py-2 text-base",
  "large" = "px-5 py-3 text-base",
}
export const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  onClick,
  className,
  icon,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        ` font-medium gap-x-2 bg-gray-100 hover:bg-gray-200 rounded-full ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        } ${className || ""} ${Sizes[size]}`
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="inline-flex items-center"> {icon} </span>}
      {label}
      {children}
    </button>
  );
};
