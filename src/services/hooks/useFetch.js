import { useState } from "react";
import axios from "axios";

const useFetch = (requestFunc) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (headers, body) => {
    setLoading(true);
    setStatus(undefined);
    try {
      const response = await requestFunc(headers, body);

      setStatus(response.data.status);
      setData(response.data.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, status, fetchData };
};

export default useFetch;
