import React, { Component } from "react";
import BucketItemView from "./BucketItemView";
import BucketItemEdit from "./BucketItemEdit";
import BucketContext from "../provider/BucketProvider";

class BucketItem extends Component {
  static contextType = BucketContext;
  state = {
    isEditing: false
  };

  handleOnEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  render() {
    const { bucketItem } = this.props;
    const item_cancel = {
      backgroundColor: "yellow",
      color: "gray"
    };
    return (
      <tr
        onClick={this.handleOnEditing}
        style={bucketItem.b_cancle ? item_cancel : {}}
      >
        {this.state.isEditing ? (
          <BucketItemEdit
            bucketItem={bucketItem}
            onEditing={this.handleOnEditing}
          />
        ) : (
          <BucketItemView
            bucketItem={bucketItem}
            onEditing={this.handleOnEditing}
          />
        )}
      </tr>
    );
  }
}

export default BucketItem;
