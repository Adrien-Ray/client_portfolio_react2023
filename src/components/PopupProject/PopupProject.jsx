import "./PopupProject.css";
import React, { useState/* , useEffect */ } from 'react';

function PopupProject (props) {
    // props : object={props.object} showPopup={showPopup} setShowPopup={setShowPopup}
    let parentClass;
    (props.showPopup) ? parentClass = "PopupProject" : parentClass = "PopupProject displaynone";

    const setPopupProject = () => {
        (props.showPopup) ? props.setShowPopup(false) : props.setShowPopup(true);
        console.log('showPopup', props.showPopup);
    }

    return (
        <div className={parentClass}>
            <div className='PopupProject__buttonClose' onClick={() => setPopupProject(props.setShowPopup)}>
                Fermer
            </div>
            <h1>PopupProject {props.object.project_title}</h1>
        </div>
        
    )
}

export default PopupProject;