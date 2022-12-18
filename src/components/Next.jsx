export const Next = ( {handleNextFunc} ) => {
  return (
    <li className="page-item">
        <button className="button-pagination" onClick={ handleNextFunc }>
            Next
        </button>
    </li>
  )
}
