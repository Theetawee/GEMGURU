import { BsX } from "react-icons/bs";
import toast from "react-hot-toast";


const Modal = ({ func, isOpen }: { func: () => void, isOpen: boolean }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //const email = e.currentTarget.email.value;
        toast.success("Thanks for signing up!");
        e.currentTarget.reset();
        func();
    }




  return (
      <>
          <div
              id="default-modal"
              onClick={func}
              tabIndex={1}
              aria-hidden="true"
              className={`${isOpen ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 bg-gray-800/70 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
          >
              <div onClick={(e) => e.stopPropagation()} className="relative p-4 z-[100] animate-fadeIn w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow-lg border border-gray-800  dark:bg-gray-900">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              Welcome Aboard
                          </h3>
                          <button
                              onClick={func}
                              type="button"
                              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-hide="default-modal"
                          >
                              <BsX className="w-5 h-5"/>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>

                      <div className="p-4 md:p-5 space-y-4"><p>
                          Stay ahead of the curve! Subscribe to our newsletter
                          and be the first to know when GemGuru launches.
                          Receive exclusive updates on discounts, promotions,
                          and exciting new products. Don't miss out on the
                          latest news – be part of the GemGuru community!</p>
                          <form className="py-8" onSubmit={handleSubmit}>
                              <div className="relative">
                                  <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                      placeholder=" "
                                  />
                                  <label
                                      htmlFor="floating_outlined"
                                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                  >
                                      Email Address
                                  </label>
                              </div>
                              <div className="py-4">
                                  <button className="py-2 rounded hover:text-gray-600 hover:bg-white transition-all px-5 border border-gray-600 text-white">Subscribe</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Modal
