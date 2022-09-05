import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const FormData = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch( 'http://localhost:8000/api/todos' );
            const responseData = await response.json();            
            setTodos(responseData.todos);
        }

        fetchData();
    }, []);

    const todoChangeHandler = event => {
        setTodo(event.target.value);
    }

    const handleSave = async event => {
        event.preventDefault();

        if( todo.trim().length === 0 ) {
            return false;
        }

        try {
            const response = await fetch(
                'http://localhost:8000/api/todo',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            name: todo,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }                    
                }
            );

            const responseData = await response.json();
            
            console.log(responseData);

            if (!response.ok) {
                throw new Error(responseData.message);
            }
        } catch (err) {
            console.log(err);
        }

        setTodo('');
    }

    return (
        <>
            <p>Todo: </p>
            <input type='text' id='name' name='name' onChange={todoChangeHandler} value={todo}/>
            &nbsp;&nbsp;
            <Button onClick={handleSave}>Save</Button>
            <p>List Todo</p>
            <ul>
                {todos.map( todo => {
                    return <li key={todo.key}>{todo.name}</li>
                })}
            </ul>
        </>
    );
}

export default FormData;
