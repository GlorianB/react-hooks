const { render } = require("@testing-library/react");
const { useState, useEffect } = require("react");

function Fetch({ url, rend }) {
    const [data, setData] = useState({});

    const fetchData = async () => {
        const response = await fetch(url);
        const parseResponse = await response.json();
        setData(parseResponse);
        console.log(parseResponse);
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return rend(data)
}

export default Fetch;