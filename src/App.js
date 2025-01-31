import './App.css';
import MyButton from './MyButton.js'
import MyCounterButton from "./MyCounterButton";

function Form() {
    return (
        <div>
            <form action="#" method="post" className="box">
                <input id="search-bar" type="text" placeholder="Tapez votre texte"/>
                <button>Ajouter</button>
            </form>
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
            <MyButton/>
            <MyCounterButton/>
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
