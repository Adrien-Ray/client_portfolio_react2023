import './Card.css';

const folderToUpload = 'https://portfolio.accesdenied.net/assets/img/upload/'

function Card(props) {
    // props: type (project or article) and object
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
                <h2>{title}</h2>
                <img
                    src={imgSrc}
                    alt={'thumbnail du projet'+title}
                    className={classThumb}
                />
            </a>
    )
}

export default Card;