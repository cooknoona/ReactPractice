/* Component : 리액트에서 UI를 구성하는 독립적인 모듈
    UI와 상태(State)를 가진다
    대문자로 시작해야 함, 소문자로 시작하면 html 태그로 판단해 버림
    부모 Component 에서 자식 Component로 정보를 전달할 때는 props로 전달해야 함
    props는 키워드가 아님 */
const WelcomeProps = (props) => {
  const { name, job, addr, isAdult } = props;
  return (
    <>
      <h1>안녕하세요. {name}님</h1>
      <p>직업 : {job}</p>
      <p>주소 : {addr}</p>
      {isAdult ? <p>성인입니다.</p> : <p>미성년자 입니다.</p>}
    </>
  );
};

export default WelcomeProps;
