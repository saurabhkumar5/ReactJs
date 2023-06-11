
function Comp(props){
  return (
    <div>
      {/* <a href="https://reactjs.org/">React is a community.</a> */}
      <a href="https://reactjs.org/">{props.title}</a> 
      {/* <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Wikipedia</p> */}
      <p>{props.content}</p>
    </div>
  )
}
export default Comp;