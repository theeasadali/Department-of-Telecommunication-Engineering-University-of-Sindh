const EventCard = (props) => {
    return (
        <div className="event-card">
            <div className="card-image-area">
                <img src={props.cardImage} alt={props.cardTitle} />
            </div>
            <div className="event-card-body">
                <h5>{props.cardTitle}</h5>
                <small>{props.cardContent}</small>
            </div>
        </div>
    )
}

export default EventCard
