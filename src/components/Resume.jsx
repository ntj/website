import React, { useState } from 'react';
import { Timeline, Radio } from 'antd';

export default function Resume(){
    const [mode, setMode] = useState('left');

    const onChange = e => {
        setMode(e.target.value);
    };

    return (
        <div>
            <Timeline mode={mode}>
            <Timeline.Item label="2020">Flask, Django, Docker und ReactJS<br/><br/>
            </Timeline.Item>
                <Timeline.Item label="2017">Drupal und Python Flask</Timeline.Item>
                <Timeline.Item label="2014">SharePoint und Dynamics CRM</Timeline.Item>
                <Timeline.Item label="2013">SharePoint und .Net</Timeline.Item>
                <Timeline.Item label="2012">Abschluss Dipl. Informatik, TU Dresden</Timeline.Item>
            </Timeline>
        </div>
    )
}