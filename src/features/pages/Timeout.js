import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Timeout = () => {
    const [textClass, setTextClass] = useState('black');
    const [buttonClass, setButtonClass] = useState('show')

    const hideButton = () => setTimeout(() => {
        setButtonClass('hide');
    }, 1000);

    const showButton = () => setTimeout(() => {
        setButtonClass('show');
        setTextClass('black');
    }, 3000);

    const handleClick = () => {
        setTextClass('red');
        hideButton();
        showButton();
    }

    return (
        <>
            <p className={textClass}>
                When you click on button, < br />
                text turns red, < br />
                after 1 sec, button disappears, < br />
                after 3 seconds button reappaears and text turns black again
            </p>

            <Button className={buttonClass} onClick={handleClick}>Click!</Button>
        </>
    )
}

export default Timeout;
