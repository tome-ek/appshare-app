import classNames from "classnames";

interface SpinnerProps {
  color?: "gray" | "white";
  size?: "xs" | "sm" | "md" | "lg";
}

export const Spinner = ({ size = "md", color = "gray" }: SpinnerProps) => {
  const colors = {
    gray: "text-gray-500",
    white: "text-white",
  };

  const style = "block m-auto bg-repeat bg-none bg-scroll bg-transparent";

  const sizes = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(style, sizes[size], colors[color])}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.6944444444444444s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(40 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.607638888888889s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(80 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.5208333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.4340277777777778s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(160 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.3472222222222222s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(200 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.2604166666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.1736111111111111s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(280 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="-0.08680555555555555s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(320 50 50)">
        <rect
          x="46.5"
          y="18.5"
          rx="2.5500000000000003"
          ry="2.5500000000000003"
          width="7"
          height="17"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.78125s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  );
};
