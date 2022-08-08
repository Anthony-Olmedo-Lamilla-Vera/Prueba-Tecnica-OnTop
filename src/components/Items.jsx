import React from "react";
import CardPerson from "../Pages/Detail/Component/CardPerson";
import NoData from "./NoData";

function Items({ data = [] }) {
  /* <div className="flex gap-3 flex-wrap flex-1 justify-evenly  "> */

  if (data.length < 1) {
    return <NoData message={"No se encontro Informacion"} />;
  }
  return (
    <div className="flex gap-3 flex-wrap flex-1 justify-evenly  ">
      {data.map((item) => {
        return (
          <CardPerson
            img={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
            name={item.title || item.name}
          />
        );
      })}
    </div>
  );
}

export default Items;
