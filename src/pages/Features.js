import Redux from "./assignments/store/Counter";
import Context from "./assignments/context/Counter";
import Recursion from "./assignments/Recursion";
import Timer from "./assignments/Timer";
import Modal from "./Modal";
import Toggle from "./assignments/Toggle";
import Timeout from "./assignments/Timeout";
import { CounterButton } from "./assignments/recoil/CounterButton";
import { CounterMobx } from "./assignments/mobx/CounterMobx";
import { Counter } from "./assignments/mobx/Counter";

const counter = new Counter();

const Features = () => {
    return (
        <Modal>
            <Timer />
            <hr />
            <Redux />
            <hr />
            <Context />
            <hr />
            <CounterButton />
            <hr />
            <CounterMobx counter={counter} />
            <hr />
            <Recursion />
            <hr />
            <Toggle />
            <hr />
            <Timeout />
        </Modal>
    )
}

export default Features;