import React from 'react';

function Login() {
  return (
    <div>
      <form className="flex justify-center mt-52">
        <div className="md:flex-col w-full md:w-auto mb-6">
          <div className="w-full flex justify-start px-10 md:p-0">
            <label className=" text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4">
              User
            </label>
          </div>
          <div className="w-full md:w-80 flex justify-center px-10 md:p-0 mb-6">
            <input
              onChange={e => setUserName(e.target.value)}
              className="bg-gray-200 border-2 h-10 font-normal appearance-none text-gray-500  border-gray-200 rounded w-full"
              type="text"
            />
          </div>
          <div className="w-full flex justify-start px-10 md:p-0">
            <label className="block text-gray-400 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="w-full md:w-80 flex justify-center px-10 md:p-0 mb-6">
            <input
              onChange={e => setPassword(e.target.value)}
              className="bg-gray-200 border-2 h-10 font-normal appearance-none text-gray-500  border-gray-200 rounded w-full"
              type="password"
            />
          </div>
          <div className="w-full md:w-80 flex justify-center px-10 md:p-0 mb-6">
            <input
              className="bg-violet-600 border-2 h-10 font-bold appearance-none text-white  border-violet-600 hover:bg-violet-800 cursor-pointer rounded w-full"
              type="submit"
              value="Login"
            />
          </div>
          <div className="w-full md:w-80 flex justify-around px-10 md:p-0">
            <label className="block text-violet-500 font-bold mb-1 md:mb-0 pr-4">
              Forgot Password?
            </label>
            <label className="block text-violet-500 text-right font-bold mb-1 md:mb-0 pr-4">
              Sign Up
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
