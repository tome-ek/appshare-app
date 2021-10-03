import { HeaderLink } from "../../atoms/HeaderLink/HeaderLink";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <a
        href="https://appshare.dev"
        className="flex items-center font-semibold text-xl"
      >
        <span>Appshare</span>
      </a>

      <div className="flex">
        <HeaderLink text="Dashboard" isActive />
        <HeaderLink text="Account" />
      </div>
    </div>
  );
};
