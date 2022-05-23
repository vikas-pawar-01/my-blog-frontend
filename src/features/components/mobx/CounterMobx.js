import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { observer } from 'mobx-react-lite';

export const CounterMobx = observer(({ counter }) => {
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <h2>State Management with Mobx</h2>
            <p>You have clicked button {counter.numberOfClicks} times.</p>
            <Form.Control value={incrementBy} onChange={e => setIncrementBy(Number(e.target.value))} type="number" placeholder="Enter number" />
            < br />
            <Button onClick={() => counter.increment(incrementBy)}>Set By Number</Button>
        </>
    )
});