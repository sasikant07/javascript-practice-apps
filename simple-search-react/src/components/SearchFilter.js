import React, {useState, useEffect} from 'react'

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    const [searchApiData, setSearchApiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const userData = await response.json();
                setData(userData);
                setSearchApiData(userData);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();

    }, []);

    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData(searchApiData);
        } else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()));
            if (filterResult.length > 0) {
                setData(filterResult);
            } else {
                setData([{"name":"No Data Found", "username":"No Data Found"}])
            }
        }
        setFilterValue(e.target.value);
    }

  return (
    <div className="container">
        <div className="p-input-icon-right">
            <input type="search" placeholder="Search..." value={filterValue} onInput={(e) => handleFilter(e)} />
        </div>
        <table>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            {
                data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default SearchFilter;