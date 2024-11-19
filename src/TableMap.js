import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
  }
  th {
    background-color: royalblue;
    color: white;
  }
`;

const responseData = [
  {
    id: 1,
    name: "길동",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "세종",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 3,
    name: "순신",
    addr: "서울시 강남구 압구정동",
  },
  {
    id: 4,
    name: "성계",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 5,
    name: "방원",
    addr: "서울시 강남구 삼성동",
  },
];

const TableMap = () => {
  const [memberData, setMemberData] = useState("");

  useEffect(() => {
    // 이때 서버와 비동기 통신이 일어남
    setMemberData(responseData);
  }, []); // 의존성 주입으로 인해 렌더링 조건에 만족하고 useEffect가 호출됨

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map((member, index) => (
          /* handleTableRowClick 이벤트를 통해 클릭시 정보를 Console창에 띄우준다.
              추후에 상세정보 보기 등등 여러가지 클릭 이벤트를 활용 가능 */
          <tr key={index} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};

export default TableMap;
