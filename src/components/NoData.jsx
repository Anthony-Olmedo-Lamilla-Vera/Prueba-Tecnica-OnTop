import React from "react";
import Wrapper from "./Wrapper";

function NoData({ message }) {
  return (
    <Wrapper title={"Error!"}>
      <div className=" items-center justify-center min-h-screen flex flex-col">
        <div className="text-red-500 font-bold  text-xl text-center ">
          {message}
        </div>
        ;
        <img
          className="w-9/12 sm:w-56"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/ErrorMessage.png"
          alt=""
        />
      </div>
    </Wrapper>
  );
}

export default NoData;
