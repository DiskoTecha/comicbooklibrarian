import React from "react";
import styles from "./styles/mainpage.module.css";

function SortItem(props) {
  function handleClick() {
    if (props.active) {
      return;
    }
    props.onKeyChange(props.sortKey);
  }

  return <button className={styles.btnSort + " btn btn-sm btn-outline-light " + (props.active && "active")} onClick={handleClick}>{props.sortKey}</button>;
}

export default SortItem;
