import { Form, Button } from "react-bootstrap"
import { useRecoilState } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

    return (
        <>
            <h2>State Management with Recoil</h2>
            <p>You have clicked button {numberOfClicks} times.</p>
            <Form.Control value={incrementBy} onChange={e => setIncrementBy(Number(e.target.value))} type="number" placeholder="Enter number" />
            < br />
            <Button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>Set By Number</Button>
        </>
    )
}