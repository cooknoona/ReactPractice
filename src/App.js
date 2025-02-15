import "./App.css";
import JsxSyntax from "./JsxSyntax";
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";
import Counter from "./ClassComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventHandler from "./EventHandler";
import DropDownComponent from "./DropDownComponent";
import RadioButton from "./RadioButton";
import TableMap from "./TableMap";
import UserList from "./UserList";
import TodoList from "./TodoList";
import UseInfo from "./UseInfo";
import ReducerState from "./ReducerState";
import Average from "./Average";
import CreateRef from "./useRefPractice";
import InnerValueMaintainence from "./useRefPractice2";

function App() {
  const getName = "이국형";
  return (
    <>
      {/* <h1>여기는 App.js 입니다.</h1>
      <JsxSyntax />
      <hr />
      <GreetingComponent />
      <hr />
      <WelcomeProps name={getName} job="백수" addr="경기도 파주시" isAdult={true} />
      <hr />
      <WelcomeProps name="박명수" job="아이돌" addr="서울특별시 강남구" isAdult={true} />
      <hr />
      <Articles />
      <hr />
      <MyComponent name="홍길동" age={21} />
      <hr />
      <BoxComponent>첫번째 박스 입니다.</BoxComponent>
      <BoxComponent>두번째 박스 입니다.</BoxComponent>
      <hr />
      <Counter />
      <hr />
      <Say />
      <hr />
      <Clock />
      <hr />
      <EventHandler />
      <hr />
      <DropDownComponent />
      <hr />
      <RadioButton />
      <hr />
      <TableMap />
      <hr />
      <UserList />
      <hr />
      <TodoList />
      <hr />
      <UseInfo />
      <ReducerState /> */}
      {/* <Average /> */}
      {/* <CreateRef /> */}
      <InnerValueMaintainence />
    </>
  );
}

export default App;
