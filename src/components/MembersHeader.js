import React, {useEffect, useState} from 'react';
import '../style/MembersHeader.css'
import NewMember from "./NewMember";
import axios from "axios";

function MembersHeader(props) {

    const [membersNew, setMembersNew] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/members')
            .then(function (response) {
                setMembersNew(response.data)


            })

    },[])

    return (

        <div className="members-header">
            <div className="members-header-left">
                <span className="team-title">Product Design Team</span>
                <span className="sprint-count">Sprint 9</span>

            </div>
            <div className="members-header-right">
                <div className="avatars">
                    {membersNew.map(function(e,index){
                        if(index<4){
                        return(
                            <div className="member-img" key={e.member_id} style={{backgroundImage:`url(${e.member_pic})`}}></div>
                        )}


                    })}


                    <div className="member-img member-count">+{membersNew.length-4}</div>
                </div>
                <div className="new-member">
                    <span>+ New Memmber</span>
                </div>
                <NewMember />

            </div>
        </div>
    );
}

export default MembersHeader;