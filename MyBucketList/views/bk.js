script.$(function() {
  var updateCB = function() {
    $.ajax({
      url: "/myBucketList/update/#{bucketVO._id}",
      type: "PUT",
      data: $("form").serialize()
    })
      .done(function(result) {
        if (result.msg == "OK") {
          alert(result.data.nModified + "개의 변경 성공");
          document.location.replace("/myBucketList/view/#{bucketVO._id}");
        } else if (result.msg == "UPDATE FAIL") {
          if (result.data.nModified < 1) {
            alert("데이터를 업데이트 하지 못함");
          }
        }
        return false;
      })
      .fail(function(err) {
        alert("서버와 통신 오류");
        return false;
      })
      .always(function() {
        return false;
      });
  };
  let version = "!{bucketVO.__v}";
  $(".btn-save").click(function() {
    if (version != "") {
      updateCB();
      return false;
    }
    $("form").submit();
  });
});
