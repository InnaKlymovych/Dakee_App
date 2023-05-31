import React, { useState } from "react";

const LoginForm = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;

    const userData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const req = await fetch("http://127.0.0.1:3001/signup", requestOptions);
      const res = await req.json();
      //console.log(res);
      if (res.success) {
        const encodedData = encodeURIComponent(
          JSON.stringify({ id: res.id, name: userData.name })
        );
        window.location.href = `/tutorial?data=${encodedData}`;
      } else {
        //window.location.href = "/signup";//
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-box">
      <form
        noValidate
        action="http://127.0.0.1:3001/signup"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="input_name">
          <input
            /*onChange={e => setName(e.target.value)}*/
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>

        <div className="input_mail">
          <input
            /*onChange={e => setEmail(e.target.value)}*/
            name="email"
            placeholder="E-mail"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="input_password">
          <input
            /*onChange={e => setPassword(e.target.value)}*/
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            required
          />
        </div>

        <button type="submit" id="login-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
