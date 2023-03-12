import React, { useState, useEffect } from 'react';

import './CardSlide.css';

function CardSlide(props) { 
    const { list } = props;
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => (count + 1) % list.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [list]);

    let actualObj = list[count];

    return (
        <a className="CardSlide" href={actualObj.project_link}>
            <img className={'objFit'+actualObj.project_thumbnail_fit} src={props.folderToUpload+actualObj.project_thumbnail} alt={`présentation du projet ${actualObj.project_title}`} />
            <h2>
                {count} {actualObj.project_title}
            </h2>
        </a>
    );
}
export default CardSlide;