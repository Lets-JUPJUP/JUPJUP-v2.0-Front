import { useEffect, useState } from "react";

const useBtnActive = (fields) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 모든 입력 필드가 채워졌는지 검사
    const allFieldsFilled = Object.values(fields).every(
      (value) => value !== "" && value !== undefined && value !== null
    );

    setIsActive(allFieldsFilled);
  }, [fields]);

  return isActive;
};

export default useBtnActive;
