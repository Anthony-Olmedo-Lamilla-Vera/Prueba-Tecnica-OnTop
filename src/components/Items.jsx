import React from "react";
import CardPerson from "../Pages/Detail/Component/CardPerson";

function Items({ data = [] }) {
  /* <div className="flex gap-3 flex-wrap flex-1 justify-evenly  "> */
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
