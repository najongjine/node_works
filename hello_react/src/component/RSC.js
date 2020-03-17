import React from "react";
import RSC_SUB from "./RSC_SUB";

/*
함수형 콤포넌트 생성
const RSC = () => {}
함수형 component는 2014버전에서부터 사용가능

App.js>RCC.jsx, (RSC.js > RCC_SUB.jsx)

RCC_SUB 컴포넌트에서 name 변수에 값을 담아서 전달하기
*/
const RSC = () => {
  return (
    <div>
      <div>나는 두번째 함수형 컴포넌트 입니다</div>
      <RSC_SUB name="bbb" />
    </div>
  );
};

export default RSC;
