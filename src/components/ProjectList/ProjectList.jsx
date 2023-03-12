import Card from "../Card/Card";
import CardSlide from "../CardSlide/CardSlide";
import './ProjectList.css';
const folderToUpload = 'https://portfolio.accesdenied.net/assets/img/upload/';
function ProjectList(props) {
    let projectArray = props.brutData.project;
    projectArray.sort((b, a) => {
        return a.project_id - b.project_id;
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
            <div className="ProjectList__parentCard">
                {list}
            </div>
            {/* <p>{JSON.stringify(props.brutData)}</p> */}
        </div>
    )
}

export default ProjectList;