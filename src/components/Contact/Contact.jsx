import React from "react";
import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={onDelete} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
}
