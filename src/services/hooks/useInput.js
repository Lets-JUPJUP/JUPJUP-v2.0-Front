import { useState, useCallback } from "react";

const useInput = (initialInput) => {
  const [input, setInput] = useState(initialInput);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return [input, handleChange];
};

export default useInput;
