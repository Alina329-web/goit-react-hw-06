import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleChange}
        className={styles.search}
      />
    </div>
  );
}
