import owl from "../Images/owl2.png"


function Account() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8">
    <div className="sm:mx-auto relative sm:w-full sm:max-w-sm">
      <img src={owl} className='w-[180px] h-[180px] ml-20 mb-[-4vw] bg-transparent  ' alt="logo"  />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Hey ! <span className="text-orange-500">Welcome Back</span> 
      </h2>
    </div>

    <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-3" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block ml-5 text-lg font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-full border-0  pl-8 py-3 text-gray-900 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400    sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block ml-5 text-lg font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-normal ">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2 ">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-full border-0 pl-8 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
        <h1 className="ml-[15vw] mt-[-.5vw] mb-[-.1vw]">Or</h1>

<button
  type="#"
  className="flex w-full mt-[1vw] mb-6 justify-center rounded-full  px-3 py-3 text-lg font-semibold leading-6 text-zinc-600 bg-[#e2edfc]  border-1  "
>
 
  Google
</button>

          <button
            type="submit"
            className="flex w-full justify-center rounded-full bg-[#FB7D42] px-3 py-5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[#f57c44] focus-visible:outline focus-visible:outline-2 "
          >
            Sign in
          </button>

          

        </div>
      </form>

     
    </div>
  </div>
  )
}

export default Account