import React, { useState, useEffect } from 'react';
import { Card, Image, Button } from 'antd';
import image from '../assets/img/Image.png';

function ItemComponent({ onDelete, id }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/inventory`)
      .then((response) => response.json())
      .then((data) => {
        // Filter the array based on the id
        const selectedItem = data.find((item) => item.id === id);
        setItemData(selectedItem);
        
      })
      .catch((error) => {
        console.error('Error fetching item data:', error);
      });
  }, [id]);

  const handleDeleteClick = () => {
    fetch(`http://localhost:8000/inventory/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        onDelete(id);
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  if (!itemData) {
    // Render a loading indicator while data is being fetched
    return <div>Loading...</div>;
  }


  return (
    <div className="bg-white w-11/12 flex m-2.5 p-2.5 rounded-xl">
      <div className="w-1/3 rounded-2xl flex items-center">
        <Image width={400} src={image} placeholder={<Image preview={false} src={image} width={400} />} />
      </div>
      <div className="w-2/3 m-1">
        <h1 className="ml-10 mt-1 text-xl font-sans font-semibold" style={{ color: '#2B3674' }}>
          {itemData.nameInv}
        </h1>
              <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>หมายเลขครุภัณฑ์<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.numberInv}</span></p>
                <div className='flex'>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>ที่อยู่ครุภัณฑ์ อาคาร<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.buildingInv}</span></p>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>ห้อง<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.roomInv}</span></p>
                </div>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>ชื่อผู้รับผิดชอบ<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.responsibleInv}</span></p>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>หมายเลข SN<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.SNInv}</span></p>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>บริษัท<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.companyInv}</span></p>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>อีเมลสำหรับติดต่อบริษัท<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.companyMailInv}</span></p>
                <p className='ml-10 mt-1 text-base font-sans font-semibold' style ={{color:'#2B3674'}}>เบอร์โทรศัพท์สำหรับติดต่อบริษัท<span className='ml-1 text-sm font-sans font-normal' style ={{color:'#A3AED0'}}>{itemData.companyPhoneInv}</span></p>
                <Button className="inset-y-0 left-96" type="primary" danger onClick={handleDeleteClick}>
                  Delete
                </Button>
      </div>
    </div>
  );
}

export default ItemComponent;