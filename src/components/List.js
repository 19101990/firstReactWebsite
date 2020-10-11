import React from "react";
import { Link } from "react-router-dom";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props) {
  const items = props.items;
  const listItems = items.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}

//   const items = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,

export default List;
