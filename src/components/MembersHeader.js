import React, {useEffect, useState} from 'react';
import '../style/MembersHeader.css'
import NewMember from "./NewMember";
import axios from "axios";

function MembersHeader(props) {

    const [membersNew, setMembersNew] = useState([]);
    const [newMemberPopup,setNewMemberPopup]=useState("deactive")
const [memberCount,setMemberCount]=useState()
    const showPopup = ()=>{
        setNewMemberPopup("active")

    }

    const hidePopup = () =>{
        setNewMemberPopup("deactive")

    }
    const plusMember = ()=>{
        setMemberCount(memberCount+1)
    }

    const changeState = () =>{
        axios.get('http://localhost:3000/members')
            .then(function (response) {
                setMembersNew(response.data.reverse())
                setMemberCount(response.data.length)
            })

    }
    useEffect(()=>{
        axios.get('http://localhost:3000/members')
            .then(function (response) {
                setMembersNew(response.data.reverse())

                setMemberCount(response.data.length)
            })

    },[])

    return (

        <div className="members-header">
            <div className="members-header-left">
                <span className="team-title">Product Design Team</span>
                <span className="sprint-count">Sprint {memberCount}</span>

            </div>
            <div className="members-header-right">
                <div className="avatars">
                    {membersNew.map(function(e,i){
                        if(i<4){
                        return(
                            <div className="member-img" key={i} style={{backgroundImage:`url(${e.member_pic})`}}>{e.member_pic==null?e.member_name.substring(0, 1):""}</div>
                        )}else{
                            return null
                        }


                    })}



                    <div className="member-img member-count">+{memberCount-4}</div>
                </div>
                <div className="new-member">
                    <span onClick={showPopup}>+ New Memmber</span>
                </div>
                <NewMember display={newMemberPopup}  function={hidePopup}  plusMember={plusMember} changeState={changeState}/>

            </div>
        </div>
    );
}

export default MembersHeader;