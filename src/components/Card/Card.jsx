import './Card.css';

function Card(props) {
    // props: type (project or article) and object
    let title;
    if (props.type === "project") {
        title = props.object.project_title;
    } else {
        
    }
    return (
            <div className="Card">
                <h2>{title}</h2>
            </div>
    )
}

export default Card;