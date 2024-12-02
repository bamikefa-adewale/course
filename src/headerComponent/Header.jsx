const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="my-0 mx-4 lg:mx-36 py-[45px] px-[20px]">
        <div className="text-center">
          <h2 className="text-white text-[30px] lg:text-[50px] font-poppins">
            Stay Up To Date
          </h2>
          <p className="font-openSans text-[14px] mt-2">
            Join my newsletter for up-to-date information on everything Web Dev
            Simplified as well as free tips and tutorials.
          </p>
        </div>
        <div className="justify-center text-center">
          <div className="lg:flex items-center justify-center gap-5  ">
            <div className="flex flex-row  gap-5 my-4">
              <input
                type="text"
                placeholder="Name"
                className=" py-2 px-2 text-2xl rounded  lg:w-full w-full text-black outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-2 text-2xl rounded lg:w-full w-full text-black outline-none"
              />
            </div>
            <button className="font-poppins cursor-pointer rounded-sm px-3 py-3 lg:w-40 w-full bg-[#00AAFF]  hover:bg-blue-600">
              Join Us Now
            </button>
          </div>
          <div className="  mb-5">
            <p className="font-openSans text-[14px]">
              You're signing up to receive emails from Web Dev Simplified
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
