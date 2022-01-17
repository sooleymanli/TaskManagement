import React, { useState} from 'react';
import '../style/Body.css'
import NewItem from "./NewItem";
import Board from "./Board";
import axios from "axios";



function Body(props) {
    const [displayNewItem,setDisplayNewItem] = useState("new-item-deactive")
    const [membersList,setMembersList]=useState([])


const showNewItemPopup = ()=>{
    setDisplayNewItem("new-item-active")
    axios.get('http://localhost:3000/members')
        .then(function (response) {
            setMembersList(response.data)
        })
}

    const hideNewItemPopup = ()=>{
        setDisplayNewItem("new-item-deactive")
    }

    return (
        <div className="body">
            <div className="header">
                <div className="header-left">
                    <input type="text" id="search" placeholder="Search Items" autoComplete="off"/>
                </div>
                <div className="header-right">
                    <button onClick={showNewItemPopup}>New Item</button>

                </div>
            </div>
            <Board data={props.data} members={props.members} />
            <NewItem  displayNewItemPopup={displayNewItem} hideNewItemPopup={hideNewItemPopup}  membersList={membersList} updateFunc={props.updateFunc}/>
        </div>
    );
}

export default Body;