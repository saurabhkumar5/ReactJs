//arrow function bhi define kar sakte h

// const header = ()=> <h1>saurabh</h1>

// const Header = ()=>{
//     return (
//         <h1>Saurabh</h1>
//     )
// }

// function Footer(){  //agar function k name ko small me likhte h to export karte samay to small me hi likhenge but import karte samay capital me likhenge
//     return (
//         <h1>sumit</h1>
//     )
// }

// // export default Header;
// // export default Footer;
// //export {Header,Footer} //agar multiple function ko export karna h tab

// //default and object dono send kar sakte h ek saath

// export default Header;
// export {Footer};


//use react fragement => ham fragement k jagah div ka hi use karenge

// function Header(){
//     return (
//         <>
//         <h1>this is header</h1>
//         <p>this is reactjs </p>
//         </>
//     )
// }

import Footer from "./Footer";

function Header(){
    return (
        <div>
        <h1>this is header</h1>
        <p>this is reactjs </p>
        <Footer/>
        </div>
    )
}

export default Header;