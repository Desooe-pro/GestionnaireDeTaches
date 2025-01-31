import './App.css';
import {useState} from 'react';
// import MyButton from './MyButton.js';
// import MyCounterButton from "./MyCounterButton";

function Form() {
    let [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function HandleClick() {
        setTodos([...todos, text]);
        setText('');
        document.getElementById("search-bar").value = ""
    }

    function HandleSup(items) {
        const NewTodos = todos.filter(item => todos.indexOf(item) !== todos.indexOf(items))
        setTodos(todos = NewTodos)
    }

    return (
        <div>
            <input id="search-bar" type="text" placeholder="Tapez votre texte" onChange={e => setText(e.target.value)}/>
            <button id="Reset" onClick={HandleClick}>Ajouter</button>
            <ul style={{listStyle:"none"}}>
                {todos.map((item, id) => (
                    <li key={id}>
                        <div style={{display:"flex", flexDirection:"column", flexWrap:"nowrap", alignItems:"center"}}>
                            <div style={{display:"flex", flexDirection:"row", flexWrap:"nowrap", justifyContent:"space-around", width:"40%"}}>
                                <div style={{width:"85%", textAlign:"start", border:"1px solid black", paddingLeft:"10px", paddingBottom:"6px", paddingTop:"3px", background:"#404040", borderRadius:"10px"}}>
                                    {item}
                                </div>
                                <div style={{paddingRight:"1px", paddingTop:"4px"}}>
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
