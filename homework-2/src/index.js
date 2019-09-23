import React from 'react';
import ReactDom from 'react-dom';
import { Developer } from './developer';
import './style.css';

const user_1 = new Developer('Ivan', 'Ivanov', 31, 'Frontend');
const user_2 = new Developer('Sergey', 'Sergeevich', 24, 'Desigп');
const user_3 = new Developer('Vitaliy', 'Vitalivich', 42, 'Backend');

const employeeManager = [user_1 , user_2, user_3];


ReactDom.render(
    employeeManager.map(item => item.displayInfo() ).join(' '),
    document.querySelector('#list')
)

