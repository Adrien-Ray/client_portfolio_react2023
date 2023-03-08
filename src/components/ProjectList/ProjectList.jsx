function ProjectList(props) {
    let list = [];
    for (let index = 0; index < props.brutData.project.length; index++) {
        const element = props.brutData.project[index];
        list.push(
            <div>
                {element.project_title}
            </div>
        )
    }
    return (
        <div>
            <h1>ProjectList</h1>
            <div>
                {list}
            </div>
            <p>{JSON.stringify(props.brutData)}</p>
        </div>
    )
}

export default ProjectList;