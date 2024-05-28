"use client"
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const data = [
  
  {
    id :1,
    country : 'south africa',
    image : '/south_africa.png',
    
  },
  {
    id :2,
    country : 'niger',
    image : '/niger.jpg',
    
  }
]
const Verification = () => {
  return (
    <div className="w-full text-green-600 my-0 mx-auto lg:w-3/6 text-white flex justify-start flex-col">
    <header className="bg-green-700 font-bold w-full h-14 flex flex-col justify-center items-start  p-4">
      <p className="w-full font-bold mt[-300px]">Verify Phone Number</p>
    </header>
    <main className="h-80 w-full flex justify-around flex-col items-start p-4">  
      <h4 className="text-green-800">Enter your phone number below to begin verification process.</h4>
      <div className="flex justify-center flex-col">
        <h4 className="text-green-800 font-bold">Enter Phone Number</h4>
        <InputGroup className="mb-3 flex">
        
          <DropdownButton
            className="w-8 flex"
            variant="outline-secondary"
            title={
              <Image            
                src="/nigeria.png" // Path to your image
                alt="Dropdown"
                width={25} // Set appropriate width
                height={20} // Set appropriate height
              />
            }
            
            id="input-group-dropdown-1"
          >
          {data.map((item) => (
            <Dropdown.Item key={item.id} href="#">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.country}
                  width={25}
                  height={20}
                />
                <span className="ml-2">{item.country}</span>
              </div>
            </Dropdown.Item>
          ))}
          </DropdownButton>
          <Form.Control aria-label="Text input with dropdown button"placeholder="0909009000" />
        </InputGroup>  
      </div>
      <button className="flex font-bold justify-center align-center bg-green-700 py-1 px-1">
          Verify Phone Number
      </button>
    </main>
  </div>
  )
}

export default Verification
