import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import env from "react-dotenv";

const FormData = () => {
    const todoRef = useRef();
    const [changed, setChanged] = useState(true);
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch( `${env.NODE_API}api/todos` );
            const responseData = await response.json();            
            setTodos(responseData.todos);
        }

        fetchData();
    }, [changed]);

    const handleSave = async event => {
        event.preventDefault();        
        
        if (todoRef.current.value.trim().length === 0) {
            return false;
        }

        try {
            const url = env.NODE_API;
            const response = await fetch(
                `${url}api/todo`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            name: todoRef.current.value,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }                    
                }
            );

            const responseData = await response.json();
            
            if (!response.ok) {
                throw new Error(responseData.message);
            }
        } catch (err) {
            console.log(err);
        }

        todoRef.current.value = '';
        setChanged( prev => !prev);
    }

    return (
        <>
            <p>Todo: </p>
            <input type='text' id='name' name='name' ref={todoRef} />
            &nbsp;&nbsp;
            <Button onClick={handleSave}>Save</Button>
            <p>List Todo</p>
            <ul>
                {todos.map( todo => {
                    return <li key={todo.id}>{todo.name}</li>
                })}
            </ul>
        </>
    );
}

export default FormData;
