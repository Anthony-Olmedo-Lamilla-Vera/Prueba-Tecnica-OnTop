import React from "react";
function CardPerson({ img, name }) {
  return (
    <div className="sm:w-1/4 w-full h-1/2 bg-transparent text-center rounded-md my-5 ">
      <img
        src={img}
        alt=""
        className="h-56 text-center items-center m-auto rounded-md"
      />
      <h5 className="text-2xl  text-center text-ellipsis overflow-hidden whitespace-nowrap font-bold tracking-tight mt- text-white">
        {name}
      </h5>
    </div>
  );
}

export default CardPerson;
