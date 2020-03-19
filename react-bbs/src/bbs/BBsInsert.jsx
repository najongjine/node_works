import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = { b_title: "" };
  //키보드로 입력박스에 문자를 입력하면 그 문자를 b_title에 저장하라
  handleChange = e => {
    this.setState({ ...this.state, b_title: e.target.value });
  };
  //middleware 설치
  bbsAxiosSubmit = () => {
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(err => console.log(err));
    return false;
  };
  //ajax이용해서 서버에 데이터를 보내기
  bbsInsertSubmit = () => {
    const { bbs_insert_url } = this.props;
    let data = new FormData();
    data.append("b_title", this.state.b_title);
    console.log("btitle2", data.b_title);
    fetch(bbs_insert_url, { method: "POST", body: data });
    return false;
  };
  render() {
    return (
      <form
        onSubmit={this.bbsAxiosSubmit}
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
          <button className="w3-button w3-blue w3-cell">저장</button>
        </div>
      </form>
    );
  }
}

export default BBsInsert;
