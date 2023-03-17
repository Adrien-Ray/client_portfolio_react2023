import React, { useState, useEffect } from 'react';

import './CardSlide.css';

function CardSlide(props) { 
    const { list } = props;
    const [count, setCount] = useState(0);
    const [CardSlide__card, setCardSlide__card] = useState('CardSlide__card');
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => (count + 1) % list.length);
            setCardSlide__card(prevState =>
                prevState === "CardSlide__card" ? "CardSlide__card2" : "CardSlide__card"
            );
        }, 8000);
        return () => clearInterval(intervalId);
    }, [list]);

    let actualObj = list[count];
    let actualObjLink = '';
    if (actualObj.project_link !== '') {
        actualObjLink = (
            <div className='button'>
            <div className='button__back'></div>
                <a href={actualObj.project_link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
        );
    }
    let actualObjLinkRepo = '';
    if (actualObj.project_github !== '') {
        actualObjLinkRepo = (
            <div className='button'>
            <div className='button__back'></div>
                <a href={actualObj.project_github} target="_blank" rel="noopener noreferrer">Voir le repository</a>
            </div>
        );
    }

    return (
        <section className='CardSlide'>
            <div className={CardSlide__card}>
                <h2>{actualObj.project_title}</h2>
                <img className={'objFit'+actualObj.project_thumbnail_fit} src={props.folderToUpload+actualObj.project_thumbnail} alt={`présentation du projet ${actualObj.project_title}`} />
                <p>{actualObj.project_context}</p>
                {actualObjLink}
                {actualObjLinkRepo}
            </div>
        </section>
    );
}
export default CardSlide;