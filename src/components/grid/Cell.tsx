import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";
import { REVEAL_TIME_MS } from "../../constants/settings";
import { getStoredIsHighContrastMode } from "../../lib/localStorage";
import "./styles.css";

type Props = {
  value?: string;
  status?: CharStatus;
  isRevealing?: boolean;
  isCompleted?: boolean;
  position?: number;
  index?: number;
};

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  index,
}: Props) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const animationDelay = `${position * REVEAL_TIME_MS}ms`;
  const isHighContrast = getStoredIsHighContrastMode();
  console.log(index);

  const classes = classnames(
    "w-12 h-12 border-solid flex items-center justify-center mx-1 mb-2 text-4xl font-bold rounded-lg",
    {
      "bg-lightGrey border-slate text-blueberry": !status,
      "border-black dark:border-slate": value && !status,
      "absent text-blueberry bg-lightGrey opacity-25 dark:bg-slate-700 text-white":
        status === "absent",
      "correct shadowed bg-blueberryLight2 text-white border-blueberryLight2":
        status === "correct" && isHighContrast,
      "present shadowed bg-cyan text-white border-cyan":
        status === "present" && isHighContrast,
      "correct shadowed bg-green text-white border-green":
        status === "correct" && !isHighContrast,
      "present shadowed bg-blueberryLight text-white border-blueberryLight":
        status === "present" && !isHighContrast,
      "cell-fill-animation": isFilled,
      "cell-reveal": shouldReveal,
      "animate-pulse border-slateDark": index === 0,
    }
  );

  const letterClasses = classnames("letter-container text-lg");

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className={letterClasses} style={{ animationDelay }}>
        {value}
      </div>
    </div>
  );
};
