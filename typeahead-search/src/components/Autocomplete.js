import React, { useEffect, useRef, useState } from 'react';
import cityName from '../data';

const AutoComplete = () => {
    const [filteredData, setFilteredData] = useState(cityName);
    const [data] = useState(cityName);
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
    const autocompleteRef = useRef(null);

    const handleClick = (value) => {
        setValue(value);
        setShow(false);
    }

    const debounce  = (callback) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);

            let context = this;
            timer = setTimeout(() => {
                timer = null;
                callback.apply(context, args);
            }, 1000);
        }
    }

    const search = (value) => {
        const filteredData = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filteredData);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        const optimised = debounce(search);
        optimised(e.target.value);
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShow(false);
            }
        }
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [])

  return (
    <>
        <div className="autocomplete" ref={autocompleteRef}>
            <input 
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={() => setShow(true)}
                placeholder="Type to serach..." />

                {show  && (
                    <ul>
                        {
                            filteredData.map((row, index) => {
                                return <li key={index} onClick={() => handleClick(row)}>{row}</li>
                            })
                        }
                    </ul>
                )}
        </div>
    </>
  )
}

export default AutoComplete;