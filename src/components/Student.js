
const Student = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name = {props.name}/>
    </>
  )
}

