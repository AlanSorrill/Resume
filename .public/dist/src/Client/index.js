import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResumeRoot } from './ResumeRoot';
var divv = document.getElementById('reactContainer');
var root = createRoot(divv);
root.render(React.createElement(ResumeRoot, null));
