import React, { useEffect, useState } from "react";
import axios from "axios";
import { Next,Previous,CharacterList } from "../components";
import './MainGifsApp.css';


export function MainGifsApp() {
  const [info, setInfo] = useState({});
  const [inputValue, setInputValue] = useState()
  const [currentPage, setCurrentPage] = useState(1);

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  
  const [charactersListArr, setCharactersListArr] = useState([]);

  const onInputSearch=(e)=>{
    setInputValue(e.target.value);
    
  }
  const onClickSearch=()=>{
    if (inputValue===''){
      setUrl('https://rickandmortyapi.com/api/character')
    }else{
      
    }
    setUrl(`https://rickandmortyapi.com/api/character/?name=${inputValue} `)
  }
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
  const setEmptyInput=()=>{
    setInputValue('');
    setCurrentPage(1);
    setUrl('https://rickandmortyapi.com/api/character');
    fetchCharacters(url);
  }
  useEffect(() => {
    fetchCharacters(url);
  }, [url]);

  return (
    <>
      <h1 className="app-title">rick and morty app</h1> 
      <div className="d-flex  gap-3 my-3 justify-content-center">
        <input 
              type="text" 
              placeholder="Search a character"
              value={ inputValue }
              onChange={ onInputSearch }              
              className="form-control "
        />
        <button 
          className="btn btn-success"
          onClick={onClickSearch}
        >
          Search
        </button>
        <button
          className="btn btn-danger"
          onClick={setEmptyInput}
        >Reset</button>
      </div>
      
      <div className="pagination-cont-main">
       
        
        <nav>
          <ul className="ul-pagination">
            { info.prev && <Previous handlePreviousFunc={ handlePreviousPage } /> }
            <h3 className="px-4">Page { currentPage }</h3>
            { info.next && <Next handleNextFunc={ handleNextPage } /> }
          </ul>
        </nav>
      </div>

      <CharacterList characters={ charactersListArr } />

      <div className="pagination-cont-main">
        <nav>
          <ul className="ul-pagination">
            { info.prev && <Previous handlePreviousFunc={ handlePreviousPage } /> }
            <h3 className="px-4">Page { currentPage }</h3>

            { info.next && <Next handleNextFunc={ handleNextPage } /> }     
            
          </ul>
        </nav>
      </div>
    </>
  );
}
