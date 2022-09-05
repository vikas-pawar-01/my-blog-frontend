import React from 'react';
import Redux from "../../features/components/store/Counter";
import Context from "../../features/components/context/Counter";
import Recursion from "../../features/pages/Recursion";
import Timer from "../../features/pages/Timer";
import Modal from "../components/Modal";
import Toggle from "../../features/pages/Toggle";
import Timeout from "../../features/pages/Timeout";
import FormData from '../../features/pages/FormData';
import { CounterButton } from "../../features/components/recoil/CounterButton";
import { CounterMobx } from "../../features/components/mobx/CounterMobx";
import { Counter } from "../../features/components/mobx/Counter";

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
            <hr />
            <FormData />
        </Modal>
    )
}

export default Features;