import { ResumeData } from './ClientImports'

export const Resume: ResumeData = {
    education: {
        title: 'Education',
        cards: [
            {
                title: "Bachelor's Degree",
                headContent: {
                    type: 'iconBullet',
                    items: [
                        { text: 'Computer Science', icon: 'computer' },
                        { text: 'University of Iowa', icon: './img/IowaLogo.svg' },
                        { text: '2018-2022', icon: './img/FourYears.svg' }
                    ]
                }, 
                bodyContent: {
                    type: 'iconBullet',
                    title: 'Electives',
                    items: [
                        {text: 'Software Engineering', icon: 'architecture'},
                        {text: 'Cloud Computing', icon: 'thunderstorm'},
                        {text: 'Graphic Design I - IV', icon: 'brush'},
                        {text: '3D Design', icon: 'view_in_ar'},
                        {text: 'Independent Study', icon: 'rib_cage'},
                        {text: 'Marching Band x4', icon: 'music_note'}
                    ]
                }
            }, {
                title: 'Independent Study',
                headContent: {
                    type: 'paragraph',
                    item: 'Developed a front-end user experience for medical image classification.'
                }
            }
        ]
    },
    workExperience: {
        title: 'Work Experience',
        cards: [
            {
                title: `Full Stack Software Engineer`,
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: "Source North America", icon: './img/SourceLogo.png'},
                        {text: 'January 2023 - October 2026', icon: 'calendar_month'},
                        {text: 'Addison, IL', icon: 'location_on'}
                    ]
                },
                bodyContent: {
                    type: 'paragraph',
                    item: "Built configuration software from scratch, integrating it with SAP and an in-house ERP system.\nHand-wrote and optimized several gradient descent algorithms for R&D."
                }
            },
            {
                title: 'Co-Founder & Full Stack Developer',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'ParallaxID', icon: './img/PXLogo.svg'},
                        {text: 'July 2017 - Present', icon: 'calendar_month'},
                        {text: 'Lombard, IL', icon: 'location_on'}
                    ]
                },
                bodyContent: {
                    type: 'paragraph',
                    item: "Co-founded an identity startup pairing mobile apps with custom hardware; the core design is patented.\nBuilt the mobile apps and the Google Cloud Platform backend.\nPart-time alongside other roles; on hold pending hardware funding."
                }
            },
            
            {
                title: 'Coding Instructor',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'iDTech', icon: './img/iDTechLogo.svg'},
                        {text: 'June 2020 - Aug. 2022', icon: 'calendar_month'},
                        {text: 'Zoom', icon: 'location_on'}
                    ]
                },
                bodyContent: {
                    type: 'paragraph',
                    item: "Instructed more than 60 classes for elementary through high school-age youth on Java programming and modding Minecraft. Classes were taught via Zoom."
                }
            },
            {
                title: 'Junior Software Dev.',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Gear Commerce', icon: './img/GearCommerceLogo.svg'},
                        {text: 'March 2016 - March 2017', icon: 'calendar_month'},
                        {text: 'Wheaton, IL', icon: 'location_on'}
                    ]
                },
                bodyContent: {
                    type: 'paragraph',
                    item: "Built a VR shopping experience for Samsung Gear VR in Unreal Engine 4 (C++), laying out the UI in a circle around the user and pulling product data from a REST API."
                }
            }
        ]
    },
    skills: {
        title: 'Skills',
        cards: [
            {
                title: 'Languages',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Java', icon: './img/Java.svg'},
                        {text: 'C/C++', icon: './img/CPP.svg'},
                        {text: 'Swift', icon: './img/Swift.svg'},
                        {text: 'JavaScript / TypeScript', icon: './img/Typescript.svg'},
                        {text: 'Rust', icon: './img/Ferris.svg'}
                    ]
                }
            },{
                title: 'Libraries',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Node.js', icon: './img/NodeJs.svg'},
                        {text: 'React', icon: './img/React.svg'},
                        {text: 'Electron', icon: 'desktop_windows'},
                        {text: 'jQuery', icon: './img/jQuery.svg'},
                        {text: 'HTML/CSS', icon: './img/HTML.svg'}
                    ]
                }
            },{
                title: 'Platforms',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Android', icon: './img/Android.svg'},
                        {text: 'iOS', icon: './img/Apple.svg'},
                        {text: 'Windows', icon: './img/Windows.svg'},
                        {text: 'AWS', icon: 'cloud'},
                        {text: 'Docker', icon: 'inventory_2'}
                    ]
                }
            },{
                title: 'Databases',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'SQL', icon: './img/SQL.svg'},
                        {text: 'MongoDB', icon: './img/Mongo.svg'},
                        {text: 'Redis', icon: './img/Redis.svg'},
                    ]
                }
            },{
                title: 'Software',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Git', icon: './img/Git.svg'},
                        {text: 'Unreal Engine', icon: './img/UnrealEngine.svg'},
                        {text: 'Blender', icon: './img/Blender.svg'},
                        {text: 'Houdini', icon: './img/Houdini.svg'},
                    ]
                }
            }
        ]
    },
    extra: [
        {
            title: 'Patents Granted',
            headContent: {
                type: 'paragraph',
                item: "Systems and Methods for Providing Identity Information\n\n#US-12008854-B2\n#US-12646366-B2"
            }
        },
        {
            title: 'Projects',
            headContent: {
                type: 'iconBullet',
                items: [
                    {text: 'BigAffogato', icon: './img/CPP.svg'},
                    {text: '2026 - Present', icon: 'calendar_month'}
                ]
            },
            bodyContent: {
                type: 'paragraph',
                item: "A platform for designing and testing crypto trading bots.\nStreams dense time-series market data for high-speed backtesting and statistical analysis."
            }
        }
    ]
}