import React, { useEffect, useState } from "react";

function UserListComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // mount 전
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // users 상태 업데이트
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="UserListComponent">
      <h4>회원목록</h4>
      <table border={1}>
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>나이</th>
            <th>관리</th>
          </tr>

          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.age}</td>
              <td>
                <button>수정</button>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListComponent;
