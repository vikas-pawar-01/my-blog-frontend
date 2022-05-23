import React, { useState, useTransition } from 'react';
import { Form } from "react-bootstrap";
import { generateProducts } from './data';
import { ProductList } from './ProductList';

const PRODUCTS = generateProducts();

const Transition = () => {
    const [isPending, startTransition] = useTransition();
    const [filterTerm, setFilterTerm] = useState('');

    const filteredProducts = filterProducts(filterTerm);

    const updateFilterHandler = event => {
        startTransition(() => {
            setFilterTerm(event.target.value);
        });
    }

    return (
        <>
            <h2>useTransition & useDeferredValue</h2>
            <Form.Control type='text' onChange={updateFilterHandler} />
            {isPending && <p>Updating List...</p>}
            <ProductList products={filteredProducts} />
        </>
    )
}

const filterProducts = filterTerm => {
    let products = [];
    if (filterTerm) {
        products = PRODUCTS.filter(product => product.includes(filterTerm));
    } else {
        products = PRODUCTS;
    }

    return products;
}

export default Transition;