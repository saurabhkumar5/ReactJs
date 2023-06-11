

const Movie = (props) => {
  return (
    <div className="movie">
        <img src= {props.img}/>
        <p>Star Wars: {props.title}</p>
        <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie