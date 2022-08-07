import { Spinner } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";

function Loyaut({ children, title = "Inicio", Loading = false, err = false }) {
  if (Loading) {
    return (
      <div className="  my-5 flex justify-center">
        <Spinner aria-label="Default status example" />
      </div>
    );
  }

  return (
    <div className="bg-slate-700">
      <Helmet>
        <title>{title} | Marvel </title>
      </Helmet>
      <div className=" bg-black min-h-screen sm:w-full xl:w-3/4  sm:m-auto">
        {children}
      </div>
    </div>
  );
}

export default Loyaut;
