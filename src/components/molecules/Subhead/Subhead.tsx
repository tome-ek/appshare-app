import classNames from "classnames";
import { Button } from "../../atoms/Button/Button";
import { H5 } from "../../atoms/Typography/Headings";

interface SubheadProps {
  title: string;
  description?: string;
  action?: {
    title: string;
    colorScheme: "primary" | "gray" | "danger";
  };
}

export const Subhead = ({ title, description, action }: SubheadProps) => {
  const containerStyle =
    "flex justify-between items-center pb-2 border-b border-gray-300/10";

  return (
    <div className={containerStyle}>
      <div>
        <H5 className="pb-0.5">{title}</H5>
        {description && <p className="text-gray-400">{description}</p>}
      </div>
      {action && (
        <div
          className={classNames({ "pt-1": description, "pb-1": !description })}
        >
          <Button
            colorScheme={action.colorScheme}
            label={action.title}
            size="small"
          />
        </div>
      )}
    </div>
  );
};
