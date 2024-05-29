"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const data = [
  
  {
    id :1,
    country : 'Nigeria',
    image : '/nigeria.png',
    call_code : "0909009000"
    
  },
  {
    id :2,
    country : 'Niger',
    image : '/niger.jpg',
    call_code : "+213 661 23 45 67"
    
  },
  {
    id :3,
    country : 'South africa',
    image : '/south_africa.png',
    call_code : "+27 82 123 4567"
    
  },
  {
    id :4,
    country : 'Algeria',
    image : '/algeria.png',
    call_code : "+227 90 56 78 90"
    
  }
]

const Verification = () => {
  const [selectedImage, setSelectedImage] = useState(data[0].image);
  const [selectedNum, setSelectedNum] = useState(data[0].call_code);

  const handleSelect = (eventKey) => {
    const selectedCountry = data.find(item => item.image === eventKey);
    if (selectedCountry) {
      setSelectedImage(selectedCountry.image);
      setSelectedNum(selectedCountry.call_code);
    }
  };


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
              src={selectedImage} // Path to your image
              alt="Dropdown"
              width={25} // Set appropriate width
              height={20} // Set appropriate height
            />
          }
          id="input-group-dropdown-1"
          onSelect={handleSelect}
        >
        {
          data.map((items)=>(
            <Dropdown.Item eventKey={items.image}>
             <Image
            src={items.image} // Path to your image
            alt="Dropdown"
            width={25} // Set appropriate width
            height={20} // Set appropriate height
          />{items.country}</Dropdown.Item>
          ))
        }
          
          {/* Add more dropdown items as needed */}
        </DropdownButton>
          <Form.Control aria-label="Text input with dropdown button"placeholder={selectedNum} />
        </InputGroup>  
      </div>
      <button className="flex font-bold justify-center align-center bg-green-700 py-1 px-1">
          <Link href={'/verified'}>Verify Phone Number</Link>
      </button>
    </main>
  </div>
  )
}

export default Verification
