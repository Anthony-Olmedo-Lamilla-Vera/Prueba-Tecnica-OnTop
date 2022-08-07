import React from "react";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

import useFetchData from "../../Hooks/useFetchData";
import Items from "../../components/Items";
import Loyaut from "../../components/Loyaut";

function Detail() {
  let [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("type");
  const { data, isLoading, error } = useFetchData(`${id}`);
  return (
    <Loyaut title={id} Loading={isLoading}>
      <h1>Detalle</h1>
      <Items data={data} />
    </Loyaut>
  );
}

export default Detail;
