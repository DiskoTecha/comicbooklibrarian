import React from "react";
import Logo from "./logo";

import styles from "./styles/mainpage.module.css";


function Navigation(props) {

  function changeInput(e) {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) props.setSearchInput(inputValue);
  }

  const submitSearch = (e) => {
    props.submitSearch();
    e.preventDefault();
  }

  return (
    <nav className={" navbar navbar-dark " + styles.navbar}>
      <a className="navbar-brand"><Logo /></a>
      <form className="form-inline" onSubmit={submitSearch}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={props.searchInput} onChange={changeInput} />
        <button className="btn btn-light my-2 my-sm-0"  onClick={submitSearch}>Search</button>
        <button className="btn btn-outline-light my-2 mx-1 my-sm-0" onClick={props.resetSearch}>Reset</button>
      </form>
    </nav>
  );
}

export default Navigation;
