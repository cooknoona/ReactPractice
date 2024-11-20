import styled from "styled-components";

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  background-color: orange;
  color: white;
  align-items: center;
  justify-content: center;
`;

const data = [
  {
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "200won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];

const User = ({ user }) => {
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름: {user.userName}</p>
      <p>이메일: {user.email}</p>
    </DivBox>
  );
};

const UserList = () => {
  return <div>{data && data.map((user) => <User key={user.id} user={user} />)}</div>;
};

export default UserList;
