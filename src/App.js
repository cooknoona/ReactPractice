import "./App.css";
import JsxSyntax from "./JsxSyntax";
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";

function App() {
  const getName = "이국형";
  return (
    <>
      <h1>여기는 App.js 입니다.</h1>
      <JsxSyntax />
      <hr />
      <GreetingComponent />
      <hr />
      <WelcomeProps name={getName} job="백수" addr="경기도 파주시" isAdult={true} />
      <hr />
      <WelcomeProps name="박명수" job="아이돌" addr="서울특별시 강남구" isAdult={true} />
      <hr />
      <Articles />
    </>
  );
}

export default App;
