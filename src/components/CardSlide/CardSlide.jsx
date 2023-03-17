import React, { useState, useEffect } from 'react';

import './CardSlide.css';

function CardSlide(props) { 
    const { list } = props;
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => (count + 1) % list.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [list]);

    let actualObj = list[count];
    let actualObjLink = '';
    if (actualObj.project_link != '') {
        actualObjLink = (
            <div className='button'>
            <div className='button__back'></div>
                <a href={actualObj.project_link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
        );
    }

    return (
        <div className="CardSlide">
            <h2>{actualObj.project_title}</h2>
            <img className={'objFit'+actualObj.project_thumbnail_fit} src={props.folderToUpload+actualObj.project_thumbnail} alt={`présentation du projet ${actualObj.project_title}`} />
            <p>{actualObj.project_context}</p>
            {actualObjLink}
        </div>
    );
}
export default CardSlide;