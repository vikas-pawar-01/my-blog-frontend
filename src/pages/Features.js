import Redux from "./assignments/store/Counter";
import Context from "./assignments/context/Counter";
import Recursion from "./assignments/Recursion";
import Timer from "./assignments/Timer";

const Features = () => {
    return (
        <div className="center">
            <Timer />
            <hr />
            <Redux />
            <hr />
            <Context />
            <hr />
            <Recursion />
        </div>
    )
}

export default Features;