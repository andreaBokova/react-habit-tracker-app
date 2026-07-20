import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "delete" | "days";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
};

export function Button({
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
    </button>
  );
}

function getButtonStyling(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-pink-900 rounded px-2 py-1 hover:bg-pink-800";
    case "secondary":
      return "bg-zinc-600 rounded px-2 py-1 hover:bg-zinc-500";
    case "delete":
      return "bg-zinc-500 rounded px-2 py-1 hover:bg-zinc-400";
    case "days":
        return "bg-pink-600 rounded px-2 py-1 hover:bg-pink-500";
    default:
      console.log("No such option for button styling available");
      throw new Error(`Invalid variant ${variant}`);
  }
}
