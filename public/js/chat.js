const socket = io(); // socket io 모듈을 사용하면 socket io client도 포함돼 있어서 사용 가능하다.

const query = new URLSearchParams(location.search); // url query문 가져올 수 있다.

const username = query.get("username");
const room = query.get("room");

// 서버로 join으로 데이터를 전송한다.
socket.emit(
  "join",
  (username,
  room,
  () => {
    if (error) {
      alert(error);
      location.href = "/";
    }
  })
);
