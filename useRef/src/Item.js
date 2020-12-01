// import React, { useState, useEffect } from 'react';
//
// function Item(props) {
//   const getItems = props.getItems;
//
//   const [items, setItems] = useState([]);
//
//   useEffect(() => {
//     console.log('getItems called !');
//     console.log(items);
//     getItems().then((item) => setItems(item))
//   }, [getItems])
//
//   return (
//   <ul>
//     { items[0] ? items[0].body : null}
//   </ul>
//   );
// }
//
// export default Item;
