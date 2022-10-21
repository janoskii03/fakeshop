import React, { useState } from "react";
import axios from "axios";

const Login = ({ token, setToken }) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {
        setError("");
        setPassword("");
        setUsername("");

        axios({
            url: "https://fakestoreapi.com/auth/login",
            method: "POST",
            data: {
                username: userName,
                password: password,
            },
        }).then((res) => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
        }).catch((err) => {
            console.log(err.response);
            setError(err.response.data);
        });
    }
    return (
        <div class="container" className="login">
            <div  >
                <h1>FAKESHOP</h1>
                <div class="mb-3">
                    <label > 帳號 </label>
                    <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label >密碼</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error ? <small style={{ color: "red" }}>{error}</small> : ""}
                <div >
                    <button onClick={loginHandler} class="ms-4">登入</button>
                </div>
            </div>
        </div >
    )


}

export default Login;