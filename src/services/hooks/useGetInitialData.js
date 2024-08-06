import React, { useEffect, useState } from "react";

const useGetInitialData = (requestFunc, param, headers, body) => {
  const [data, setData] = useState(); // api 데이터 저장하기
  const [loading, setLoading] = useState(false); // 데이터 로딩 상태
  const [error, setError] = useState(false); // 에러 발생 상태

  useEffect(() => {
    const fetchData = async () => {
      // 로딩 중
      setLoading(true);
      try {
        // 데이터 가져오기
        const response = await requestFunc(param, headers, body);
        setData(response.data.data);
      } catch (err) {
        setError(err);
      }
      // 완료 하면 로딩 상태 false
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetInitialData;
