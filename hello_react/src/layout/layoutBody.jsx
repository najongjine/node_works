import React from "react";
import "./layoutBody.css";

const layoutBody = () => {
  return (
    <section className="main-body">
      <article className="main-left">
        <p>여기는 본문 왼쪽 부분입니다.</p>
      </article>
      <article className="main-right">
        <p>여기는 본문 오른쪽 부분 입니다.</p>
      </article>
    </section>
  );
};

export default layoutBody;
