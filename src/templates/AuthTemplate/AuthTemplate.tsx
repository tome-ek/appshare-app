import { FunctionComponentElement } from "react";

export interface AuthTemplateProps {
  authCard: FunctionComponentElement<any>;
  footer: FunctionComponentElement<any>;
}

export const AuthTemplate = ({ authCard, footer }: AuthTemplateProps) => {
  return (
    <div className="h-screen w-screen">
      <div className="max-h-screen h-full flex flex-col gap-5">
        <div className="flex-1 flex items-center justify-around px-5 md:px-0">
          {authCard}
        </div>
        <div className="pb-5">{footer}</div>
      </div>
    </div>
  );
};
