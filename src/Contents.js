import styled from "styled-components";

const HeadStyle = styled.h1`
  font-size: 2em;
  color: royalblue;
  text-align: center;
`;

const HeadLine = ({ title }) => {
  return (
    <>
      <h1>기사 제목 : {title}</h1>
    </>
  );
};

const Body = ({ description }) => {
  return (
    <>
      <p>본문 내용 : {description}</p>
    </>
  );
};

const NewsDate = ({ date }) => {
  return (
    <>
      <p>작성일 : {date}</p>
    </>
  );
};

const Contents = ({ data }) => {
  return (
    <>
      <HeadLine title={data.title} />
      <Body description={data.description} />
      <NewsDate date={data.date} />
    </>
  );
};

export default Contents;
