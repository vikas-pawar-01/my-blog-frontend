import { useState } from "react";
import { Button } from "react-bootstrap";

const Toggle = () => {
    const [change, setChange] = useState(false);
    const handleChange = () => {
        setChange(!change);
    }
    return (
        <>
            <p>Toggle Text:</p>
            {!change && <p>Hello World.</p>}
            {change && <p>Welcome.</p>}
            <Button onClick={handleChange}>Changed!</Button>
        </>
    )
}

export default Toggle;
