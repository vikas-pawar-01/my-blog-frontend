import React from 'react';
import { IndexDbApp } from "../../features/components/indexed-db/IndexDbApp";
import Modal from "../components/Modal";

export const Storage = () => {
    return (
        <Modal>
            <h1>Indexed DB Storage</h1>
            <IndexDbApp />
        </Modal>
    )
}

export default Storage;