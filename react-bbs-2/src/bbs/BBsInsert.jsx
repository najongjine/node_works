import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = { b_title: "" };
  //키보드로 입력박스에 문자를 입력하면 그 문자를 b_title에 저장하라
  handleChange = e => {
    this.setState({ ...this.state, b_title: e.target.value });
  };
  //middleware 설치
  bbsAxiosSubmit = ev => {
    //기본적으로 수행되는 이벤트를 하지말라.
    //submit()을 수행하지 말라.
    ev.preventDefault();
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };
  //ajax이용해서 서버에 데이터를 보내기
  bbsInsertSubmit = ev => {
    //기본적으로 수행되는 이벤트를 하지말라.
    //submit()을 수행하지 말라.
    ev.preventDefault();
    const { bbs_insert_url } = this.props;
    //let data = new FormData();
    //data.append("b_title", this.state.b_title);
    fetch(bbs_insert_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      //JSON.stringfy(): JSON 객체를 serialize된 문자열로 변환
      //JSON.parse()와 반대되는 개념
      //JSON.parse(): JSON 형태의 문자열로 (수신)된 값을 JSON객체로 변환
      body: JSON.stringify({
        b_title: this.state.b_title
      })
    });
    //표준 js에서는 return false 마지막에 써주면 submit() event를 중단할수 있었는데, react에선 안통함
    //react에선 이벤트 시작되는 부분에 이벤트 버블링을 방지한느 코드를 넣어 주어야 한다.
    return false;
  };
  render() {
    return (
      <form
        onSubmit={this.bbsInsertSubmit}
        className="w3-container w3-row-padding"
      >
        <div className="w3-col s9 w3-padding">
          <input
            onChange={this.handleChange}
            value={this.state.b_title}
            className="w3-input w3-border w3-cell"
          />
        </div>
        <div className="w3-col s3 w3-padding">
          <button type="submit" className="w3-button w3-blue w3-cell">
            저장
          </button>
        </div>
      </form>
    );
  }
}

export default BBsInsert;
