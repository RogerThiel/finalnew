import { useState} from "react";


export default function EventListElement({event_name, event_ort, startDate, endDate, id, setEvents}) {

    const removeEvent = (id) => {
        setEvents((prev) =>
          prev.filter((item) => item.id !== id)
        );
      };


    

    return (
        <>
        {/* <li className="li-list-element" > */}
            <ul className="ul-list-element">
                <li className="ul-li-toDo">{event_name}</li>
                <li>{event_ort}</li>
                <li>{startDate}</li>
                <li>{endDate}</li>
            </ul>
            <span className="ul-list-btn">
                <button>Ändern</button>
                <button onClick={() => removeEvent(id)}>Löschen</button>
            </span>
        
        </>
    )
};