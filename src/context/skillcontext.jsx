import React, {createContext} from 'react'

export const SkillContext = createContext();

export const SkillProvider = (props) => {
    const SkillData = [
        {
            id:1,
            name:'Java',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667670/portfolio/1200px-Java_programming_language_logo.svg_wa8etx.png'
        },
        {
            id:2,
            name:'Python',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667779/800px-Python-logo-notext.svg_yytdva.png'
        },
        {
            id:3,
            name:'JavaScript',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667798/JavaScript-Tutorial_xe5in7.svg'
        },
        {
            id:4,
            name:'HTML',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667813/HTML5_logo_and_wordmark_ap965d.svg'
        },
        {
            id:5,
            name:'CSS',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667824/1200px-CSS3_logo_and_wordmark.svg_ooydhs.png'
        },
        {
            id:6,
            name:'React JS',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667843/1_WA_9JsyqFkge2HwYKcdJQw_jubmnb.png'
        },
        {
            id:7,
            name:'Flask',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712667872/flask-logo-version-2_sd2wra.png'
        },
        {
            id:8,
            name:'Node JS',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668089/1200px-Node.js_logo.svg_mkvgjp.png'
        },
        {
            id:9,
            name:'SQL',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668130/Sql_data_base_with_logo_csavlj.png'
        },
        {
            id:10,
            name:'Power BI',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668155/powerbi_20logo_201_ms5dpq.png'
        },
        {
            id:11,
            name:'Pandas',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668173/2560px-Pandas_logo.svg_hnbcwp.png'
        },
        {
            id:12,
            name:'Keras',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668210/keras-logo-2018-large-1200_dtagbg.png'
        },
        {
            id:13,
            name:'Matplotlib',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668226/68747470733a2f2f6d6174706c6f746c69622e6f72672f5f7374617469632f6c6f676f322e737667_p1txu4.svg'
        },
        {
            id:14,
            name:'Scikit-Learn',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668250/2560px-Scikit_learn_logo_small.svg_yjc3t2.png'
        },
        {
            id:15,
            name:'Bootstrap',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668283/bootstrap-logo_zwdp51.svg'
        },
        {
            id:16,
            name:'Material UI',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712668312/logo_raw_ahgdo3.svg'
        },
        {
            id:17,
            name:'Numpy',
            im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712669214/logo_ppfrom.svg'
        },
    ]
    return (
        <SkillContext.Provider value={SkillData}>
            {props.children}
        </SkillContext.Provider>
    )
}