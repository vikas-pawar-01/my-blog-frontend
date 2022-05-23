
import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import CounterContext from "./counter-context";

const Counter = () => {

    const userCtx = useContext(CounterContext);

    const amount = useRef();

    return (
        <>
            <h2>State Management with Context</h2>
            <Button className="btn-padding" variant="success" onClick={() => userCtx.increment()}>+</Button>

            <span>{userCtx.counter}</span>

            <Button className="btn-padding" variant="danger" onClick={() => userCtx.decrement()}>-</Button>

            <Form.Control type="number" ref={amount} placeholder="Enter amount" />
            <Button className="btn-margin-top" variant="primary" onClick={() => userCtx.incrementByAmount(amount.current.value)}>Add Amount</Button>
        </>
    );
};

export default Counter;