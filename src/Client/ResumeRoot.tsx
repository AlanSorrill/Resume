import React from 'react'
import { Center, HR_Card, HR_Padding, HR_Section, MR_Card, MR_Section, Resume } from './ClientImports';
import { Paper } from './Components/LetterPaper';
import { Colors } from './Helpers';



export interface ResumeRoot_Props { }
export interface ResumeRoot_State { }
export class ResumeRoot extends React.Component<ResumeRoot_Props, ResumeRoot_State>{
    constructor(props: ResumeRoot_Props) {
        super(props);
    }

    mrORder: Array<keyof typeof Resume> = ['education', 'skills', 'workExperience', 'generalWorkExperience', 'extra']

    render() {
        let ths = this;
        return <div style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 13, display: 'flex' }}>
            <Paper style={{ backgroundColor: Colors.background, flexDirection: 'column', display: 'flex', }} >
                <div style={{ display: 'flex', padding: HR_Padding * 2 }}>
                    <Center direction='horizontal' style={{ width: '25%' }}>
                        <Center direction={'vertical'}><img src="./img/CoffeeAndCode.svg" style={{ height: 35 }} /></Center>
                    </Center>
                    <div style={{ flexGrow: 1 }} />
                    <img src="./img/NameTag.svg" style={{ height: 73 }} />
                </div>
                <div style={{ display: 'flex', paddingLeft: HR_Padding, paddingRight: HR_Padding, flexGrow: 1 }}>
                    <div style={{ flexGrow: 1, width: '25%' }}>
                        <HR_Section section={Resume.education} />
                    </div>
                    <div style={{ flexGrow: 1, width: '50%' }}>
                        <HR_Section section={Resume.workExperience} />
                        <div style={{ height: HR_Padding  }} key='spacer' />
                        <HR_Section section={Resume.generalWorkExperience} />
                    </div>
                    <div style={{ flexGrow: 1, width: '25%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <HR_Section key='skills' section={Resume.skills} />
                        <div key='flexGrow' style={{ flexGrow: 1 }} />
                        {Resume.extra.map((card, id) => (<HR_Card cardData={card} key={'xtra' + id} />))}
                        <div style={{ height: HR_Padding  }} key='bottomMargin' />
                    </div>
                </div>
            </Paper>
            <Paper style={{ backgroundColor: '#ebe1c6' }}>
                {this.mrORder.map((key, index) => {
                    let item = Resume[key]
                    if (Array.isArray(item)) {
                        return item.map((card) => (<MR_Card cardData={card} />))
                    }
                    return <MR_Section section={item} />
                })} 
            </Paper> 
        </div>
    }
}