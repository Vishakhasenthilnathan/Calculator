import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState();
    const buttonStyle = {
        padding: "15px", margin: "4px"
    }

    const handleCalculation = () => {
        if (input === "") {
            setResult("Error");
            return;
        }
        const currentInput = input;
        const numbers = currentInput.split(/[\+\-\*\/]/);
        const operators = currentInput.split(/\d/).filter((item) => item !== "");
        for (let i = 0; i < operators.length; i++) {

            if (operators[i] === "*") {
                numbers[i] = parseInt(numbers[i]) * parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;

            } else if (operators[i] === "/") {
                numbers[i] = parseInt(numbers[i]) / parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;

            } else if (operators[i] === "+") {
                numbers[i] = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
            } else if (operators[i] === "-") {
                numbers[i] = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
                numbers.splice(i + 1, 1);
                operators.splice(i, 1);
                i--;
            }
        }
        if (operators.length !== 0) {
            setResult("Error")
        } else {
            setResult(numbers[0]);
        }
    }
    return (<div className="App">
        <h1>React Calculator</h1>
        <input type="text" style={{margin: "10px"}} name="input" value={input}></input>
        <div>{result}</div>
        <div style={{display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center", gap: "1"}}>
            <div style={{width: "200px", height: "200px"}}>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("7"))
                }}>
                    <input type="button" style={{border: "0px"}} value="7"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("8"))
                }}>
                    <input type="button" style={{border: "0px"}} value="8"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("9"))
                }}>
                    <input type="button" style={{border: "0px"}} value="9"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("+"))
                }}>
                    <input type="button" style={{border: "0px"}} value="+"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("4"))
                }}>
                    input type="button" style={{border: "0px"}} value="4"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("5"))
                }}>
                    <input type="button" style={{border: "0px"}} value="5"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("6"))
                }}>
                    <input type="button" style={{border: "0px"}} value="6"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("-"))
                }}>
                    <input type="button" style={{border: "0px"}} value="-"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("1"))
                }}>
                    <input type="button" style={{border: "0px"}} value="1"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("2"))
                }}>
                    <input type="button" style={{border: "0px"}} value="2"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("3"))
                }}>
                    <input type="button" style={{border: "0px"}} value="3"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("*"))
                }}>
                    <input type="button" style={{border: "0px"}} value="*"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput("")
                }}>
                    <input type="button" style={{border: "0px"}} value="C"/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("0"))
                }}>
                    <input type="button" style={{border: "0px"}} value="0"/>
                </button>
                <button style={buttonStyle} onClick={handleCalculation}>
                    <input type="button" style={{border: "0px"}} value="="/>
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("/"))
                }}>
                    <input type="button" style={{border: "0px"}} value="/"/>
                </button>
            </div>
        </div>
    </div>);
}

export default App;
