import React from "react";

function UserRegisterComponent() {
  return (
    <div className="UserRegisterComponent">
      <h4>회원등록</h4>
      <form>
        <table border={1}>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" name="uid" value={null} onChange={null} />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input type="text" name="name" value={null} onChange={null} />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <input type="date" name="birth" value={null} onChange={null} />
              </td>
            </tr>
            <tr>
              <td>나이</td>
              <td>
                <input type="number" name="age" value={null} onChange={null} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <input type="submit" value={"등록하기"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UserRegisterComponent;
