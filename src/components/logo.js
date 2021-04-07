import React from "react";
import styles from "./styles/mainpage.module.css";


function Logo(props) {
  if (props.image) {
    return <img src={props.image} alt="Comic Librarian" />;
  }

  return <h2 className={styles.logo}>Comic Librarian</h2>;
}

export default Logo;
