import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function UserModifyComponent() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    birth: "",
    age: 0,
  });

  // 쿼리스트링 수신
  const userid = searchParams.get("userid");

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // 상태 업데이트
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // json-server 수정 요청
    fetch(`http://localhost:3000/users/${userid}`, {
      method: "PUT",
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
    <div className="UserModifyComponent">
      <h4>회원수정</h4>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" name="uid" value={user.id} readOnly />
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
                <input type="submit" value={"수정하기"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UserModifyComponent;
