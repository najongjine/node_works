import React, { Component } from "react";

class PhoneInsert extends Component {
  state = {
    name: "",
    phone: ""
  };

  /*
  react에서 input 박스는 HTML 에서와 달리 직접 값을 입력할수 있는 도구가 아니다.
  때문에 input box의 onChange 이벤트를 선언하여 입력된 문자열을 현재 클래스에 선언된 state 변수에 담는 코딩이 필요하다.
  */
  handleChange = e => {
    const { name } = this.state;
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = e => {
    const { my_value_change } = this.props;
    my_value_change(this.state.name);
  };
  render() {
    const { my_value } = this.props;
    return (
      <form>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="이름을 입력하세요"
          name="name"
        />
        <input
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="전화번호"
          name="phone"
        />
        <button onClick={this.handleClick} type="button">
          저장
        </button>
        <p>insert에서 {my_value}</p>
        <p>{this.state.my_value}</p>
      </form>
    );
  }
}

export default PhoneInsert;
