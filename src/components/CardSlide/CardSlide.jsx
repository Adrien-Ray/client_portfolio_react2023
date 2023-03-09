import './CardSlide.css';

function CardSlide(props) {
    let count = 0;
    let TheDom = (
        <a className="CardSlide">
            <h2>{count}</h2>
        </a>
    );
    setInterval(() => {
        count += 1;
        console.log(count);
    }, 500);
    return (
        TheDom
    )
}
export default CardSlide;