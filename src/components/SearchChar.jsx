
export const SearchChar = (onInputSearch) => {
  return (
    <input 
              type="text" 
              placeholder="search"
              value={ inputValue }
              onChange={ onInputSearch }              
              style={{maxWidth:'200px'}}
    />
  )
}
