import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Items from "../../components/Items";
import Loyaut from "../../components/Loyaut";
import useFetchData from "../../Hooks/useFetchData";
function Home() {
  const { data, isLoading, error } = useFetchData("/comics");
  const [Imgs, setImgs] = useState([]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setImgs(data);
    }
  }, [data]);

  return (
    <Loyaut title={"Home"} Loading={isLoading}>
      <div className="lg:min-h-screen px-3 my-5">
        <div className=" h-96 col-start-1 ">
          <Carousel indicators={false} slide={true}>
            {Imgs &&
              Imgs.map((item) => {
                return (
                  <div className="flex items-center justify-evenly p-4 ">
                    <img
                      className="object-cover my-5"
                      key={item.id}
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt=""
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
        <Items data={data} />
      </div>
    </Loyaut>
  );
}

export default Home;
