//board will have many lists
//board will have ability to add and delete lists

import React, {useState} from 'react';
import styled from 'styled-components';
import {List} from './List';

const initialBoard = [

    {id:0,
    items:[{id:0,text:'Sample text'}],
    title:'Title'},
]

export const Board = () =>{

    const [lists,setLists] = useState(initialBoard);
    const [listId, setListId] = useState(1);
    const [input,setInput] = useState(null);

    const addList = () =>{
        const newLi = {
            id:listId,
            items:[],
            title:input
        
        }

        setLists([newLi,...lists])
        setListId(listId + 1);

    }

    const handleChange = e => {
        let value = e.target.value;
        console.log(value)
        setInput(value);
    }

    return(

        <StyledBoard>
            <div>
                <input onChange={handleChange}></input>
                <button onClick={addList}>Add List</button>
            </div>
           
            
            {lists.map(li => <List title = {li.title} key={li.id} items={li.items}></List>)}
        </StyledBoard>
    )






}


const StyledBoard = styled.div `

    height:600px;
    width:1000px;
    display:flex;
    overflow-x:scroll;
    border:1px solid black;
    margin: 100px auto;



`