import React, {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';

// import CreateUser from "./components/create-user.component";
// import Users from "./components/users.component";
import Heading from "./components/heading";
import Navigation from "./components/navigation";
import Home from "./components/home.component";

function App() {

  const [sortKey, setSortKey] = useState("Publisher");
  const [comics, setComics] = useState([]);
  const [activeComics, setActiveComics] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    //****** ON BUILD: Swap the .get parameter for String(window.location.href).replace('/users', '') + '/api/users'
    axios.get('http://localhost:4000/api/comics')
      .then(res => {
        setComics(res.data);
        setActiveComics(res.data);
        //Pre-sort comics by publisher
        setActiveComics(prevValue => {
          const newArray = [...prevValue];
          newArray.sort((comicA, comicB) => {
            var x = comicA.publisher.toLowerCase();
            var y = comicB.publisher.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
          return newArray;
        });

        console.log(comics);

        comics.forEach(comic => {
          if (!(comic.coverPhoto === "")) {
            console.log(comic.title);
          }
        });

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  function onKeyChange(newKey) {
    setSortKey(newKey);
    switch (newKey)
    {
      case "Publisher":
        setActiveComics(prevValue => {
          const newArray = [...prevValue];
          newArray.sort((comicA, comicB) => {
            var x = comicA.publisher.toLowerCase();
            var y = comicB.publisher.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
          return newArray;
        });
        break;
      case "Title":
        setActiveComics(prevValue => {
          const newArray = [...prevValue];
          newArray.sort((comicA, comicB) => {
            var x = comicA.title.toLowerCase();
            var y = comicB.title.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
          return newArray;
        });
        break;
      case "Year":
        setActiveComics(prevValue => {
          const newArray = [...prevValue];
          newArray.sort((comicA, comicB) => {
            if (comicA.year < comicB.year) {return -1;}
            if (comicA.year > comicB.year) {return 1;}
            return 0;
          });
          return newArray;
        });
        break;
      case "Price":
        setActiveComics(prevValue => {
          const newArray = [...prevValue];
          newArray.sort((comicA, comicB) => {
            if (comicA.coverPrice < comicB.coverPrice) {return -1;}
            if (comicA.coverPrice > comicB.coverPrice) {return 1;}
            return 0;
          });
          return newArray;
        });
        break;

      default:
        onKeyChange("Publisher");
        break;
    }
  }


  function submitSearch() {
    console.log(searchInput);

    let words = searchInput
      .toLowerCase()
      .split(' ')
      .filter(function(token){
        return token.trim() !== '';
      });

      let searchRegex = new RegExp(words.join('|'), 'gim');
      console.log(searchRegex);
      let comicsCopy;

    switch(sortKey) {
      case "Publisher":
        comicsCopy = comics.filter((c) => {
          if (!c.publisher) {
            return false;
          }
          let toCheck = c.publisher.toString().toLowerCase().trim();
          return toCheck.match(searchRegex);
        });
        setActiveComics(comicsCopy);
        onKeyChange("Publisher");
        break;

      case "Title":
        comicsCopy = comics.filter((c) => {
          if (!c.title) {
            return false;
          }
          let toCheck = c.title.toString().toLowerCase().trim();
          return toCheck.match(searchRegex);
        });
        setActiveComics(comicsCopy);
        onKeyChange("Title");
        break;

      case "Year":
      comicsCopy = comics.filter((c) => {
        if (!c.year) {
          return false;
        }
        let toCheck = c.year.toString().toLowerCase().trim();
        return toCheck.match(searchRegex);
      });
      setActiveComics(comicsCopy);
      onKeyChange("Year");
      break;

      case "Price":
        comicsCopy = comics.filter((c) => {
          if (!c.coverPrice) {
            return false;
          }
          let toCheck = c.coverPrice.toString().toLowerCase().trim();
          return toCheck.match(searchRegex);
        });
        setActiveComics(comicsCopy);
        onKeyChange("Price");
        break;

      default:
        break;
    }

    setSearchInput("");
  }

  function resetSearch(e) {
    setActiveComics(comics);
    onKeyChange(sortKey);

    e.preventDefault();
  }

  function editActiveComics(newActiveComics) {
    setActiveComics(newActiveComics);
  }

  return(
    <Router>
      <Heading/>
      <Navigation searchInput={searchInput} setSearchInput={setSearchInput} submitSearch={submitSearch} resetSearch={resetSearch}/>
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} comics={activeComics} editActiveComics={editActiveComics} onKeyChange={onKeyChange}/>)}/>
        <Route exact path="/home" render={(props) => (<Home {...props} comics={activeComics} editActiveComics={editActiveComics} onKeyChange={onKeyChange}/>)}/>
      </Switch>
    </Router>
  );
}

export default App;
