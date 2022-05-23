import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const amount = useRef();

    return (
        <>
            <h2>State Management Using Redux:</h2>
            <Button className="btn-padding" variant="success" onClick={() => dispatch(increment())}>+</Button>

            <span>{count}</span>

            <Button className="btn-padding" variant="danger" onClick={() => dispatch(decrement())}>-</Button>

            <Form.Control type="number" ref={amount} placeholder="Enter amount" />

            <Button className="btn-margin-top" variant="primary" onClick={() => dispatch(incrementByAmount(amount.current.value))}>Add Amount</Button>
        </>
    );
};

export default Counter;