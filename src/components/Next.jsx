export const Next = ( {handleNextFunc} ) => {
  return (
    <li className="page-item">
        <button className="btn btn-primary" onClick={ handleNextFunc }>
            Next
        </button>
    </li>
  )
}
