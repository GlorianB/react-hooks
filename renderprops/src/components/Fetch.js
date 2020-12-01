import React, { useState, useEffect } from 'react';

function Fetch(props) {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(props.url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [props.url])

  return props.render(data);
}

export default Fetch;
