import React, {useEffect, useState,useLayoutEffect} from 'react';
import './App.css';
import TopHeader from "./components/TopHeader";
import MembersHeader from "./components/MembersHeader";
import Body from "./components/Body";
import axios from "axios";

function App() {

    const [todo,setTodo]=useState([])
    const [inprogress,setInprogress]=useState([])
    const [review,setReview]=useState([])
    const [done,setDone]=useState([])
    const [members,setMembers]=useState([])
    const [data,setData]=useState( {})
    const [update,setUpdate]=useState("initial")
    let to=[]
    let pro=[]
    let rev =[]
    let don =[]

    useEffect(()=>{


        axios.get('http://localhost:3000/tasks')
            .then(function (response) {

                response.data.map((e)=>{

                    if(e.status==="Done"){
                        don.push(e)
                        setDone([...don])

                    }
                    else if(e.status==="In Progress"){
                        pro.push(e)
                        setInprogress([...pro])

                    }
                    else if(e.status==="In Review"){
                        rev.push(e)
                        setReview([...rev])

                    }
                    else if(e.status==="To do"){
                        to.push(e)
                        setTodo([...to])

                    }
                })





            })


        axios.get('http://localhost:3000/members')
            .then(function (response) {
                setMembers(response.data)




            })





    },[])

    useLayoutEffect(() => {

        setData(
            {
                "ToDo": {
                    name: "To Do",
                    items: todo
                },
                "InProgress": {
                    name: "In Progress",
                    items: inprogress
                },
                "InReview": {
                    name: "In Review",
                    items: review
                },
                "Done": {
                    name: "Done",
                    items: done
                }

            }

        )
    }, [todo]);





const updateFunc=()=>{
    axios.get('http://localhost:3000/tasks')
        .then(function (response) {

            response.data.map((e)=>{

                if(e.status==="Done"){
                    don.push(e)
                    setDone([...don])

                }
                else if(e.status==="In Progress"){
                    pro.push(e)
                    setInprogress([...pro])

                }
                else if(e.status==="In Review"){
                    rev.push(e)
                    setReview([...rev])

                }
                else if(e.status==="To do"){
                    to.push(e)
                    setTodo([...to])

                }
            })





        })


    setData(
        {
            "ToDo": {
                name: "To Do",
                items: todo
            },
            "InProgress": {
                name: "In Progress",
                items: inprogress
            },
            "InReview": {
                name: "In Review",
                items: review
            },
            "Done": {
                name: "Done",
                items: done
            }

        }

    )
}
  return (

      <div className="main">
          <TopHeader />
          <MembersHeader />
          <Body  members={members} data={data} updateFunc={updateFunc}/>
      </div>

  );
}

export default App;
