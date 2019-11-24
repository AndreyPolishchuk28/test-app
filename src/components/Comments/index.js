import React, {useEffect, useState} from "react";
import { Input, Row, Col } from "antd";
import {connect} from "react-redux";
import {setComments, deleteTask} from "../../store/actions";

// const mapStateToProps = state => ({
//     allTask: state.task.allTask,
//     active_index: state.task.active_index
// });

export const Comments = connect(state => state, {setComments,deleteTask})( (props) =>{

    const [comment, setComment] = useState();
    const [value, setValue] = useState('');

    const { TextArea } = Input;
    const handleKey = (event) =>{
        if (event.ctrlKey && event.keyCode === 13) {
            let arr = props.task.allTask;
            if (props.task.active_index !== undefined && props.task.active_index !== null){ arr[props.task.active_index].comments.push(event.target.value);
                props.setComments(arr);
                setValue('');
                setComment(props.task.allTask[props.task.active_index].comments.map((elem, index) => <Row className='row wrapper-task' key={index}>
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
        if (props.task.active_index !== undefined && props.task.active_index !== null){
            setComment(props.task.allTask[props.task.active_index].comments.map((elem, index) =>
                    <Row className='row wrapper-task' key={index}>
                        <Col span={4}>
                            <div className='photo'></div>
                        </Col>
                        <Col span={17}>
                            <p className='text-comment'>{elem}</p>
                        </Col>
                    </Row>
            ))
        }
    }, [props.task.active_index]);

    useEffect(() =>{
        setComment('')
    }, []);

    return(
        <div className='comments-wrapper'>
            <Row className='row'>
                <Col span={3}>
                    <h2 className='title'>Comments #{props.task.active_index !== undefined  ? props.task.active_index +1 : null}</h2>
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