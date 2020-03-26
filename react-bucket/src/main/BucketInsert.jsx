import React, { Component } from "react";

class BucketInsert extends Component {
  //input box를 사용하는 component에서 사용자가 입력한 문자열을 임시로 담고있을 변수 선언
  state = {
    bucket_title: ""
  };

  handleOnChange = event => {
    this.setState({
      //bucket_title: event.target.value,
      [event.target.name]: event.target.value
    });
  };
  //enter 기 이벤트 처리
  handleOnKeyPress = ev => {
    const { bucket_add, onEditing } = this.props;
    if (ev.key == "Enter") {
      bucket_add(this.state.bucket_title);
      this.setState({ bucket_title: "" });
    }
  };
  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          {/*inputbox 처리방법
            1. 컴포넌트 자체에 input box 의 value로 지정할 state 변수 선언
            2. value 속성의 state 변수를 지정 => inputbox는 read only 상태로 변화
            3. 사용자의 입력을 받아서 state 변수에 저장할수 있도록 onChange Event Handler 를 만든다.*/}
          <input
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleOnKeyPress}
            name="bucket_title"
            className="w3-input  w3-border w3-hover-gray w3-round"
            placeholder="버킷에 추가할 내용을 입력 하세요"
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
