import { createContext, useState } from "react";

export const CounterContext = createContext({
    counter: 0,
    increment: () => { },
    decrement: () => { },
    incrementByAmount: () => { }
});

export const CounterContextProvider = props => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const incrementByAmount = (amount) => {
        setCounter(counter + +amount);
    }

    return <CounterContext.Provider
        value={{
            counter,
            increment,
            decrement,
            incrementByAmount
        }}>
        {props.children}
    </CounterContext.Provider>
}

export default CounterContext;