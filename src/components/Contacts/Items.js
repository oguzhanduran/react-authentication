import React from "react";
import { deleteContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <div>
        <span className="editBtn">
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </span>
        <span className="deleteBtn" onClick={() => handleDelete(item.id)}>
          X
        </span>
      </div>
    </li>
  );
}

export default Item;
