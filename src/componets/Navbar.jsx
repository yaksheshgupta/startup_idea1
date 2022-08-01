import React from "react";
export default function nav(){
    const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]
    return(
        <div >
            <ul className="navname ">
                <li style={{marginLeft:100}}>
                    Sup1
                </li>
            <div className="dropdown" style={{marginLeft:200}}>
            <button className="dropbtn">Medical Consult</button>
            <div className="dropdown-content" style={{minWidth: 190}}>
                    <a href="#">Mental Health</a>
                    <a href="#">Sexual Health</a>
                    <a href="#">Physical Health</a>
            </div>
            </div>
            <div className="dropdown" style={{marginLeft:60}}>
            <button className="dropbtn">Legal Consult</button>
            <div className="dropdown-content"style={{minWidth: 190}}>
                <a href="#">Criminal LawSuit</a>
                <a href="#">Civil LawSuit</a>
                <a href="#">Cyber LawSuit</a>
            </div>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <button className="dropbtn">basic conselt</button>
            <div className="dropdown-content">
                <a href="#">Will Decide</a>
                <a href="#">Will Decide</a>
                <a href="#">Will Decide</a>
            </div>
            </div>
            <div className="dropdown" style={{marginLeft:70}}>
            <button className="dropbtn">Que/Ans</button>
            </div>
                   
            <div className="dropdown" style={{marginLeft:40}}>
            <button className="dropbtn">Account</button>
            <div className="dropdown-content">
                <a href="#">LogIn</a>
                <a href="#">SignUp</a>
            </div>
            </div>
            </ul>
        </div>
    )
}