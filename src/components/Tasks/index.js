import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { deleteTask, getQuantity } from "../../store/actions";
import {Button, Col, Row} from "antd";

export const Tasks = connect(state => state, { deleteTask, getQuantity})((props) =>{

    const [active, setActive] = useState();

    const deleteHandle = (id) =>{
        let newArr = props.task.allTask.filter(elem =>{
            return elem.id !== id
        });
        props.deleteTask(newArr)
    };

    const activeTask = (index) =>{
        setActive(index);
    };

    useEffect(() =>{
        props.getQuantity({active_index: active})
    },[active]);

    return(
        <div>
            {props.task.allTask ? props.task.allTask.map((elem, index) => {
                    return(
                        <Row key={elem.id} className={active === index ? 'wrapper-task row active' : 'wrapper-task row'}
                             type='flex' justify='space-between'>
                            <Col onClick={() => activeTask(index)} span={20}>
                                <ul className='ul'>
                                    <li>{elem.name}</li>
                                    <span className='quantity'>{elem.comments.length}</span>
                                </ul>
                            </Col>
                            <Col span={3}>
                                <Button onClick={() => deleteHandle(elem.id)} className='delete-btn'>Delete</Button>
                            </Col>
                        </Row>
                    )
                }
            ) : null
            }
        </div>
    )
});