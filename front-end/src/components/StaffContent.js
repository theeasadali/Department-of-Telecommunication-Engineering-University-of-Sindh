import EventCard from "./EventCard";
import imgForCard from '../assets/img/hero.jpg';

const StaffContent = () => {
    return (
        <div className="w-25">
            <EventCard cardTitle="Uzair KK" cardContent="Clerk" cardImage={imgForCard}/>
        </div>
    )
}

export default StaffContent
