import React from "react";
import { useSearchParams } from "react-router-dom";

import useFetchData from "../../Hooks/useFetchData";
import Items from "../../components/Items";
import Wrapper from "../../components/Wrapper";

function Detail() {
  let [searchParams, setSearchParams] = useSearchParams();

  const Type = searchParams.get("type");
  const { data, isLoading } = useFetchData(`${Type}`);
  return (
    <Wrapper title={Type || ""} Loading={isLoading}>
      <h1 className="text-white text-center  text-3xl my-4">Search : {Type}</h1>
      <Items data={data} />
    </Wrapper>
  );
}

export default Detail;
