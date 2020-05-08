import React, { Component } from "react";
import "../App.css";

class bbsDetail extends Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };
  state = { bbsVO: {} };
  //서버에게 bbsid값을 전달하고 데이터를 가져와달라
  bbsDetailfetch = () => {
    const bbsid = this.props.match.params.bbsid;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,
          bbsVO: result,
        });
      });
  };
  handleDelete = (e) => {
    if (window.confirm("delte?")) {
      const bbsid = this.props.match.params.bbsid;
      fetch("http://localhost:8080/bbs/api/delete/" + bbsid)
        .then((result) => {
          this.props.history.push("/");
        })
        .catch((err) => alert(err));
    }
  };
  handleUpdate = (e) => {
    const bbsid = this.props.match.params.bbsid;
    this.props.history.push("/bbsWrite/" + bbsid);
  };
  componentDidMount() {
    this.bbsDetailfetch();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const bbsid = this.props.match.params.bbsid;
    const { bbsVO } = this.state;
    return (
      <div>
        <h3>나는 {bbsid}</h3>
        <p>작성일자: {bbsVO.bbsDate}</p>
        <p>작성자: {bbsVO.bbsAuth}</p>
        <p>제목: {bbsVO.bbsTitle}</p>
        <p>내용: {bbsVO.bbsText}</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={(e) => this.props.history.push("/")}
        >
          목록으로 돌아
        </p>
        <button onClick={this.handleUpdate}>수정</button>
        <button onClick={this.handleDelete}>삭제</button>
      </div>
    );
  }
}

export default bbsDetail;
