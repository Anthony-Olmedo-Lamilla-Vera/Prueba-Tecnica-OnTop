import React from "react";

function Page_404() {
  return (
    <div className=" items-center justify-center min-h-screen flex flex-col">
      <div className="text-red-500 font-bold  ">NO EXISTE LA PAGINA!</div>;
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/3/34/ErrorMessage.png"
        alt=""
      />
    </div>
  );
}

export default Page_404;
