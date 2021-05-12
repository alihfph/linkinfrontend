import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Signin = () => {
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    fetch("/login/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          // console.log(data.message);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div >
      <div >
        <h2>Linkdin</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />

        <button
          onClick={() => PostData()}
        >
          Signin
        </button>
        <h5>
          <Link to="/signup">Dont have an account ?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
