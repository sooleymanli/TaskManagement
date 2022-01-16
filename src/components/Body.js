import React, {useState} from 'react';
import '../style/Body.css'
import NewItem from "./NewItem";


function Body(props) {
    const [displayNewItem,setDisplayNewItem] = useState("new-item-deactive")

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
                    <button onClick={()=>{ setDisplayNewItem("new-item-active")}}>New Item</button>

                </div>
            </div>

<NewItem  displayNewItemPopup={displayNewItem} hideNewItemPopup={hideNewItemPopup} />
        </div>
    );
}

export default Body;