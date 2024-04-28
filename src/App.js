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
    return (<div>
        <h1>React Calculator</h1>
        <input type="text" style={{margin: "10px"}} name="input" value={input}></input>
        <div>{result}</div>
        <div style={{display: "flex", flexWrap: "wrap", padding: "10px", width: "200px", height: "200px"}}>
            {/*<div style={{width: "200px", height: "200px"}}>*/}
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("7"))
                }}>7
                    {/*<input type="button" value="7" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("8"))
                }}>8
                    {/*<input type="button" value="8" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("9"))
                }}>9
                    {/*<input type="button" value="9" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("+"))
                }}>+
                    {/*<input type="button" value="+" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("4"))
                }}>4
                    {/*<input type="button" value="4" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("5"))
                }}>5
                    {/*<input type="button" value="5" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("6"))
                }}>6
                    {/*<input type="button" value="6" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("-"))
                }}>-
                    {/*<input type="button" value="-" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("1"))
                }}>1
                    {/*<input type="button" value="1" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("2"))
                }}>2
                    {/*<input type="button" value="2" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("3"))
                }}>3
                    {/*<input type="button" value="3" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("*"))
                }}>*
                    {/*<input type="button" value="*" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput("")
                }}>C
                    {/*<input type="button" value="C" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("0"))
                }}>0
                    {/*<input type="button" value="0" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={handleCalculation}>=
                    {/*<input type="button" value="=" style={{border: "0px solid"}}/>*/}
                </button>
                <button style={buttonStyle} onClick={(e) => {
                    setInput((prevState) => prevState.concat("/"))
                }}>/
                    {/*<input type="button" value="/" style={{border: "0px solid"}}/>*/}
                </button>
            {/*</div>*/}
        </div>
    </div>);
}

export default App;
