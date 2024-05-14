import EventListElement from "./EventListElement.jsx"

const EventList = ({events, setEvents}) => {

    

    return (
        <>
            
            <div className="list">
                <ul className="ul-list-list">
                    {events.map((event) => (
                    <EventListElement 
                    key={event.event_id} 
                    id={event.event_id}
                    event_name={event.event_name}
                    event_ort={event.event_ort}
                    startDate={event.event_start}
                    endDate={event.event_ende}
                    setEvents={setEvents}
                    />
                    ))}
                </ul>
            </div>
        </> 
        )
    };

export default EventList