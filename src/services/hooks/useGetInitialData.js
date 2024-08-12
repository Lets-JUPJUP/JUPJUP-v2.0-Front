import React, { useCallback, useEffect, useState } from "react";

const useGetInitialData = (requestFunc, param, headers, body) => {
  const [data, setData] = useState(); // api 데이터 저장하기
  const [loading, setLoading] = useState(false); // 데이터 로딩 상태
  const [error, setError] = useState(false); // 에러 발생 상태

  const fetchData = useCallback(async () => {
    // 로딩 중
    setLoading(true);
    setError(null); // 이전 에러 상태 초기화
    try {
      // 데이터 가져오기
      console.log("한번");
      const response = await requestFunc(param, headers, body);
      setData(response.data.data);
    } catch (err) {
      setError(err);
    }
    // 완료하면 로딩 상태 false
    setLoading(false);
  }, [param, headers, body, requestFunc]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };
  return { data, loading, error, refetch };
};

export default useGetInitialData;
