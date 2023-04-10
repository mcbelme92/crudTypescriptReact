import React from "react";

type Props = {};

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <div className="layoutdinamic">
        {/* <h1 className="layoutdinamic_title">
          <span>Dynamic Form-</span>
          <span className="layoutdinamic_title_twospan">React Hook Form</span>
        </h1> */}
        <main className="layoutdinamic_main">{children}</main>
      </div>
    </>
  );
};
