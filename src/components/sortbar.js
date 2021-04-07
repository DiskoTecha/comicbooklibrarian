import React, { useState } from "react";
import SortItem from "./sortitem";
import styles from "./styles/mainpage.module.css";


function Sortbar(props) {
  const [sortKeys, setSortKeys] = useState([
    "Publisher",
    "Title",
    "Year",
    "Price",
    "Box"
  ]);

  const [activeSortKey, setActiveSortKey] = useState("Publisher");


  // Saving this functionality until I need it
  function deleteKey(id) {
    setSortKeys(prevValue => prevValue.filter((value, index) => index !== id));
  }

  function addKey(key) {
    setSortKeys(prevValue => [...prevValue, key]);
  }

  function onKeyChange(newKey) {
    props.onKeyChange(newKey);
    setActiveSortKey(newKey);
    console.log(newKey);
  }

  return (
    // Use bootstrap's grid or layout system to align the buttons right,
    // and to make them hamburger when on a small/medium screen
    <div className={styles.sortbar + " float-md-right"}>
      {sortKeys.map((sortKey, index) => (
        <SortItem key={index} id={index} sortKey={sortKey} active={sortKey === activeSortKey} onKeyChange={onKeyChange}/>
      ))}
    </div>
  );
}

export default Sortbar;
