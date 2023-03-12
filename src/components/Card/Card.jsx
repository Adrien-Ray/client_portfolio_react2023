import './Card.css';

function Card(props) {
    // props: type (project or article) and object
    const folderToUpload = props.folderToUpload;

    let title;
    let link;
    let target;
    let imgSrc;
    let classThumb;
    if (props.type === "project") {
        title = props.object.project_title;
        if (props.object.project_link === "") {
            link = "#";
            target = "";
        } else {
            link = props.object.project_link;
            target = "_blank";
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
            <a href={link} target={target} className="Card">
                <div className="titleLayer">
                    <h2>{title}</h2>
                </div>
                <img
                    src={imgSrc}
                    alt={'thumbnail du projet'+title}
                    className={classThumb}
                />
            </a>
    )
}

export default Card;