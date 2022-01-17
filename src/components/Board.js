import React, {useEffect, useState} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import '../style/Board.css'




function Board(props) {




    const [members,setMembers]=useState([])
    const [columns, setColumns] = useState({});


        useEffect(()=>{
            setColumns(props.data)
            setMembers(props.members)
        },[props])





    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });

        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });

        }
    };

    return (
        <div className="board-div">


            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div className="columns" key={columnId}>
                            <div className="title-column-name"><span className="span-title">{column.name}</span> <span className="circle">{column.items.length}</span></div>

                            <div className="block" >
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className="column" {...provided.droppableProps} ref={provided.innerRef} style={{background: snapshot.isDraggingOver ? "#E6ECF0" : "#E6ECF0"}}>

                                                {column.items.map((item, index) => {
                                                    return (<Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div className="item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{backgroundColor: snapshot.isDragging ? "#fcfcfd" : "#fff", ...provided.draggableProps.style}}>
                                                                    <div className="item-title">{item.task_name}</div>
                                                                        <div className="item-description">
                                                                            {item.description}
                                                                        </div>
                                                                        <div className="item-assigne">

                                                                            {members.filter(d=>d.id===item.assign_member_id)
                                                                                .map(b=><span>{b.member_name}</span>)
                                                                            }

                                                                        </div>
                                                                        <div className="item-footer">
                                                                            <div className="left">
                                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#1D2D35"/>
                                                                                </svg>
                                                                                <span>{item.date}</span>
                                                                            </div>
                                                                            <div className="right">
                                                                                {members.filter(e=>e.id===item.assign_member_id)
                                                                                    .map(b=><div className="assigne-avatar" style={{backgroundImage:`url(${b.member_pic})`}}></div>)


                                                                                }

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default Board;