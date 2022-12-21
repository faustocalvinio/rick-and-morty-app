import React, { useEffect, useState } from "react";
import axios from "axios";
import { Next,Previous,CharacterList } from "../components";
import './MainGifsApp.css';


export function MainGifsApp() {
  const [info, setInfo] = useState({});

  const [currentPage, setCurrentPage] = useState(1);

  const url = "https://rickandmortyapi.com/api/character";
  
  const [charactersListArr, setCharactersListArr] = useState([]);

  

  const fetchCharacters = (url) => {
      axios
        .get(url)
        .then((data) => {
          setCharactersListArr(data.data.results);
          setInfo(data.data.info);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
    setCurrentPage(currentPage+1)
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
    setCurrentPage(currentPage-1)
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>

      <div className="pagination-cont-main">
        <nav>
          <ul className="ul-pagination">
            { info.prev && <Previous handlePreviousFunc={ handlePreviousPage } /> }
            <h3 className="px-4">Page: { currentPage }</h3>
            { info.next && <Next handleNextFunc={ handleNextPage } /> }
          </ul>
        </nav>
      </div>

      <CharacterList characters={ charactersListArr } />

      <div className="pagination-cont-main">
        <nav>
          <ul className="ul-pagination">
            { info.prev && <Previous handlePreviousFunc={ handlePreviousPage } /> }
            { info.next && <Next handleNextFunc={ handleNextPage } /> }     
            
          </ul>
        </nav>
      </div>
    </>
  );
}
