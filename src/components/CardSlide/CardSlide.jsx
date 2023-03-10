import './CardSlide.css';

function CardSlide(props) {
    // list={projectArray} autherObj={props.autherObj} updateAutherObj={props.updateAutherObj}
    let count = 0;
    let TheDom = (
        <a className="CardSlide">
            <h2>{props.autherObj.count}</h2>
        </a>
    );
    setInterval(() => {
        count += 1;
        console.log(count);
        props.updateAutherObj(
            {
                count,
            }
        )
    }, 500);
    return (
        TheDom
    )
}
export default CardSlide;