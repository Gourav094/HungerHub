import { Link } from "react-router-dom"
import swal from "sweetalert"

const Contact = () => {
    return (
      <div className="bg-cyan-700 px-4 min-h-[100vh]">
          <div className="mx-28 py-12 text-gray-100">
              <h1 className="text-3xl font-bold">Help & Support</h1>
              <div>Let's take a step ahead and help you better.</div>
          </div>
          <div className="bg-white max-w-[1300px] my-0 mx-auto h-[500px] shadow">
            <div className="min-w-[1200px] my-0 mx-10 py-12">
              <div className="flex">
                <div className="w-1/3">
                    <ul className="py-5 pl-5 bg-gray-200  font-semibold shadow text-gray-600">
                      <li className="cursor-pointer py-6 px-10 hover:bg-white">Issue with live orders</li>
                      <li className="cursor-pointer py-6 px-10 hover:bg-white">General issues </li>
                      <li className="cursor-pointer py-6 px-10 hover:bg-white">Returns and refunds</li>
                      <li className="cursor-pointer py-6 px-10 hover:bg-white">Legal, Terms & Condition</li>
                      <li className="cursor-pointer py-6 px-10 hover:bg-white">FAQs</li>
                    </ul>
                </div>
                <div className="py-10 pl-20 ">
                    <div className="text-3xl pb-10 tracking-wide font-semibold">
                      <h1>Want to know More?</h1>
                      <h1>React out to us!</h1>
                    </div>
                    <div>
                      <h3 className="text-gray-800">Full Name</h3>
                      <input type="text"
                              className=" min-w-[400px] text-[14px] border mt-1 px-3 py-[5px] border-gray-500 focus:outline-none"
                              maxLength={"50"}
                              placeholder="Enter your name"
                              />  
                      <h3 className="text-gray-800 mt-2">Email</h3>
                      <input type="text"
                              className="min-w-[400px] text-[14px] border mt-1 px-3 py-[5px] border-gray-500 focus:outline-none"
                              maxLength={"50"}
                              placeholder="Enter your email"
                              />  
                      <h3 className="text-gray-800 mt-2">Comments</h3> 
                      <input type="text"
                              className="min-w-[400px] text-[14px] border mt-1 px-3 py-[5px] border-gray-500 focus:outline-none"
                              placeholder="Type text"
                              />  
                    </div>
                    <button className="mt-6 border py-1 px-3 bg-orange-500 text-white rounded-md ml-40" 
                      onClick={() => {
                        swal('Thankyou for choosing us!','Stay Tuned :)')
                      }}
                    >Submit</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Contact
