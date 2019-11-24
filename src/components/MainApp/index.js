import React, { useState} from 'react';
import { Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import '../style/style.scss'
import {connect} from 'react-redux'
import { setTask } from '../../store/actions'
import { Tasks } from "../Tasks";
import {Comments} from "../Comments";


const mapStateToProps = state => ({
    allTask: state.task.allTask
});

export const MainApp = connect(mapStateToProps, { setTask }) (props =>{
    const [value, setValue] = useState();

    const createHandle = () =>{
        if (value !== ''){
            props.setTask({
                name: value,
                id: Math.random(),
                comments: []
            });
        }
        setValue('');
    };

    return(
     <div className='wrapper-background'>
         <div className='wrapper-blocks'>
         <div className='items'>
         <Row className='row'>
             <Col span={3}>
                 <h2 className='title'>Items</h2>
             </Col>
         </Row>
         <Row className='row' type='flex' justify='space-between'>
             <Col span={15}>
                 <Input onChange={e => setValue(e.target.value)} value={value} placeholder="Type name here"/>
             </Col>
             <Col span={3}>
                 <Button onClick={createHandle} className='add-btn' type="primary">Add new</Button>
             </Col>
         </Row>
             <div className='scroll-items'>
                <Tasks />
             </div>
         </div>
                 <div className='comments'>
                     <Comments />
                 </div>
         </div>
     </div>
    )
});
