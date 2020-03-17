/*
useState
React 16.8.x 이후에 사용가능한 객체이며
Hooks 기능을 도입한 React엔진에 장착되어있고
함수형 component state형 변수를 사용할수 있다.
props 변수는 읽기전용.
state 변수는 r/w.
*/
import React, { useState } from "react";

const PlusMain03 = () => {
  //useState()
  // 함수형 컴포넌트에서 state형 변수를 선언하고 초기화를 수행하는 method.
  // 변수형이 [변수명,함수명] 형식의 배열로 생성한다.
  const [message, setMessage] = useState("");
  const onInput = () => setMessage("welcome");
  const onOutput = () => setMessage("bye");
  return (
    <div>
      <button onClick={onInput}>입장</button>
      <button onClick={onOutput}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default PlusMain03;
