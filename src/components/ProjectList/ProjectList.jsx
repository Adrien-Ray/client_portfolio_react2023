import Card from "../Card/Card";
import './ProjectList.css';

function ProjectList(props) {
    let list = [];
    for (let index = 0; index < props.brutData.project.length; index++) {
        const element = props.brutData.project[index];
        list.push(
            <Card type="project" object={element}/>
        )
    }
    return (
        <div className="ProjectList">
            <h1>ProjectList</h1>
            <div className="ProjectList__parentCard">
                {list}
            </div>
            {/* <p>{JSON.stringify(props.brutData)}</p> */}
        </div>
    )
}

export default ProjectList;