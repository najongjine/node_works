import React, { useState } from "react";

/*
state 와 이벤트 핸들러를 하나로 묶어서 처리하는 방식
*/
const PlusMain_04 = () => {
  //[변수명,이벤트핸들러]=useState(0):숫자형 초기화
  //[변수명,이벤트핸들러]=useState(""):문자형 초기화
  //이벤트 핸들러는 camelCase로 작성.
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>카운트 {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default PlusMain_04;
