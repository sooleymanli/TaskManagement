import React, { useState} from 'react';
import '../style/NewItem.css'
import axios from "axios";

function NewItem(props) {


    const [name,setName]=useState(null)
    const [description,setDescription]=useState(null)
    const [date,setDate]=useState(null)
    const [assigne,setAssigne]=useState(null)
    const [id,setId]=useState()

    const onFocus=(e)=>{
        e.currentTarget.type = "date";
    };


    const sendItem = ()=>{



        axios.get('http://localhost:3000/tasks')
            .then(function (response) {
                setId(response.data.length)


            })

        axios.post('http://localhost:3000/tasks/', {
            "id": id,
            "task_name": name,
            "description":description,
            "assign_member_id": assigne,
            "date": date,
            "status": "To do"
        })
            .then(function (response) {
                setName("")
                setDescription("")
                setAssigne("")
                setDate("")
                props.hideNewItemPopup()
                props.updateFunc()

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <div className="new-item" id={props.displayNewItemPopup}>
            <div className="new-item-body">
                <div className="new-item-title">New Item</div>
                <div className="new-item-form">
                    <input type="text" placeholder="Name" className="new-item-input-name" defaultValue={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <textarea name="textarea" id="description" placeholder="Description" defaultValue={description} className="new-item-input-description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    <input type="text"  placeholder="Date" onFocus ={onFocus} defaultValue={date} className="new-item-input-date" onChange={(e)=>{setDate(e.target.value)}} />
                    <select name="assigne" id="assigne" defaultValue={assigne} onChange={(e)=>{setAssigne(e.target.value)}}>
                        <option value="DEFAULT"  disabled selected>Assigne</option>
                        {
                            props.membersList.reverse().map((e,index)=>{
                                return(
                                    <option value={e.id} key={index}>{e.member_name}</option>
                                )
                            })
                        }


                    </select>
                </div>
                <div className="new-item-buttons">
                    <button className="cancel-button" onClick={props.hideNewItemPopup}>Cancel</button>
                    <button className="save-button" onClick={sendItem}>Save</button>
                </div>
            </div>

        </div>

    );
}

export default NewItem;