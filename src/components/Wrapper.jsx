import { Spinner } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";

function Wrapper({ children, title, Loading }) {
  if (Loading) {
    return (
      <div className="  my-5 flex justify-center">
        <Spinner aria-label="Default status example" />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>{title} | Marvel </title>
      </Helmet>
      {children}
    </div>
  );
}

export default Wrapper;
