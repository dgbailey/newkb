import React, {useState} from 'react';
import styled from 'styled-components';



export const Item = (props) => {

    const [complete,setComplete]  = useState(false);
    //state for status
    const {filter} = props;
    const setStatus = () => {

        setComplete(!complete);
        

    }
    return (

        <StyledListItem onClick={() =>{setStatus();filter()}} className={complete ? 'complete':''}>{props.text}</StyledListItem>
    )





}



const StyledListItem = styled.li `

    display:inline-block;
    border:1px solid black;
    height:100px;
    width:100%;
    &.complete{
        background:green;
    }


`