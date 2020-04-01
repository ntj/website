import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export default function CodingCard(props){

    return (    
        <div>
            <Card title={props.title}>
                {props.children}
            </Card>
        </div>
    )
}