import './App.css';
import {useState} from 'react';
// import MyButton from './MyButton.js';
// import MyCounterButton from "./MyCounterButton";

function Form() {
    let [todos, setTodos] = useState([]);
    let [surligne, setSurligne] = useState([]);
    const [text, setText] = useState('');

    function HandleClick() {
        if (text !== ""){
            setTodos([...todos, text]);
            setText('');
            document.getElementById("search-bar").value = ""
        }
    }

    function HandleSur(id) {
        if (surligne.indexOf(document.getElementById(id)) === -1){
            setSurligne(surligne = [...surligne, document.getElementById(id)])
        } else {
            setSurligne(surligne = surligne.filter(ligne => ligne !== document.getElementById(id)))
            document.getElementById(id).style.background = "#404040";
            document.getElementById(id).style.border = "1px solid black";
        }
        for (let i = 0; i < surligne.length; i++) {
            document.getElementById(id).style.background = "#5a5a5a";
            document.getElementById(id).style.border = "1px dashed white";
        }
    }

    function HandleSup(items) {
        const NewTodos = todos.filter((item, i) => i !== todos.indexOf(items))
        setTodos(todos = NewTodos)
    }

    return (
        <div>
            <input id="search-bar" type="text" placeholder="Tapez votre texte" onChange={e => setText(e.target.value)}/>
            <button id="Reset" onClick={HandleClick}>Ajouter</button>
            <ul style={{listStyle:"none"}}>
                {todos.map((item, id) => (
                    <li key={id}>
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                            flexWrap:"nowrap",
                            alignItems:"center"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                justifyContent: "space-around",
                                width: "40%"
                            }}>
                                <div id={id} style={{
                                    width: "70%",
                                    textAlign: "start",
                                    border: "1px solid black",
                                    paddingLeft: "10px",
                                    paddingBottom: "6px",
                                    paddingTop: "3px",
                                    background: "#404040",
                                    borderRadius: "10px"
                                }}>
                                    {item}
                                </div>
                                <div style={{
                                    paddingRight: "1px",
                                    paddingTop: "4px"
                                }}>
                                    <button className="button" onClick={e => HandleSur(id)}>Surligner</button>
                                </div>
                                <div style={{
                                    paddingRight: "1px",
                                    paddingTop: "4px"
                                }}>
                                    <button className="button" onClick={e => HandleSup(item)}>Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1 style={{textAlign: "center"}}>Welcome to my app</h1>
        </header>
    );
}

function Main() {
    return (
        <main style={{textAlign: "center"}}>
            <Form/>
        </main>
    );
}

function App() {
    return (
        <>
            <Header/>
            <Main/>
        </>
    );
}


export default App;
