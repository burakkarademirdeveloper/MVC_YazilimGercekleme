//NextJS Layout
import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-full flex-col items-center gap-4 bg-stone-300">
        <Header />
        <div className="mb-4">{children}</div>
      </main>
    </>
  );
};
