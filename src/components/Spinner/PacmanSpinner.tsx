import { PacmanLoader } from "react-spinners";

/* npm install react-spinners --save */

type PacmanSpinnerProps = React.ComponentProps<"div"> & {
  size?: number;
  color?: string;
  text?: string;
  orientation?: "col" | "row";
  textColor?: string;
  textClassName?: string;
  speedMultiplier?: number
  cssOveride?: object
};

const PacmanSpinner = ({
  size = 55,
  color = "#0cbce9",
  text = "Carregando...",
  orientation = "col",
  textColor = "#0cbce9",
  className,
  textClassName,
  speedMultiplier = 1,
  cssOveride,
  ...props
}: PacmanSpinnerProps) => {
  const orientationClasses = {
    col: "flex-col",
    row: "flex-row",
  };

  return (
    <div
      className={`flex items-center justify-center p-4 gap-4 ${
        orientationClasses[orientation]
      } ${className ?? ""}`}
      {...props}
    >
      <PacmanLoader size={size} color={color} speedMultiplier={speedMultiplier} cssOverride={cssOveride} />
      {text && (
        <span className={textClassName} style={{ color: textColor }}>
          {text}
        </span>
      )}
    </div>
  );
};

export default PacmanSpinner;
