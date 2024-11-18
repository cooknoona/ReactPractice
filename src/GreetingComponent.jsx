import "./App.css";

const member = {
  name: "이국형",
  job: "Student",
  addr: "경기도 파주시",
  gender: "남자",
};

const getGreeting = (user) => {
  return user ? <h1>환영합니다. {user}님.</h1> : <h1>환영 합니다. 방문자님.</h1>;
};

// class 선택자는 class가 아니고 className 으로 변경 됨
// 태그는 닫힘 태그이어야 한다
const GreetingComponent = () => {
  return (
    <div className="App">
      <p className="title-name">제 이름은 {member.name} 입니다.</p>
      <p className="title-name">직업은 {member.job} 이며,</p>
      <p className="title-name">주소는 {member.addr} 이며,</p>
      <p className="title-name">성별은 {member.gender} 입니다.</p>
      <hr />
      <p>{getGreeting(member.name)}</p>
    </div>
  );
};
export default GreetingComponent;
