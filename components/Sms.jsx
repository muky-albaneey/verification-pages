import { FiCopy } from "react-icons/fi"; 

const Sms = () => {
  return (
    <div className="w-full text-green-600 my-0 mx-auto lg:w-3/6 text-white flex justify-start flex-col">
    <header className="w-full bg-green-700 font-bold w-full h-14 flex flex-col justify-center items-start  p-4">
      <p className=" w-full font-bold mt[-300px]">SMS Confirmation</p>
      
    </header>
    <main className="h-80 w-full flex justify-around flex-col items-start p-4">  
      <h4 className="text-red-800">
      Kindly send the message displayed below as an SMS to the Phone number displayed below also for confirmation.</h4>
      <div className="flex justify-center flex-col gap-1.5">
        <h4 className="text-green-800 font-bold flex gap-2.5 items-center cursor-pointer">“Hello, i am confirming my number”. <span><FiCopy /></span></h4>
        <h4 className="text-green-800 font-bold flex gap-2.5 items-center cursor-pointer">“08038403808”  <span><FiCopy /></span></h4>
      </div>
      <button className="flex font-bold justify-center align-center bg-green-700 py-1 px-1">
        I have sent the SMS
      </button>
    </main>
  </div>
  )
}

export default Sms
