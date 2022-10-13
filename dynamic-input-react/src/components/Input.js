import React, { useState } from 'react'

const initialState = [
    {
        hobbies: ""
    }
];

const Input = () => {
    const [hobbies, setHobbies] = useState(initialState);

    const handleAdd = () => {
        setHobbies([...hobbies, {services: ""}])
    }

    const handleRemove = (index) => {
        const list = [...hobbies];
        list.splice(index, 1);
        setHobbies(list);
    }

    const handleChange = (e, index) => {
        const {name,value} = e.target;

        const list = [...hobbies];
        list[index][name] = value;
        setHobbies(list);
    }

    return (
        <form>
            <div>
                <div>
                    <label htnlFor="hobbies">Hobbies</label>
                    {hobbies.map((hobby, index) => (
                        <>
                            <div key={index}>
                                <input type="text" name="hobbies" value={hobby.hobbies} onChange={(e) => handleChange(e, index)} required />
                                {hobbies.length > 1 &&
                                    <button type="button" onClick={()=> handleRemove(index)}>
                                        <span>Remove</span>
                                    </button>
                                }
                            </div>
                            {hobbies.length - 1 === index &&
                                <div className='add-btn'>
                                    <button type="button" onClick={handleAdd}>
                                        <span>Add a hobby</span>
                                    </button>
                                </div>}
                        </>
                    ))}
                </div>
                <div>
                    <h2>Output</h2>
                    {
                        hobbies.map((item, index) => (
                            <ul key={index}>
                                {item.hobbies && <li>{item.hobbies}</li>}
                            </ul>
                        ))
                    }
                </div>
            </div>
        </form>
    )
}

export default Input