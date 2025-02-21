import React from "react";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <div>
      <h1>Contacts Book</h1>
      <SearchBox />
      <ContactsForm />
      <ContactList />
    </div>
  );
}
