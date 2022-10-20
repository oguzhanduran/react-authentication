import React from "react";
import { contactSelectors, deleteAllContacts } from "../../redux/contactSlice";
import { useSelector } from "react-redux";
import Item from "./Items.js";
import { useDispatch } from "react-redux";

function List() {
  const contacts = useSelector(contactSelectors.selectAll); //selectTotal kaç tane kayıt varsa entity içinde onun sayısını bize döndürüyor.
  const total = useSelector(contactSelectors.selectTotal);

  const dispatch = useDispatch();

  const handleAllDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAllContacts());
    }
  };

  return (
    <div>
      {total > 1 ? (
        <div className="deleteAllBtn" onClick={handleAllDelete}>
          Delete All
        </div>
      ) : (
        ""
      )}
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} item={contact} />
        ))}
      </ul>
    </div>
  );
}

export default List;
