import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function FormComponent(props) {
    const [nameInv, setNameInv] = useState('');
    const [numberInv, setNumberInv] = useState('');
    const [buildingInv,setBuildingInv] = useState('')
    const [roomInv,setRoomInv] = useState('')
    const [responsibleInv,setResponsibleInv] = useState('')
    const [SNInv,setSNInv] = useState('')
    const [companyInv,setCompanyInv] = useState('')
    const [companyMailInv,setCompanyMailInv] = useState('')
    const [companyPhoneInv,setCompanyPhoneInv] = useState('')
    const [photoInv,setPhotoInv] = useState('')

    const [fileInv,setFileInv] = useState('')
    


    const inputNameInv = (event) =>{
    setNameInv(event.target.value)}

    const inputNumberInv = (event) =>{
    setNumberInv(event.target.value)}
    
    const inputBuildingInv = (event) =>{
    setBuildingInv(event.target.value)}

    const inputRoomInv = (event) =>{
    setRoomInv(event.target.value)}

    const inputResponsibleInv = (event) =>{
    setResponsibleInv(event.target.value)}

    const inputSNInv = (event) =>{
    setSNInv(event.target.value)}

    const inputCompanyInv = (event) =>{
    setCompanyInv(event.target.value)}

    const inputCompanyMailInv = (event) =>{
    setCompanyMailInv(event.target.value)}

    const inputCompanyPhoneInv = (event) =>{
    setCompanyPhoneInv(event.target.value)}

    const inputPhotoInv = (event) =>{
    // setPhotoInv(event.target.getValueFromEvent)
    // console.log(event.target.getValueFromEvent)
}

    const inputFileInv = (event) =>{
    // setFileInv(event.target.getValueFromEvent)
}



    


const saveItem = (event) => {
    event.preventDefault();

    const itemData = {
      id: uuidv4(),
      nameInv: nameInv,
      numberInv: numberInv,
      buildingInv: buildingInv,
      roomInv: roomInv,
      responsibleInv: responsibleInv,
      SNInv: SNInv,
      companyInv: companyInv,
      companyMailInv: companyMailInv,
      companyPhoneInv: companyPhoneInv,
      photoInv: photoInv,
      fileInv: fileInv,
    };

    // เลื่อน fetch ไปในบรรทัดนี้
    fetch('http://localhost:8000/inventory', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(itemData),
})
  .then((response) => response.json())
  .then(() => {
    props.onAddItem(itemData);
  })
  .catch((error) => {
    console.error('Error saving item:', error);
  });
  };


return (
    <div>
      <div className="mb-8">
        <h4 className="text-2xl text-black">เพิ่มข้อมูลครุภัณฑ์</h4>
      </div>
      <div>
        <Form onSubmitCapture={saveItem}>
                <Form.Item label="กรุณาใส่ชื่อครุภัณฑ์" name="ชื่อครุภัณฑ์"  rules={[
        {
          required: true,
        },
      ]}>
                    <Input placeholder="ชื่อครุภัณฑ์"className="w-2/4 h-8 text-black border border-gray-300 block text-base p-2" type="text" onChange={inputNameInv}  value={nameInv} />
                </Form.Item>
                
                 <Form.Item label="กรุณาใส่หมายเลขครุภัณฑ์">
                    <Input placeholder="หมายเลขครุภัณฑ์" className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputNumberInv} value={numberInv}/>
                </Form.Item>

                <div className='flex w/1/2' >
                        <Form.Item label="กรุณาใส่ที่อยู่  อาคาร">
                            <Input placeholder="ชื่ออาคาร" className="w-1/2 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputBuildingInv} value={buildingInv}  />
                        </Form.Item>

                        <Form.Item label="ห้อง">
                            <Input placeholder="เลขห้อง"className="w-1/2 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputRoomInv} value={roomInv} />
                        </Form.Item>

                </div>
                        <Form.Item label="ผู้รับผิดชอบ">
                            <Input placeholder="ชื่อผู้รับผิดชอบ"className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text"  onChange={inputResponsibleInv} value={responsibleInv}/>
                        </Form.Item>


                        <Form.Item label="หมายเลข Serial Number">
                            <Input placeholder="หมายเลขSN"className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputSNInv} value={SNInv} />
                        </Form.Item>

                        <Form.Item label="ขื่อบริษัท">
                            <Input placeholder="ขื่อบริษัท" className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputCompanyInv} value={companyInv} />
                        </Form.Item>

                        <Form.Item label="อีเมลสำหรับติดต่อบริษัท">
                            <Input placeholder="example@gmail.com" className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputCompanyMailInv} value={companyMailInv} />
                        </Form.Item>

                        <Form.Item label="เบอร์โทรศัพท์สำหรับติดต่อบริษัท">
                            <Input placeholder="08xxxxxxx"className="w-1/4 h-8 text-black border border-gray-300  block text-base p-2" type="text" onChange={inputCompanyPhoneInv} value={companyPhoneInv} />
                        </Form.Item>


                    <Form.Item   label="อัปโหลดรูปภาพครุภัณฑ์:" valuePropName="fileList" getValueFromEvent={normFile} onChange={inputPhotoInv} >
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                            <PlusOutlined />
                            <div
                                style={{
                                marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item   label="อัพโหลดเอกสารสำคัญ " valuePropName="fileList" getValueFromEvent={normFile} onChange={inputFileInv}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                            <PlusOutlined />
                            <div
                                style={{
                                marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item label="">
                <Button className="bg-black" type="primary" htmlType="submit">
              บันทึกข้อมูล
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormComponent;