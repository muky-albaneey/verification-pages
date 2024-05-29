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
    
  },
  {
    id :2,
    country : 'Niger',
    image : '/niger.jpg',
    
  },
  {
    id :3,
    country : 'South africa',
    image : '/south_africa.png',
    
  },
  {
    id :4,
    country : 'Algeria',
    image : '/algeria.png',
    
  }
]

const Verification = () => {
  const [selectedImage, setSelectedImage] = useState('/nigeria.png');

  const handleSelect = (eventKey) => {
    setSelectedImage(eventKey); // Update the image based on the selected item
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
          <Form.Control aria-label="Text input with dropdown button"placeholder="0909009000" />
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
