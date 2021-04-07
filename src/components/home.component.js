import React, {useState, useEffect} from 'react';
import Sortbar from "./sortbar";
import ComicDisplay from "./comicdisplay.js";
import AddButton from "./addbutton.js";
import axios from 'axios';
import styles from "./styles/mainpage.module.css";


const Home = (props) => {

  function saveNewComic(comic) {
    console.log('http://localhost:4000/api/comics/update/' + comic._id);
    console.log(comic);
    axios.put('http://localhost:4000/api/comics/update/' + comic._id, comic)
      .then(res => {
        window.location.reload();
        console.log(res.json);
      });
  }

  function addNewComic(comic) {
    axios.post('http://localhost:4000/api/comics/create', comic)
      .then(res => {
        console.log(res.json);
      });
  }

  return (
    <div className={styles.darkbg}>
      <Sortbar onKeyChange={props.onKeyChange}/>
      <AddButton addNewComic={addNewComic}/>
      <ComicDisplay comicList={props.comics} saveNewComic={saveNewComic}/>
    </div>
  );
}

export default Home;
