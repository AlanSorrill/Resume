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
                title: "High School Diploma",
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Wheaton North', icon: './img/WheatonNorth.svg'},
                        {text: '2014-2018', icon: './img/FourYears.svg'},
                    ]
                },
                bodyContent: {
                    type: 'iconBullet',
                    title: 'Electives',
                    items: [
                        {text: 'AP Computer Science', icon: 'memory'},
                        {text: 'AP Physics', icon: 'sports_handball'},
                        {text: 'Marching Band x4', icon: 'music_note'}
                    ]
                }
            }
        ]
    },
    workExperience: {
        title: 'Work Experience',
        cards: [
            {
                title: 'Full Stack Developer',
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
                    item: "I am the full stack developer for a program involving mobile apps, and a backend which interacts with custom hardware, which is currently patent pending. This project utilizes modern user interfaces and backend development services on the Google Cloud Platform."
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
                    item: "I have instructed more than 60 classes for elementary through high school-age youth on Java programming and modding Minecraft. Classes were instructed via Zoom due to COVID."
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
                    item: "I have instructed more than 60 classes for elementary through high school-age youth on Java programming and modding Minecraft. Classes were instructed via Zoom due to COVID."
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
                    item: "I built a robust 3D UI that pulled data from a REST API for an e-commerce company wishing to provide customers with a virtual reality shopping experience."
                }
            }
        ]
    },
    generalWorkExperience: {
        title: 'General Work Experience',
        cards: [
            {
                title: 'Nanny',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'July 2022 - Present', icon: 'calendar_month'},
                        {text: 'Mahomet, IL', icon: 'location_on'}
                    ]
                }
            },
            {
                title: 'LineCook',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Tiki Tacos', icon: './img/Tiki.svg'},
                        {text: 'April 2021 - July 2022', icon: 'calendar_month'},
                        {text: 'Mahomet, IL', icon: 'location_on'}
                    ]
                }
            },
            {
                title: 'Dining Associate',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Catlett Dining Hall', icon: './img/IowaLogo.svg'},
                        {text: 'Jan. 2019 - Aug. 2020', icon: 'calendar_month'},
                        {text: 'Iowa City, IA', icon: 'location_on'}
                    ]
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
                        {text: 'Javascript / Typescript', icon: './img/Typescript.svg'},
                        {text: 'Haskell', icon: './img/Haskell.svg'}
                    ]
                }
            },{
                title: 'Libraries',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Node', icon: './img/NodeJs.svg'},
                        {text: 'React', icon: './img/React.svg'},
                        {text: 'JQuery', icon: './img/jQuery.svg'},
                        {text: 'HTML/CSS', icon: './img/HTML.svg'},
                        {text: 'Android', icon: './img/Android.svg'},
                        {text: 'iOS', icon: './img/Apple.svg'}
                    ]
                }
            },{
                title: 'Databases',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'SQL', icon: './img/SQL.svg'},
                        {text: 'Mongo', icon: './img/Mongo.svg'},
                        {text: 'Firestore', icon: './img/Firebase.svg'},
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
                        {text: 'Photoshop', icon: './img/Photoshop.svg'},
                        {text: 'Illustrator', icon: './img/AdobeIllustrator.svg'},
                        {text: 'Indesign', icon: './img/Indesign.svg'},
                        {text: 'XD', icon: './img/XD.svg'},
                        {text: 'After Effects', icon: './img/AfterEffects.svg'},
                    ]
                }
            }, {
                title: 'Interpersonal Skills',
                headContent: {
                    type: 'iconBullet',
                    items: [
                        {text: 'Translates Tech Jargon', icon: 'smart_toy'},
                        {text: 'Takes feedback well', icon: 'quick_phrases'},
                        {text: 'Calm Under Pressure', icon: 'self_improvement'},
                        {text: 'Enjoys Group Work', icon: 'groups'},
                        {text: 'Perfers in-person', icon: 'commute'}]
                }
            }
        ]
    },
    extra: [
        {
            title: 'Patents Pending',
            headContent: {
                type: 'paragraph',
                item: "Systems and Methods for Providing Identity Information\n\n#20210134098"
            }
        }
    ]
}