import React , {useState} from 'react';
import CounterButton from './CounterButton';

function Counter(){
    //State to store our current count
    const [count, setCount] = useState(0);

    //event handle to increase the count
    const handleIncrement =()=> {
        setCount(prevCount => prevCount+1);
    }

    //event handle to decrease the count
    const handleDecrement = () => {
        setCount(prevCount => prevCount-1);
    }

    //event handler to reset count
    const handleReset = () => {
        setCount(0);
    };


    //method 1: Function that accepts different amounts
    const handleChangeBy = (amount) => {
        setCount(prevCount => prevCount+amount);
    };

    //Method 2 : Higher-order function approach
    const createChangeHandler =(amount) => {
        return()=> {
            setCount(prevCount=>prevCount+amount);
        };
    };
    


    return(
        <div style={{textAlign:'center', padding:'20px'}}>
            <hr/>
            <hr/>
            <h2>Counter with Custom Amounts</h2>
            <div style={{fontSize:'2rem', margin:'20px', color: count <0?'red':'black'}}>
                Count: {count}
            </div>
            <div style={{marginBottom:'10px'}}>
                <h3>Quick Changes</h3>
                <CounterButton onButtonClick ={handleIncrement} color="green">+ Increament</CounterButton>
                <CounterButton onButtonClick ={handleDecrement} color="red">- Decrement</CounterButton>
                {/* <CounterButton onButtonClick ={handleReset} color="gray">Reset</CounterButton> */}
                <CounterButton onButtonClick={()=> setCount(100)} color="purple">Set to 100</CounterButton>
                <CounterButton onButtonClick={()=> setCount(prevCount=> prevCount*2)} color="orange">Double It</CounterButton>
            </div>
            <div>
                <CounterButton
                    onButtonClick={()=>handleChangeBy(1)}
                    color='lightgreen'>
                    +1
                </CounterButton>

                <CounterButton
                    onButtonClick={()=>handleChangeBy(5)}
                    color='green'>
                    +5
                </CounterButton>

                <CounterButton
                    onButtonClick={()=>handleChangeBy(10)}
                    color='black'>
                    +10
                </CounterButton>
            </div>

            <div style={{marginBottom:'10px'}}>

                <CounterButton
                    onButtonClick={()=>handleChangeBy(-1)}
                    color='orange'>
                    -1
                </CounterButton>

                <CounterButton
                    onButtonClick={()=>handleChangeBy(-5)}
                    color='red'>
                    -5
                </CounterButton>

                <CounterButton
                    onButtonClick={()=>handleChangeBy(-10)}
                    color='darkred'>
                    -10
                </CounterButton>
            </div>

            <div>

                <CounterButton
                    onButtonClick={handleReset}
                    color='gray'>
                    Rest
                </CounterButton>

                <CounterButton
                    onButtonClick={createChangeHandler(25)}
                    color='purple'>
                    +25(HOF)
                </CounterButton>
            </div>
        </div>
    );
}

export default Counter;