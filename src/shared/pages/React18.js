import React from 'react';
import Transition from '../../react18/pages/Transition';
import Modal from "../components/Modal";

const React18 = () => {

    return (
        <Modal>
            <h3>React 18</h3>
            <ul>
                <li>Automatic Batching</li>
                <li>Transitions</li>
                <li>Suspense</li>
                <li>New Client and Server Rendering APIs</li>
                <li>New Hooks: useTransition, useDeferredValue, useSyncExternalStore, useInsertionEffect</li>
                <li>
                    For more details refer: <a href='https://reactjs.org/blog/2022/03/29/react-v18.html' target='blank'>React Blog</a>
                </li>
            </ul>
            <hr />
            <Transition />
            <hr />
        </Modal>
    )
}

export default React18;