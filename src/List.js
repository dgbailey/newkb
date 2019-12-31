import React, {useState} from 'react';
import styled from 'styled-components';
import {Item} from './Item';


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
            text:e.target.value,
            status:false
        }
     
        setInputState(n);

    }

    return (

        <StyledList>
            <h1>{props.title}</h1>
            <input onChange={handleChange} name='text'></input>
            <button onClick={addTodo}>Add Todo</button>
            {todos.map(item => <Item text={item.text} key={item.id}></Item>)}
        </StyledList>


    )




}


const StyledList = styled.ul `

    min-width:200px;
    border:1px solid black;
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;
    



`