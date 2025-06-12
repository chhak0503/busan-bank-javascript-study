import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegisterComponent() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    birth: "",
    age: 0,
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // json-server 등록 요청
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // 목록 이동
        navigate(`/user/list`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="UserRegisterComponent">
      <h4>회원등록</h4>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  name="id"
                  value={user.id}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <input
                  type="date"
                  name="birth"
                  value={user.birth}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>나이</td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={user.age}
                  onChange={changeHandler}
                />
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
