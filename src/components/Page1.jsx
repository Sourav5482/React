const Page1 = () => {
    return (
      <div className="flex flex-col h-[91.5vh] justify-center items-center px-4 text-center scrollbar-hide ">
        {/* Logo */}
        <div>
          <img className="h-20 sm:h-24 md:h-28 lg:h-32" src="src/assets/react.svg" alt="" />
        </div>
  
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-2">React</h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-2">
            The library for web and native user interfaces
          </h1>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-5">
            <button className="px-5 sm:px-7 py-3 font-semibold text-white text-lg bg-[#3997B6] rounded-xl sm:rounded-2xl hover:bg-[#6ea9be] cursor-pointer">
              Learn React
            </button> 
            <button className="px-4 sm:px-5 py-3 font-semibold text-black text-lg bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-300 hover:bg-gray-100 cursor-pointer">
              API Reference
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Page1;
  