import { GiConfirmed } from "react-icons/gi"; 

const Verified = () => {
    return (
      <div className="w-full text-green-600 my-0 mx-auto lg:w-3/6 text-white flex justify-center flex-col">
      <header className="bg-green-700 font-bold w-full h-14 flex flex-col justify-center items-start  p-4">
        <p className="font-bold mt[-300px]">Success</p>
      </header>
      <main className="h-80 w-full flex justify-around flex-col items-center p-4">  
        <h4 className="text-5xl text-green-700"><GiConfirmed /></h4>
        <h4 className="text-green-800 font-bold text-center">Phone Number has been successfully confirmed!</h4>
        <button className="flex font-bold justify-center align-center bg-green-700 py-1 px-1">
            Continue
        </button>
      </main>
    </div>
    )
  }
      
export default Verified
