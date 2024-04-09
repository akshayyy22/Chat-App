import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div>
          <div>
            <h2 className="text-2xl font-bold text-slate-200 mb-4 text-center">
              Sign Up
            </h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex space-x-4 mb-4">
                <input
                  placeholder="First Name"
                  className="bg-slate-800 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
                <input
                  placeholder="Username"
                  className="bg-slate-800 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </div>
              <input
                placeholder="Email"
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />

              <input
                placeholder="Password"
                className="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <input
                placeholder="Confirm Password"
                className="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />

              <GenderCheckbox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />

              <p className="text-slate-300 mt-4">
                Already have an account?&nbsp;
                <Link
                  to="/login"
                  className="text-sm text-slate-400 -200 hover:underline mt-4"
                  href="#"
                >
                  Login
                </Link>
              </p>
              <button
                className="bg-gradient-to-r from-slate-500 to-slate-400 text-slate-200 font-bold py-2 px-4 rounded-md mt-4 hover:bg-slate-500 hover:to-slate-400 transition ease-in-out duration-150"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-6 px-4 py-2 bg-slate-400 rounded-full text-slate-700 text-sm font-medium">Created by Akshay Esackimuthu</div>

    </div>
  );
};

export default SignUp;
