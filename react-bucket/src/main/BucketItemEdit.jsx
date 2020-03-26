import Moment from "react-moment";
import React, { Component } from "react";

class BucketItemEdit extends Component {
  state = {
    //this.props.bucketItem.b_title
    bucket_title: ""
  };
  /*
  view 모드에서 edit 모드로 변겨욀때 inputbox에 view 모드에서 보았던 문자열(title)을
  state 변수에 담아주는 부분
  */
  componentDidMount() {
    const { bucketItem } = this.props;
    this.setState({
      bucket_title: bucketItem.b_title
    });
  }
  onChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  onKeyPress = ev => {
    if (ev.key === "Enter") {
      //현재 리스트의 id값과 새로 입력한 버킷 문자열을 main으로 전송해서 update을 수행
      this.props.bucket_update(
        this.props.bucketItem.b_id,
        this.state.bucket_title
      );
      this.props.onEditing();
    }
  };
  render() {
    const { bucketItem } = this.props;
    return (
      <React.Fragment>
        <td>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td>
          {/*
          input box에서 기존 b_title 값을 변경 하도록 할텐데
          그럴려면 value 옵션에 state형 변수를 포함해야 한다.
          그래야만 onChange 이벤트에서 키보드로 입력한 내용을 정상적으로 inputbox에 보여주도록 한다.
          그러나, state.b_title은 초기값이 "".
          그럼 props로 받은 b_title을 state.b_title.에 주입하여 보여주고 수정할수 있도록 해야한다.
          props로 받은 값을 state형 변수에 주입하기 위해서 lifecycle method 중에서 componentDidMount() 에서
          처리를 해주어야 한다.
           */}
          <input
            name="bucket_title"
            onChange={this.onChange}
            onClick={this.changeEdit}
            onKeyPress={this.onKeyPress}
            value={this.state.bucket_title}
          />
        </td>
        <td>
          {/*
            // react에서 조건별로 tag를 표시하고자 할때
            {검사값? (true 일때) : (false 일때)}
             */}
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            "◎"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucketItem.b_cancel} />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemEdit;
