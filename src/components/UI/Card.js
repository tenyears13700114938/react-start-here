import './Card.css'

function Card(props) {
    const cssClass = 'Card ' + props.className;
    return (
        <div className={cssClass}>
            {props.children}
        </div>
    );
}

export default Card;