import React, {useState} from 'react';
import '../style/NewMember.css'
import axios from "axios";

function NewMember(props) {
    const [id,setId]=useState(null)
    const [name,setName]=useState(null)
    const [image,setImage] = useState(null)



    const addNewMember=()=>{
        axios.get('http://localhost:3000/members')
            .then(function (response) {
                setId(response.data.length)

            })

        console.log(name)
        console.log(image)
        console.log(id)


if(name!==null){
    axios.post('http://localhost:3000/members/', {
        "id": id,
        "member_name": name,
        "member_pic":image!==null?URL.createObjectURL(image):null
    })
        .then(function (response) {
            console.log(response);
            props.function()
            props.plusMember()
            props.changeState()
            setName("")
            setImage(null)
            setId(null)
        })
        .catch(function (error) {
            console.log(error);
        });
}




    }





    return (

        <div className="new-member-body"  id={props.display}>
            <div className="title">New Member</div>
            <div className="form">
                <input type="text" placeholder="Name" defaultValue={name} className="name-input" onChange={(e)=>{setName(e.target.value)}}/>

                    <label htmlFor="image-upload">
                        <svg width="18" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" >
                            <path d="M850,974.5H150c-77.3,0-140-65.3-140-145.9V646.3c0-20.1,15.7-36.5,35-36.5h70c19.3,0,35,16.3,35,36.5v109.4c0,40.3,31.3,72.9,70,72.9h560c38.7,0,70-32.7,70-72.9V646.3c0-20.1,15.7-36.5,35-36.5h70c19.3,0,35,16.3,35,36.5v182.3C990,909.2,927.3,974.5,850,974.5L850,974.5z M784.5,449.2c-14.2,14.8-37.1,14.8-51.3,0L570,279.1v367.2c0,20.1-15.7,36.5-35,36.5h-70c-19.3,0-35-16.3-35-36.5V279.1L266.8,449.2c-14.2,14.8-37.1,14.8-51.3,0l-51.3-53.4c-14.2-14.8-14.2-38.7,0-53.4L453.2,41.1c1.2-1.3,23.7-15.6,46.4-15.6c22.9,0,45.9,14.3,47.2,15.6l289.1,301.2c14.2,14.8,14.2,38.7,0,53.4L784.5,449.2L784.5,449.2z" />
                        </svg>
                        <span>Upload Photo</span>
                    </label>
                    <input type="file" id="image-upload" defaultValue={image} onChange={(e)=>{setImage(e.target.files[0])}}/>


            </div>

            <div className="buttons">
                <button className="cancel-button" onClick={props.function}>Cancel</button>
                <button className="save-button" onClick={addNewMember}>Save</button>
            </div>
        </div>

    );
}

export default NewMember;