import React from "react";

function UserListComponent() {
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
          <tr>
            <td>a101</td>
            <td>김유신</td>
            <td>1999-09-09</td>
            <td>21</td>
            <td>
              <button>수정</button>
              <button>삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserListComponent;
