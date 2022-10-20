import React from "react";
import Form from "./Form";
import List from "./List";
import { contactSelectors } from "../../redux/contactSlice";
import { useSelector } from "react-redux";

function Contacts() {
  const total = useSelector(contactSelectors.selectTotal);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Contacts ({total})</h1>

        <List />
        <Form />
      </div>
    </div>
  );
}

export default Contacts;
