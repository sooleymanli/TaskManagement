import React from 'react';
import '../style/MembersHeader.css'

function MembersHeader(props) {
    return (
        <div className="members-header">
            <div className="members-header-left">
                <span className="team-title">Product Design Team</span>
                <span className="sprint-count">Sprint 9</span>

            </div>
            <div className="members-header-right">
                <div className="avatars">
                    <div className="member-img"></div>
                    <div className="member-img"></div>
                    <div className="member-img"></div>
                    <div className="member-img"></div>
                    <div className="member-img member-count"></div>
                </div>
                <div className="new-member">

                </div>

            </div>
        </div>
    );
}

export default MembersHeader;