import { Spinner } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";

function Loyaut({
  children,
  title = "Cargando ...",
  Loading = false,
  err = false,
}) {
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
