export const CharItem = ({index,item}) => {
  return (
    <div key={index}>
        <div className="card-char">
            <img className="char-card-img-top" src={item.image} alt="character" />
            <div className="char-card-body">
                <h5 className="fw-bold fs-3">{item.name}</h5>
                <p className="char-card-text"><b>Species:</b> {item.species}</p>
                <p className="char-card-text"><b>Location:</b> {item.location.name}</p>
            </div>
        </div>
    </div>
  )
}
