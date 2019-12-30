import React, {useState} from 'react';
import styled from 'styled-components';



//list will be able to add new items
//list will be able to delete items
//list will be able to sort items by status

export const List = (props) => {

    const {items,title} = props;
    const [todos,setTodos] = useState(items);
    const [todoId,setTodoId] = useState(1);
    const [inputState,setInputState] = useState({});
    

    const addTodo = () => {

    
        let newTodos = [inputState,...todos]
        setTodos(newTodos);
        setTodoId(todoId +1);

    }

    const handleChange = e => {
        let n = {
            id:todoId,
            text:e.target.value
        }
     
        setInputState(n);

    }

    return (

        <StyledList>
            <h1>{props.title}</h1>
            <input onChange={handleChange} name='text'></input>
            <button onClick={addTodo}>Add Todo</button>
            {todos.map(item => <li key={item.id}>{item.text}</li>)}
        </StyledList>


    )




}


const StyledList = styled.ul `

    width:200px;
    border:1px solid black;




`