import Card from "../Card/Card";
import CardSlide from "../CardSlide/CardSlide";
// import PopupProject from "../PopupProject/PopupProject";
import './ProjectList.css';
const folderToUpload = 'https://portfolio.accesdenied.net/assets/img/upload/';
function ProjectList(props) {
    let projectArray = props.brutData.project;
    projectArray.sort((b, a) => {
        return ('' + a.project_begin).localeCompare(b.project_begin);
      });
    // console.log('props.brutData.project.reverse() : ',  projectArray);
    let list = [];
    for (let index = 0; index < projectArray.length; index++) {
        const element = projectArray[index];
        // list.push(element);
            list.push(
                <Card key={element.project_id} type="project" object={element} folderToUpload={folderToUpload}/>
            )
    }
    return (
        <div className="ProjectList">
            <CardSlide list={projectArray} autherObj={props.autherObj} updateAutherObj={props.updateAutherObj} folderToUpload={folderToUpload} />
            <div className="projectList">
                <h2>mes projets</h2>
                <div className="ProjectList__parentCard">
                    {list}
                </div>
            </div>
        </div>
    )
}

export default ProjectList;