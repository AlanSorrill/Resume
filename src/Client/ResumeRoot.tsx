import React from 'react'
import { Paper } from './Components/LetterPaper';

export interface ResumeRoot_Props { }
export interface ResumeRoot_State { }
export class ResumeRoot extends React.Component<ResumeRoot_Props, ResumeRoot_State>{
    constructor(props: ResumeRoot_Props) {
        super(props);
    }
    render() {
        return <div>
            <Paper>Good Stuff</Paper>
        </div>
    }
}