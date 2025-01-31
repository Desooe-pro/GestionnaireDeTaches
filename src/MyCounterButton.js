import "./App.css"
import {useState} from 'react';

function MyCounterButton(props) {
    const [count, SetCount] = useState(0);

    function handleClick() {
        SetCount( count + 1);
    }

    return (
        <button onClick={handleClick} style={{borderRadius:"10px"}}>
            I'm a counter button with a count of : {count}
        </button>
    );
}

export default MyCounterButton;