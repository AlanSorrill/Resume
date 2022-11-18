import React from 'react';
import {createRoot} from 'react-dom/client'
import { ResumeRoot } from './ClientImports';

let divv = document.getElementById('reactContainer');
let root = createRoot(divv)
root.render(<ResumeRoot />)