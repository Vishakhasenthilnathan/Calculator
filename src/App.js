import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState();
    const buttonStyle = {
        padding: "15px",
        margin: "4px"
    }

    const handleCalculation = () => {
        const currentInput = input;
        const numbers = currentInput.split(/[\+\-\*\/]/);
        const operators = currentInput.split(/\d/).filter((item) => item !== "");
        for (let i = 0; i < operators.length; i++) {
            console.log(numbers, operators);
            console.log("i",i);
            if (operators[i] === "*") {
                numbers[i] = parseInt(numbers[i]) * parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
                console.log("i*",i);

            } else if (operators[i] === "/") {
                numbers[i] = parseInt(numbers[i]) / parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
                console.log("i/",i);

            } else if (operators[i] === "+") {
                numbers[i] = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
                console.log("i+",i);

            } else if (operators[i] === "-") {
                numbers[i] = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
                console.log("i-",i);
            }
        }
        if (operators.length !== 0) {
            setResult("Error")
        } else {
            setResult(numbers[0]);
        }
    }
    return (
        <div className="App">
            <h1>React Calculator</h1>
            <input type="text" style={{margin: "10px"}} name="input" value={input}></input>
            <div>{result}</div>
            <div style={{display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center", gap: "1"}}>
                <div style={{width: "200px", height: "200px"}}>
                    <input type="button" value={7} style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("7"))
                    }}>
                    </input>
                    <input type="button" value={8} style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("8"))
                    }}>
                    </input>
                    <input type="button" value={9} style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("9"))
                    }}>
                    </input>
                    <input type="button" value="+" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("+"))
                    }}>
                    </input>
                    <input type="button" value="4" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("4"))
                    }}>
                    </input>
                    <input type="button" value="5" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("5"))
                    }}>
                    </input>
                    <input type="button" value="6" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("6"))
                    }}>
                    </input>
                    <input type="button" value="-" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("-"))
                    }}>
                    </input>
                    <input type="button" value="1" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("1"))
                    }}>
                    </input>
                    <input type="button" value="2" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("2"))
                    }}>
                    </input>
                    <input type="button" value="3" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("3"))
                    }}>
                    </input>
                    <input type="button" value="*" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("*"))
                    }}>
                    </input>
                    <input type="button" value="C" style={buttonStyle} onClick={(e) => {
                        setInput("")
                    }}>
                    </input>
                    <input type="button" value="0" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("0"))
                    }}>
                    </input>
                    <input type="button" value="=" style={buttonStyle} onClick={handleCalculation}></input>
                    <input type="button" value="/" style={buttonStyle} onClick={(e) => {
                        setInput((prevState) => prevState.concat("/"))
                    }}>
                    </input>
                </div>
            </div>
        </div>
    );
}

export default App;
