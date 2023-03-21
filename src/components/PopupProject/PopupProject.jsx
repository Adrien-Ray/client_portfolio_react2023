import "./PopupProject.css";
import React, { useState/* , useEffect */ } from 'react';

function PopupProject (props) {
    // props : object={props.object} showPopup={showPopup} setShowPopup={setShowPopup} folderToUpload

    const [unShowPopup, setUnShowPopup] = useState('PopupProject');

    let parentClass;
    (props.showPopup) ? parentClass = "PopupProject" : parentClass = "PopupProject displaynone";

    const setPopupProject = () => {
        setUnShowPopup('PopupProject displaynone');
        setTimeout(() => {
            (props.showPopup) ? props.setShowPopup(false) : props.setShowPopup(true);
            console.log('showPopup', props.showPopup);
        }, 250);
    }

    let displayPtech = "";
    if (props.object.project_specification_tech !== "") {
        displayPtech = (
            <div className="PopupProject__specification_tech">
                <h3>Spécifications techniques</h3>
                <p>{props.object.project_specification_tech}</p>
            </div>
        );
    }

    let displayPfunc = "";
    if (props.object.project_specification_function !== "") {
        displayPfunc = (
            <div className="PopupProject__specification_function">
                <h3>Spécifications fonctionnels</h3>
                <p>{props.object.project_specification_function}</p>
            </div>
        );
    }

    let dateBegin = "";
    if (props.object.project_begin !== "") {
        dateBegin = <p className="date">Debut du projet: {props.object.project_begin}</p>
    }

    let dateEnd = "";
    if (props.object.project_end !== ("" || null)) {
        dateEnd = <p className="date">Fin du projet: {props.object.project_end}</p>
    }

    let linkRepo = "";
    if (props.object.project_github !== "") {
        linkRepo = (
        <a className='PopupProject__buttonLink' href={props.object.project_github} target="_blank" rel="noreferrer">
            <div className="backLayer"></div>
            <div className="content">lien repository</div>
        </a>
        );
    }
    let linkProject = "";
    if (props.object.project_link !== "") {
        linkProject = (
        <a className='PopupProject__buttonLink' href={props.object.project_link} target="_blank" rel="noreferrer">
            <div className="backLayer"></div>
            <div className="content">lien projet</div>
        </a>
        );
    }

    return (
        <div className={unShowPopup}>

            <div className='PopupProject__buttonClose' onClick={() => setPopupProject(props.setShowPopup)}>
                <div className="backLayer"></div>
                <div className="content">Fermer</div>
            </div>

            <h2 className="PopupProject__title">{props.object.project_title}</h2>
            <div className="PopupProject__links">
                {linkRepo}
                {linkProject}
            </div>
            {dateBegin}
            {dateEnd}
            <img className="PopupProject__thumbnail" src={props.folderToUpload+props.object.project_thumbnail} alt="présentation du projet" />
            <p>{props.object.project_context}</p>
            {displayPtech}
            {displayPfunc}
        </div>
        
    )
}

export default PopupProject;