import React from 'react'
import { HR_Card, HR_Padding, HR_Section, MR_Card, MR_Section, Resume } from './ClientImports';
import { Paper } from './Components/LetterPaper';
import { Colors } from './Helpers';



export interface ResumeRoot_Props { }
export interface ResumeRoot_State { }
export class ResumeRoot extends React.Component<ResumeRoot_Props, ResumeRoot_State>{
    constructor(props: ResumeRoot_Props) {
        super(props);
    }

    mrORder: Array<keyof typeof Resume> = ['education', 'skills', 'workExperience', 'extra']

    render() {
        let ths = this;
        // ?view=human shows only the styled resume, ?view=machine only the plain one; anything else shows both.
        const view = new URLSearchParams(window.location.search).get('view');
        const showHuman = view !== 'machine';
        const showMachine = view !== 'human';
        return <div style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 13, display: 'flex' }}>
            {showHuman && <Paper style={{ backgroundColor: Colors.background, flexDirection: 'column', display: 'flex', }} >
                <div style={{ display: 'flex', padding: HR_Padding, flexGrow: 1 }}>
                    <div style={{ flexGrow: 1, width: '25%' }}>
                        <HR_Section section={Resume.education} />
                        {Resume.extra.map((card, id) => (<HR_Card cardData={card} key={'xtra' + id} />))}
                    </div>
                    <div style={{ flexGrow: 1, width: '50%' }}>
                        <HR_Section section={Resume.workExperience} />
                    </div>
                    <div style={{ flexGrow: 1, width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div key='contact' style={{ margin: HR_Padding, padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', color: Colors.contactText, fontSize: 10, lineHeight: '12px' }}>
                            <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '24px', marginBottom: 4 }}>Alan Sorrill</div>
                            <div>alan.sorrill@gmail.com</div>
                            <div>Glen Ellyn IL, 60137</div>
                            <div><span style={{ color: Colors.contactMuted }}>(</span>630<span style={{ color: Colors.contactMuted }}>)</span> 890<span style={{ color: Colors.contactMuted }}>-</span>5640</div>
                        </div>
                        <HR_Section key='skills' section={Resume.skills} />
                    </div>
                </div>
            </Paper>}
            {showMachine && <Paper style={{ backgroundColor: '#ebe1c6' }}>
                {this.mrORder.map((key, index) => {
                    let item = Resume[key]
                    if (Array.isArray(item)) {
                        return item.map((card) => (<MR_Card cardData={card} />))
                    }
                    return <MR_Section section={item} />
                })}
            </Paper>}
        </div>
    }
}