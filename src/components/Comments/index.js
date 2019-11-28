import React, {useEffect, useState} from "react";
import { Input, Row, Col } from "antd";
import {connect} from "react-redux";
import {setComments, deleteTask} from "../../store/actions";

const mapStateToProps = state => ({
    allTask: state.task.allTask,
    active_index: state.task.active_index
});

export const Comments = connect( mapStateToProps, {setComments,deleteTask})((props) =>{
    const [comment, setComment] = useState('');
    const [value, setValue] = useState('');

    const { TextArea } = Input;

    const handleKey = (event) =>{
        if (event.ctrlKey && event.keyCode === 13) {
            let arr = props.allTask;
            if (props.active_index !== undefined && props.active_index !== null){
                arr[props.active_index].comments.push(event.target.value);
                props.setComments(arr);
                setValue('');
                setComment(props.allTask[props.active_index].comments.map((elem, index) =>
                        <Row className='row wrapper-task' key={index}>
                            <Col span={4}>
                                <div className='photo'></div>
                            </Col>
                            <Col span={19}>
                                <p className='text-comment'>{elem}</p>
                            </Col>
                        </Row>
                ))
            }
        }
    };

    useEffect(() =>{
        if (props.active_index !== undefined){
            props.allTask.map((elem,index) => {
                if (props.active_index === index){
                    setComment(elem.comments.map((el, index) =>
                        <Row className='row wrapper-task' key={index}>
                            <Col span={4}>
                                <div className='photo'></div>
                            </Col>
                            <Col span={17}>
                                <p className='text-comment'>{el}</p>
                            </Col>
                        </Row>
                    ))
                }
            })
        }
    }, [props.active_index]);

    useEffect(() =>{
        setComment('')
    }, []);

    useEffect(() =>{
        if (props.active_index === ''){
            setComment('')
        }
    }, [props.active_index]);

    return(
        <div className='comments-wrapper'>
            <Row className='row'>
                <Col span={3}>
                    <h2 className='title'>Comments #{props.active_index === ''  ? '' : props.active_index +1}</h2>
                </Col>
            </Row>
            <div className='wrapper-comments'>
                {comment}
            </div>
            <Row className='comment row' type='flex' justify='center' allign='bottom'>
                <Col span={3}>
                    <div className='image'></div>
                </Col>
                <Col span={20}>
                    <TextArea className='text-area' allign='bottom' onKeyDown={handleKey} onChange={e => setValue(e.target.value)} value={value} />
                </Col>
            </Row>
        </div>
    )
});