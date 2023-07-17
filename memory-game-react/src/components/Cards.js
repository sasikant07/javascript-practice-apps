import React, {useState} from 'react';
import data from "../data"
import Card from './Card';

const Cards = () => {
    const [items, setItems] = useState(data);
    const [prev, setPrev] = useState(-1);

    const check = (current) => {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    const handleClick = (id) => {
       if (prev === -1) {
        items[id].stat = "active";
        setItems([...items]);
        setPrev(id)
       } else {
            check(id);
       }
    }

  return (
    <div className="container">
        {items.map((item, index) => (
            <Card key={index} item={item}  id={index} handleClick={handleClick} />
        ))}
    </div>
  )
}

export default Cards;