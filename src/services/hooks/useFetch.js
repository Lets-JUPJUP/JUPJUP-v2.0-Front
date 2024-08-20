import { useState } from "react";
import axios from "axios";

const useFetch = (requestFunc) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isRefetch, setIsRefetch] = useState(false);

  const fetchData = async (headers, body) => {
    setLoading(true);

    try {
      const response = await requestFunc(headers, body);

      setStatus(response.data.status);
      setIsRefetch(!isRefetch);
      setData(response.data.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, status, isRefetch, fetchData };
};

export default useFetch;
