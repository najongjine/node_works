import Moment from "react-moment";
import BucketContext from "../provider/BucketProvider";

import React, { Component } from "react";

class BucketItemView extends Component {
  static contextType = BucketContext;

  noChangeEdit = ev => {
    ev.stopPropagation();
  };
  changeEdit = ev => {
    ev.stopPropagation();
    const { bucketItem } = this.props;
    if (bucketItem.b_cancle) {
      alert("취소된 버킷은 수정할수 없습니다");
      return false;
    }
    if (bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 수정할수 없습니다");
      return false;
    }
    this.props.onEditing();
  };
  handleChangeFlag = ev => {
    ev.stopPropagation();
    /*
    전달받은 changeFlag와 bucketItem을 잘 살펴봐야한다.
    bucketItem은 바로 위(BucketItem)에서 전달받은 state형 변수
    changeFlag:Main에서 여기까지 전달 되어온 handler method
    */
    const { bucketItem } = this.props;
    const { changeFlag } = this.context;
    changeFlag(bucketItem.b_id);
  };
  onComplete = ev => {
    ev.stopPropagation();
    const { bucket_complete } = this.context;
    const { b_id, b_end_date, b_cancle } = this.props.bucketItem;
    if (b_cancle) {
      alert("취소된 버킷은 완료설정을 할수 없습니다");
      return false;
    }
    if (b_end_date === "") {
      if (!window.confirm("complete?")) {
        return false;
      } else {
        if (!window.confirm("버킷 리스트를 다시 시작할까요?")) {
          return false;
        }
      }
    }

    //해당 항목을 완료로 처리
    bucket_complete(b_id, b_end_date);
  };
  toggleCancle = () => {
    if (this.props.bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 취소할수 없습니다");
      return false;
    }
    if (!window.confirm("버킷을 취소 하겠습니까?")) {
      return false;
    }
    this.context.toggleCancle(this.props.bucketItem.b_id);
  };
  render() {
    const { bucketItem } = this.props;
    const td_style = {
      cursor: "pointer"
    };
    const td_through = {
      cursor: "pointer",
      textDecorationLine: "line-through",
      textDecorationStyle: "wavy",
      textDecorationColor: "red"
    };

    return (
      <React.Fragment>
        <td style={td_style} onClick={this.handleChangeFlag}>
          {bucketItem.b_flag_text}
        </td>
        <td onClick={this.noChangeEdit}>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td
          style={bucketItem.b_end_date !== "" ? td_through : td_style}
          onClick={this.changeEdit}
        >
          {bucketItem.b_title}
        </td>
        <td style={td_style} onClick={this.onComplete}>
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
        <td onClick={this.noChangeEdit}>
          <input
            onClick={this.toggleCancle}
            type="checkbox"
            checked={bucketItem.b_cancle}
          />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
