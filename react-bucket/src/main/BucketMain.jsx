import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_flag_text: "☆",
        b_start_date: "2020-03-26",
        b_title: "리엑트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false
      }
    ]
  };

  // 현재 컴포넌트가 모두 연결되고 화면에 나타난 직후
  //rendering 바로 직전
  componentDidMount() {
    const strBucketList = localStorage.bucketList;
    if (strBucketList) {
      this.setState({
        bucketList: JSON.parse(strBucketList)
      });
      this.id = this.state.bucketList.length + 1;
    }
  }
  //화면 rendering이 끝나고
  //데이터 변경이 되어 다시 렌더링이 되려고 할때
  componentDidUpdate(preProps, preState) {
    //객체를 통째로 문자열로 변경
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);
    if (preString !== thisString) {
      //webb 내장 DB에 문자열 저장. key:bucketList
      localStorage.bucketList = thisString;
    }
  }
  changeFlag = id => {
    const b_flag = ["☆", "★", "○", "●"];
    this.setState({
      bucketList: this.state.bucketList.map(bucket => {
        if (bucket.b_id === id) {
          let flag = ++bucket.b_flag % 4;
          let flagText = b_flag[flag];

          return {
            ...bucket,
            b_flag_text: flagText,
            b_flag: flag
          };
        } else {
          return bucket;
        }
      })
    });
  };
  /*
  react 철학1
  기존의 객체(배열)은 원본을 손상시키지 말자.
  --아래와 같은 기능을 구현하지 마라--
   객체 배열에 새로운 항목 추가:push()
   객체 배열에서 항목을 제거:remove()
   객체 배열의 요소중에 어떤 항목을 변경할때 객체[0]=새로운값
  * 어떻게?*
  새로운 객체를 만들고
   추가:기존 객체+추가된 항목을 생성하여 새로운 객체에 복사
   변경: 기존 객체 변경내용만 변경하여 새로운 객체에 복사
  */
  bucket_add = b_title => {
    const { bucketList } = this.state;
    const date = new Date();

    // b_id 값은 버켓 리스트의 PK 값을 갖는 칼럼으로
    // state에 지정된 id 값을 1 증가 시키므로서 생성을 하고
    // 리스트의 b_id 칼럼에 값을 지정
    const bucket = {
      b_flag: 0,
      b_flag_text: "☆",
      b_start_date: date.toString(),
      b_title: b_title,
      b_end_date: "",
      b_end_check: false,
      b_cancle: false
    };
    this.setState({
      //id가 ++this.id
      //나머지 요소가 bucket에서 정의한 형태의 객체(vo)를 생성하여
      //원본의 bucketList에 추가하여
      //새로운 bucketList를 생성하라.
      bucketList: bucketList.concat({ b_id: ++this.id, ...bucket })
    });
  };
  bucket_update = (id, b_title) => {
    const { bucketList } = this.state;
    this.setState({
      //bucketlist를 map으로 반복실행하면서
      //각요소의 id가ㅓㅄ과 매개변수로 받은 id값이 일치하면
      //b_title만 새로운 값으로 변경하여 리턴하라
      bucketList: bucketList.map(bucket =>
        bucket.b_id === id ? { ...bucket, b_title: b_title } : bucket
      )
    });
  };
  //react lifecycle method
  /*
  만약 현재 Main compo 에 많은 state 변수들이 있을때
  한개라도 state 변수가 변동되면 rendering이 발생을 할텐데
  그러지말고 state변수중에서 bucketList만 감시하다가
  bucketList가 변경되었을때만 화면을 rendering 하라
  */
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bucketList !== this.state.bucketList;
  }
  render() {
    return (
      <div>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList
          bucket_update={this.bucket_update}
          bucketList={this.state.bucketList}
          changeFlag={this.changeFlag}
        />
      </div>
    );
  }
}

export default BucketMain;
