import React, { useState } from 'react';
import { Timeline } from 'antd';

export default function Resume() {
    const [mode, setMode] = useState('left');

    const onChange = e => {
        setMode(e.target.value);
    };

    return (
        <div>
            <Timeline mode={mode}>
                <Timeline.Item label="2020">ReactJS, Webpack and Teaching :)<br /><br />
                </Timeline.Item>
                <Timeline.Item label="2019">Docker</Timeline.Item>
                <Timeline.Item label="2018">Django</Timeline.Item>
                <Timeline.Item label="2017">Drupal und Python Flask</Timeline.Item>
                <Timeline.Item label="2014">Dynamics CRM</Timeline.Item>
                <Timeline.Item label="2013">SharePoint und .Net</Timeline.Item>
                <Timeline.Item label="2012">Abschluss Dipl. Informatik, TU Dresden</Timeline.Item>
            </Timeline>
        </div>
    )
}