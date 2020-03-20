import React, { Component } from "react";
//import PropTypes from "prop-types";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

class PhoneMain extends Component {
  id = 3;
  state = {
    phoneList: [
      { id: 0, name: "나", phone: "나나나" },
      { id: 1, name: "친1", phone: "친1" },
      { id: 2, name: "친2", phone: "친2" }
    ]
  };
  //진리의 원천(source of Truth)
  state = { my_value: "" };
  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}
  my_value_change = arg => {
    this.setState({ my_value: arg });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h2>My Phone Book</h2>
        </header>
        <section>
          <PhoneInsert
            my_value={this.state.my_value}
            my_value_change={this.my_value_change}
          />
          <PhoneList
            phoneList={this.state.phoneList}
            my_value={this.state.my_value}
            name="a1"
            tel="a2"
            addr="a3"
          />
        </section>
      </React.Fragment>
    );
  }
}

//PhoneMain.propTypes = {};

export default PhoneMain;
