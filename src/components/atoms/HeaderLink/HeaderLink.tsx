import classNames from "classnames";

interface HeaderLinkProps {
  text: string;
  isActive?: boolean;
}

export const HeaderLink = ({ text, isActive }: HeaderLinkProps) => {
  const baseStyle =
    "block relative px-3 py-2 bg-transparent font-medium text-lg hover:text-white transform transition hover:-translate-y-1 focus:scale-[0.92] group";

  return (
    <a
      href="https://appshare.dev"
      className={classNames(baseStyle, {
        "text-gray-500": !isActive,
        "text-white": isActive,
      })}
    >
      {text}
      <div
        className={classNames(
          "absolute bottom-0 left-3 right-3 h-[2px] rounded bg-primary-550 transform transition group-hover:-translate-y-0.5 scale-x-0 group-hover:scale-x-100"
        )}
      />
    </a>
  );
};
