import React, {createContext} from 'react'

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    const ProjectData = [
        {
            id:1,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171313/solar/WhatsApp_Image_2023-12-21_at_8.38.05_PM_t7ys1t.jpg',
            name:'Weather API',
            description:'Implemented a Weather API using Node.js and Open Weather API offering real-time weather data retrieval.' 
        },
        {
            id:2,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043968/creation%20ai/peakpx_4_dmxfry.jpg',
            name:'Face Mask Detection',
            description:'Developed and deployed a Face Mask Detection system using Convolutional Neural Networks (CNN) and TensorFlow. Trained on a Kaggle dataset, showcasing expertise in computer vision and deep learning.' 
        },
        {
            id:3,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177838/ayurveda/WhatsApp_Image_2023-11-05_at_2.10.26_PM_peoghr.jpg',
            name:'Ayurveda Bot',
            description:'Developed Ayureasy bot with personalized Ayurvedic insights using a custom dataset and Roberta LLM, and implemented a user-friendly interface with Streamlit.' 
        },
        {
            id:4,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_8_e2uxtl.jpg',
            name:'Company Annual Report Q&A Bot',
            description:'Crafted and executed the development of an innovative Annual Report Question and Answer Bot leveraging cutting-edge technology. Seamlessly integrating the power of GPT-3.5 for Language Model capabilities and ChromaDB for efficient Vector Database management, the solution revolutionized stakeholder engagement.' 
        },
        {
            id:5,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1694003474/dragonresort/peakpx_5_cobcnp.jpg',
            name:'Resort Website',
            description:'I created a beautiful Resort website frontend using React.js and bootstrap, showcasing a seamless user experience and modern design aesthetics.' 
        },
        {
            id:6,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1699177817/ayurveda/WhatsApp_Image_2023-11-05_at_2.23.04_PM_rtyomn.jpg',
            name:'Ayurveda Shopping Website',
            description:'Developed a user-friendly e-commerce platform using React JS for Ayurvedic products, including foods, drinks, and medicines. Demonstrated technical proficiency, creativity, and attention to detail in enhancing user experience and driving engagement.' 
        },
        {
            id:7,
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_3_soorm1.jpg',
            name:'Creation AI',
            description:'Innovative creator behind CREATION AI, a cutting-edge platform harnessing Huggingface AI models and React JS for user-friendly content creation tools. Revolutionizing the industry by automating tasks such as Text-To-Audio, Song Generation, Story Generation, Text-To-Video, and Text-To-Image. Enabling content creators to save time and reduce operational costs through efficient automation.' 
        },
    ]
    return (
        <ProjectContext.Provider value={ProjectData}>
            {props.children}
        </ProjectContext.Provider>
    )
}