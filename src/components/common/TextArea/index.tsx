//TextInput component support Controlled and Uncontrolled variants inside form
import clsx from "classnames";
import { ErrorMessage } from "@/src/components/common/index";
import { CustomInputProps } from "@/src/types/form";

export const TextArea = ({
  id,
  name,
  label,
  register,
  errors,
  className,
  customControl, //Based on this prop decide to be controlled or uncontrolled
  ...props
}: CustomInputProps) => {
  const error = errors?.[name]?.message as string | undefined;

  const inputId = id ?? `${name}-${props.type}-${label}`;

  return (
    <div
      className={clsx(
        "w-full flex gap-1 flex-col min-h-18",
        className?.container
      )}
    >
      {label && (
        <label className="text-gray-400 text-sm" htmlFor={inputId}>
          {label}
        </label>
      )}

      <textarea
        id={id}
        data-testid="input-component"
        className={clsx(
          "py-3 px-4 h-24 w-full text-black rounded-lg text-base text-dark ",
          className?.input,
          error ? "border-2 border-red-100" : "border-2 border-gray"
        )}
        {...(customControl
          ? { ...customControl }
          : register
            ? { ...register(name) }
            : {})}
        {...props}
      />
      <ErrorMessage error={error} />
    </div>
  );
};
