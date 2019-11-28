import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { deleteTask, setIndex } from "../../store/actions";
import {Button, Col, Row} from "antd";

export const Tasks = connect(state => state, { deleteTask, setIndex})((props) =>{
    const deleteHandle = (id) =>{
        let newArr = props.task.allTask.filter(elem =>{
            return elem.id !== id
        });
        props.deleteTask(newArr)
        props.setIndex({active_index: ''})
    };

    const activeTask = (index) =>{
        props.setIndex({active_index: index});
    };

    useEffect(() =>{
        props.setIndex({active_index: ''})
    },[]);

    return(
        <div>
            {props.task.allTask ? props.task.allTask.map((elem, index) =>
                        <Row key={elem.id} className={props.task.active_index === index ? 'wrapper-task row active' : 'wrapper-task row'}
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
            ) : null
            }
        </div>
    )
});