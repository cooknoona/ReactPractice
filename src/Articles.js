import Contents from "./Contents";

const data = [
  {
    title: "정치",
    description: "정치 내용",
    date: "2024-11-13",
  },
  {
    title: "경제",
    description: "경제 내용",
    date: "2024-11-14",
  },
  {
    title: "시사",
    description: "시사 내용",
    date: "2024-11-15",
  },
  {
    title: "연예",
    description: "연예 내용",
    date: "2024-11-16",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Contents data={e} />)}
    </>
  );
};

export default Articles;
