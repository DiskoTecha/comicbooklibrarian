import React, {useState, useEffect} from "react";
import ComicThumbnail from "./comicthumbnail";
// import styles from "./styles/mainpage.module.css";


const ComicDisplay = (props) => {
  const [comics, setComics] = useState(props.comicList);
  // // for testing
  // const d = new Date();
  // const n = d.getTime();

  useEffect(() => {
    setComics(props.comicList);
    console.log("here");
  }, [props.comicList]);


  // function addComics(comicArray) {
  //   setComics(prevValue => [...prevValue, ...comicArray]);
  // }
  //
  // function removeComic(id) {
  //   setComics(prevValue => prevValue.filter((value, index) => index !== id));
  // }
  //
  // function resetComics(comicArray) {
  //   setComics(comicArray);
  // }
  //
  // function clearComics() {
  //   setComics([]);
  // }


  return (
    <div className="container">
      <div className="row">
          {comics.map((comic, index) => (
            <div className="col-lg-3 col-sm-4 col-6" key={comic._id}>
              <ComicThumbnail id={index} data={comic} comicIndex={index} saveNewComic={props.saveNewComic}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ComicDisplay;
