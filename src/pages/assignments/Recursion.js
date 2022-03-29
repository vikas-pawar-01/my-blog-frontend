const Recursion = () => {
    const myObject = {
        "a": 1,
        "b": [2, 3],
        "age": 10,
        ol: {
            a: 5,
            age: 20
        },
        "d": { "age": 30 }
    };

    let total = 0;
    const calculateAge = (myObj, sum) => {

        for (let obj in myObj) {
            if (obj === 'age') {
                total += myObj['age'];
            }

            if (typeof myObj[obj] == 'object' && myObj[obj] != null) {
                calculateAge(myObj[obj], sum);
            }
        }
    }

    calculateAge(myObject, 0);

    return (
        <>
            <h2>Recurssive Function: Nested Age Total = {total}</h2>
            <pre>{JSON.stringify(myObject, null, 2)}</pre>
        </>
    );
}

export default Recursion;