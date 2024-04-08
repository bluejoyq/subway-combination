import { PropsWithChildren } from "react";

export default function AppWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 p-4">
      {children}
    </div>
  );
}
