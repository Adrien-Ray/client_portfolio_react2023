import "./PopupProject.css";
// import React, { useState/* , useEffect */ } from 'react';

function PopupProject (props) {
    // props : object={props.object} showPopup={showPopup} setShowPopup={setShowPopup} folderToUpload
    let parentClass;
    (props.showPopup) ? parentClass = "PopupProject" : parentClass = "PopupProject displaynone";

    const setPopupProject = () => {
        (props.showPopup) ? props.setShowPopup(false) : props.setShowPopup(true);
        console.log('showPopup', props.showPopup);
    }

    return (
        <div className={parentClass}>

            <div className='PopupProject__buttonClose' onClick={() => setPopupProject(props.setShowPopup)}>
                <div className="backLayer"></div>
                <div className="content">Fermer</div>
            </div>

            <h2 className="PopupProject__title">PopupProject {props.object.project_title}</h2>
            <img className="PopupProject__thumbnail" src={props.folderToUpload+props.object.project_thumbnail} alt="présentation du projet" />
            <p>{props.object.project_context}</p>
        </div>
        
    )
}

export default PopupProject;