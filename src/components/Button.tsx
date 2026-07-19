import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "delete";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant: Variant;
};

export function Button({
  text,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        getButtonStyling(variant),
        "hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    >
      {text}
    </button>
  );
}

function getButtonStyling(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-green-500 rounded px-2 py-1 hover:bg-green-400";
    case "secondary":
      return "bg-pink-600 rounded px-2 py-1 hover:bg-pink-400";
    case "delete":
      return "bg-orange-500 rounded px-2 py-1 hover:bg-orange-400";
    default:
      console.log("No such option for button styling available");
      throw new Error(`Invalid variant ${variant}`);
  }
}
