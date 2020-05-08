import React from "react";
import axios from "axios";

class bbsWrite extends React.Component {
  state = {
    id: 0,
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  /*
  axios를 사용하여 서버로 데이터를 전송

  Router로 감싸진 상태의 컴포넌트들은 props로 match,location,history와 같으 객체를
  상위 Router로 전달 받는다
  match,location은 보통 query 문자열을 통하여 변수값을 전달받을때 사용하고
  history는 push() 메서드를 사용하여 어떤 일을 수행한후
  원하는 path로 점프하는 코드를 수행할수 있다.
  */
  bbsInsert = () => {
    let formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("bbsDate", this.state.bbsDate);
    formData.append("bbsAuth", this.state.bbsAuth);
    formData.append("bbsTitle", this.state.bbsTitle);
    formData.append("bbsText", this.state.bbsText);
    axios
      .post("http://localhost:8080/bbs/api/insert", formData)
      .then((result) => {
        const bbsid = result.data.id;
        this.props.history.push("/bbsDetail/" + bbsid);
      })
      .catch((error) => console.log(error));
  };
  bbsDetailfetch = () => {
    const bbsid = this.props.match.params.bbsid || 0;
    if (bbsid < 1) return;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          id: result.id,
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,
        });
      });
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.bbsDetailfetch();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("#" + this.props);
    return (
      <div>
        <div className="form-group">
          <label>작성일자</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.bbsDate}
            name="bbsDate"
            type="date"
            className="form-control"
            placeholder="날자를 입력"
          />
        </div>
        <div className="form-group">
          <label>작성자</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.bbsAuth}
            name="bbsAuth"
            className="form-control"
            placeholder="작성자 입력"
          />
        </div>
        <div className="form-group">
          <label>제목</label>
          <input
            onChange={this.handleOnChange}
            value={this.state.bbsTitle}
            name="bbsTitle"
            className="form-control"
            placeholder="제목 입력"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={this.handleOnChange}
            name="bbsText"
            value={this.state.bbsText}
            className="form-control"
            rows="5"
          />
        </div>
        <div className="button-group text-right">
          <button
            onClick={this.bbsInsert}
            type="button"
            className="btn btn-primary"
          >
            save
          </button>
        </div>
      </div>
    );
  }
}

export default bbsWrite;
