

// const Movie = (props) => { 
    const Movie = ({img,title,year}) => { //object destructring
  return (
    <div className="movie">
        {/* <img src= {props.img}/>
        <p>Star Wars: {props.title}</p>
        <p>Year: {props.year}</p> */}
        <img src= {img}/>
        <p>Star Wars: {title}</p>
        <p>Year: {year}</p>

    </div>
  )
}

export default Movie