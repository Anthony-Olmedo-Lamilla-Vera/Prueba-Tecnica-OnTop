import React from "react";
import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);
function useFetchData(url) {
  const baseUrl = `https://gateway.marvel.com/v1/public/${url}?apikey=6e10a796f0da4e22a775cdf6e5bf42c0&hash=5fcc94b97f85f81af529d1a32b5cee74&ts=1`;
  const { data, error } = useSWR(`${baseUrl}`, fetcher);

  return { error, data: data?.data?.results, isLoading: !error && !data };
}

export default useFetchData;
