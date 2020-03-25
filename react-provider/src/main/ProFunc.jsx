import React, { useContext } from "react";
import MProvider from "../provider/MsgProvider";

const ProFunc = () => {
  const msgContext = useContext(MProvider);
  return (
    <div>
      <p>나는함수 컴포넌트</p>
      <p>{msgContext.message}</p>
    </div>
  );
};

export default ProFunc;
