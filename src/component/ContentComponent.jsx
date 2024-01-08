import React, { useEffect, useState } from 'react';
import FormComponent from './FormComponent';
import CardComponent from './CardComponent';

function ContentComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/inventory')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching inventory items:', error);
      });
  }, []);

  const onAddnewItems = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  const onDeleteItem = (itemIdToDelete) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemIdToDelete));
  };

  return (
    <div className="w-full m-5">
      <FormComponent onAddItem={onAddnewItems} />
      <CardComponent items={items} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default ContentComponent;