import React, { Component } from "react";
import PropTypes from "prop-types";
import BBsList from "./bbsList";

const BBS_FETCH_URL = "http://localhost:8080/bbs/api/json";
class bbsMain extends Component {
  state = {
    bbsList: [],
  };
  fetchBBsList = () => {
    fetch(BBS_FETCH_URL)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          bbsList: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    /*
      state 변수값을 간편하게 자식 컴포넌트에게 전달하기 위해 비 구조화를 실행
      */
    const { bbsList } = this.state;
    return (
      <div>
        <BBsList bbsList={bbsList} />
      </div>
    );
  }
  componentWillMount() {}

  /*
  현재 BBsMain component가 랜더링되어 화면에 그려질때 호출되는 method로
  여기에서 서버로부터 데이터를 가져오는 fetchBBsList를 실행한다.
  */
  componentDidMount() {
    this.fetchBBsList();
  }

  componentWillReceiveProps(nextProps) {}

  /*
  LifeCycle method를 통해서 어떤 일을 실행하려고 할때 return true를 실행해 주자
  */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
}

bbsMain.propTypes = {};

export default bbsMain;
