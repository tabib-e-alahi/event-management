

const MakeRequest = () => {
  return (
    <div className="w-full lg:mt-20">
        <h1 className='text-2xl lg:text-5xl font-medium text-center text-[#fcb900] mb-10 lg:mb-16'>Make An Event Request</h1>
      <div className="w-2/3 mx-auto">
      <form className="w-full mx-auto flex flex-col justify-center " noValidate>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
            <div className="w-full md:w-1/2 ">
              <label
                htmlFor="name"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Your Name (required)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-[#d7d7b7] focus:outline-none focus:border-heading h-11 md:h-12"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
            <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
              <label
                htmlFor="email"
                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
              >
                Your Email (required)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-[#d7d7b7] focus:outline-none focus:border-heading h-11 md:h-12"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
            >
              Event Name
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter Your Subject"
              className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-[#d7d7b7] focus:outline-none focus:border-heading h-11 md:h-12"
              autoComplete="off"
              spellCheck="false"
              aria-invalid="false"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-semibold text-sm leading-none mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-[#d7d7b7] focus:shadow focus:outline-none focus:border-heading placeholder-body"
              autoComplete="off"
              spellCheck="false"
              rows={4}
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div className="relative">
            <button
              data-variant="flat"
              className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default MakeRequest;
