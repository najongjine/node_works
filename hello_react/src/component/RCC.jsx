//지금부터 이 문서는 React의 컴퍼넌트다.
import React, { Component } from "react";
import "./RCC.css";
import RCC_SUB from "./RCC_SUB";

/*
ES6의 class 문젖으로 컴포넌트를 생성
보통 jsx(js)파일의 형식으로 저장
가급적 파일의 첫글자, 클래스의 첫글자는 대문자
파일이름과 클래스이름을 일치
모든 따옴표는 큰따옴표로 통일하자
클래스는 1개의 파일에 1개만 작성할수 있다
*/
class RCC extends Component {
  render() {
    return (
      <div>
        <div className="myDiv">나는 첫번째 rcc 컴퍼넌트</div>
        <RCC_SUB name="aaa" />
      </div>
    );
  }
}
// 이 콤퍼논트를 외부에서 사용할수 있도록 선언
// export default는 한 파일에 하내만 있을수 있다.
export default RCC;
