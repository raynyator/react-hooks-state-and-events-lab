import React ,{useState}from "react";

function Item({ name, category }) {
  const [isIncart,setIsincart]=useState(name);
  const Handletogglecart=()=>{
    setIsincart(prevIsincart =>!prevIsincart)
  }
  return (
    <li className={isIncart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"onClick={Handletogglecart}>{isIncart ? "Remove From Cart" : "Add to Cart"}Add to Cart</button>
    </li>
  );
}

export default Item;
