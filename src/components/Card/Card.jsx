import './Card.css';
import PopupProject from "../PopupProject/PopupProject";
import React, { useState/* , useEffect */ } from 'react';

function Card(props) {
    // props: type (project or article) and object
    const folderToUpload = props.folderToUpload;

    const [showPopup, setShowPopup] = useState(false);

    const setPopupProject = () => {
        (showPopup) ? setShowPopup(false) : setShowPopup(true);
        console.log('showPopup', showPopup);
    }

    let title;
    let imgSrc;
    let classThumb;
    if (props.type === "project") {
        title = props.object.project_title;
        if (props.object.project_link === "") {
        } else {
        }
        imgSrc = folderToUpload+props.object.project_thumbnail;
        if (props.object.project_thumbnail_fit === 0) {
            classThumb = "";
        } else {
            classThumb = "contain";
        }
    } else {
        
    }

    return (
            <div className="Card">
                <div className="titleLayer">
                    <h2 onClick={() => setPopupProject(setShowPopup)}>{title}</h2>
                </div>
                <img
                    src={imgSrc}
                    alt={'thumbnail du projet'+title}
                    className={classThumb}
                />
                {showPopup && <PopupProject object={props.object} showPopup={showPopup} setShowPopup={setShowPopup}/>}
            </div>
    )
}

export default Card;