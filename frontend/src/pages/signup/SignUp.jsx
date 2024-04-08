import GenderCheckbox from "./GenderCheckbox.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div>
          <div>
		  <h2 class="text-2xl font-bold text-slate-200 mb-4 text-center">Sign Up</h2>
            <form class="flex flex-col">
              <div class="flex space-x-4 mb-4">
                <input
                  placeholder="First Name"
                  class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
                <input
                  placeholder="Last Name"
                  class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                />
              </div>
              <input
                placeholder="Email"
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
              />
             
              <input
                placeholder="Password"
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <input
                placeholder="Confirm Password"
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
              />
              <label
                class="text-sm mb-2 text-slate-300 cursor-pointer"
                for="gender"
              >
                Gender
              </label>
              <select
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              
              <input
                class="bg-slate-800 text-gray-200 border-0 rounded-md p-2"
                id="age"
                type="date"
              />
              <p class="text-slate-300 mt-4">
                Already have an account ?&nbsp;
                <a
                  class="text-sm text-slate-400 -200 hover:underline mt-4"
                  href="#"
                >
                   Login
                </a>
              </p>
              <button
                class="bg-gradient-to-r from-slate-500 to-slate-400 text-slate-200 font-bold py-2 px-4 rounded-md mt-4 hover:bg-slate-500 hover:to-slate-400 transition ease-in-out duration-150"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
