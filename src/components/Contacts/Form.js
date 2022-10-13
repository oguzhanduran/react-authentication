import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const names = name.split(",");
    const data = names.map((name) => ({ id: nanoid(), name }));

    dispatch(addContacts(data));

    if (!name) return false;

    setName("");
  };
  //   Biz direk entities altından şu id'li elemanı bize ver diyebileceğiz.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
