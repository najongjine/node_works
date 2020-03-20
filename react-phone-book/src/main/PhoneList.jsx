import React, { Component } from "react";
import PhoneItem from "./PhoneItem";

class PhoneList extends Component {
  render() {
    //phoneMain에서 보내준 모든 매개변수 중에서
    //phoneList가 있을테니 내가 사용할수 있도록 추출해 달라.
    const { phoneList, name, tel, addr, my_value } = this.props;
    return (
      <div>
        <p>리스트에서 myvalue:{my_value}</p>
        <PhoneItem />
      </div>
    );
  }
}

export default PhoneList;
