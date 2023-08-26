import React from "react";
import userData from "../../../../data";

const SystemLogin = ({ setIsLoggedIn }) => {
  const loginHandler = setIsLoggedIn(true);

  console.log(userData);

  return (
    <div className="h-[100vh]  bg-light flex items-center justify-center">
      <div className="p-10 w-80">
        <h3 className="text-center uppercase text-2xl border-b-primary border-b-2">
          Todo List
        </h3>
        <h4 className="my-2 uppercase text-md">Login</h4>
        <form>
          <div className="form__wrap">
            <label htmlFor="username">Email</label>
            <input type="text" name="username" className="outline-none" />
            <span className="error">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="outline-none" />
            <span className="error">*required</span>
          </div>
          <button className="btn btn--primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SystemLogin;
