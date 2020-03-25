import React, { createContext } from "react";

//Main에서 하위 컴포넌트에게 전달할 변수와 method 포함하는 provider 선언
const MessageProvider = createContext({
  message: "",
  changeMessage: msg => {}
});
export default MessageProvider;
