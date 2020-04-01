import React from 'react';
import './Header.css'
import Tachyons from 'tachyons/css/tachyons.min.css'
import CodeWindow from 'react-code-window';

var Latex = require('react-latex');

const Component = () => {
  const code = '(num) => num + 1';
  return <CodeWindow title={'object-value-equality.js'} width="70%">{code}</CodeWindow>;
}

export default function Sandbox(){

    return (
        <div>
            <div>
                This is my playground to try out React modules and JavaScript features.
            </div>
            <br/>
            <h3>React LaTeX</h3>
            <Latex>What is $(3\times 4) \div (5-3)$ ?</Latex>
        </div>
    )
}