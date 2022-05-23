import React, { useDeferredValue } from 'react';

export const ProductList = ({ products }) => {
    const deferredProducts = useDeferredValue(products);

    return (
        <div className="container">
            {deferredProducts.map((product, key) => (
                <div className="row" key={key}>
                    <div className="col columnColor">
                        {product}
                    </div>
                </div>
            ))}
        </div>
    );
}