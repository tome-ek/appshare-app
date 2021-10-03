import { IconType } from "react-icons";
import { Button } from "../../atoms/Button/Button";

interface BlankslateProps {
  title: string;
  text: string;
  cta?: string;
  image?: IconType;
  onCtaClick?: () => void;
}

export const Blankslate = ({
  title,
  text,
  cta,
  image: Image,
  onCtaClick: handleCtaClicked,
}: BlankslateProps) => {
  const titleStyle = "font-medium text-2xl text-gray-200";
  const textStyle = "py-0.5 text-gray-450";

  const containerStyle = "text-center";

  return (
    <div className={containerStyle}>
      {Image && <Image className="my-3.5 mx-auto w-14 h-14" />}
      <h3 className={titleStyle}>{title}</h3>
      <p className={textStyle}>{text}</p>
      {cta && (
        <Button
          label={cta}
          onClick={handleCtaClicked}
          className="mt-5"
          colorScheme="primary"
          variant="solid"
        />
      )}
    </div>
  );
};
