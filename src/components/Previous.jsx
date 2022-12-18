
export const Previous = ( {handlePreviousFunc} ) => { 
  return (
    <li className="page-item">
        <button className="button-pagination" onClick={ handlePreviousFunc }>
            Previous
        </button>
    </li>
 )
}
