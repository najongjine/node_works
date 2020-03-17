import React from "react";

/*
this.props:부모 컴포넌트에서 자식 컴포넌트에 변수를 전달하는 통로
*/
const RSC_SUB = ({ name }) => {
  return <div>나는 {name} 입니다 </div>;
};

export default RSC_SUB;
