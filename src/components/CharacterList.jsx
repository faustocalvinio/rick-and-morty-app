import { CharItem } from "./CharItem";

export const CharacterList = ({ characters }) => {
  return (
    <div className="cont-chars">
      
        {characters.map((item, index) => (
          <CharItem item={ item } index={ index }/>
        ))}
      
    </div>
  );
};

