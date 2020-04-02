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
            <h3>Welcome to Spielwiese</h3>
            <br/>
            <h3>React LaTeX</h3>
            <Latex>What is $(3\times 4) \div (5-3)$ ?</Latex>
        </div>
    )
}