import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  render() {
    const { bucketList } = this.props;
    const list = bucketList.map(bucket => (
      <BucketItem
        key={bucket.b_id}
        bucketItem={bucket}
        bucket_update={this.props.bucket_update}
        changeFlag={this.props.changeFlag}
      />
    ));

    /*
    const list1 = bucketList.map(bucket => {
      return <BucketItem key={bucket.id} bucketItem={bucket} />;
    });*/
    return (
      <section>
        <table className="w3-table w3-table-all">
          <tr>
            <th>Flag</th>
            <th>추가일자</th>
            <th>Bucket</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {list}
        </table>
      </section>
    );
  }
}

export default BucketList;
