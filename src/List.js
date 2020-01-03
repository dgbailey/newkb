import React, {useState,useReducer} from 'react';
import styled from 'styled-components';
import {Item} from './Item';


//list will be able to add new items
//list will be able to delete items
//list will be able to sort items by status






export const List = (props) => {

    console.log('calling list function')
    const {items,title} = props;
    // const [todos,setTodos] = useState(items);
    const [todoId,setTodoId] = useState(1);
    const [inputState,setInputState] = useState({});
    //here originally I had state in two different places. the useState varable and the reducer state
    //I thought that since the reducer state was initialized based off of teh useState var, any updates
    //to useState would be reflected in teh reducer state.  This was incorrect.  The thought behind a reducer
    //is that only action objects can change state.  in fact what I was trying to do was probably an antipattern.
    //
    const [state,dispatch] = useReducer(reducer,items);

    function reducer(state,action){
        console.log(state)
    
        switch(action.type){
            case 'ALL':
                return state;
            case 'COMPLETE':
                return [...state.sort((a,b) => a.status - b.status)];
            case 'INCOMPLETE':
                return [...state.sort((a,b) => b.status - a.status)];
            case 'ADD':
                return [action.item,...state]
            default:
                return state;
        }
        
    
    }

    const filterByComplete = () => {
        let action = {type:'COMPLETE'}
        dispatch(action);
        
        console.log(state)

        
      
        
    }
    

    const addTodo = () => {

    
        dispatch({type:'ADD',item:inputState})
        setTodoId(todoId +1);

    }

    const changeObjectStatus = todoItem => () => {

        todoItem.status = !todoItem.status;

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
            {state.map(item => <Item changeObjectStatus={changeObjectStatus(item)} filter={filterByComplete} text={item.text} key={item.id}></Item>)}
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