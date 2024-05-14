import React, { useEffect, useState } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Logo from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/event_create.module.css";
import stage from "../assets/elements/Bühne_final.png";



import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Event_Create = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);
  const [event_name, setEvent_name] = useState("");
  const [event_ort, setEvent_ort] = useState("");
  const [event_beschreibung_kurz, setEvent_beschreibung_kurz] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [event_genre, setEvent_genre] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  
  
  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL + '/user/' + id)
      .then(response => response.json())
      .then(data => setUser(data[0]))
      .catch(error => console.error('Error:', error));
  }, []);

 

  // const [error, backendFetchResult] = useFetch('https://rocknchill-backend-new-1.onrender.com/user/1');

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  // useEffect(() => {
  //   if (backendFetchResult?.length > 0) {
  //     setUser(backendFetchResult);
      
  //   }
  //   console.log("inside", backendFetchResult);
  // }, [backendFetchResult]);
  // const [user_var] = user; 
  // console.log("outside w User",user_var.user_id);

  // const handleEvent = () => {
  //   const eventData = {
  //     event_name,
  //     event_ort,
  //     event_beschreibung_kurz,
  //     startDate,
  //     endDate,
  //     genre
  //   };



    const handleEvent = (e) => {
      e.preventDefault();
      console.log(user);
      
      

      const user_id = user.user_id;
      const eventData = {
        event_name,
        event_ort,
        event_start:startDate,
        event_ende:endDate,
        event_beschreibung_kurz,
        event_genre,
        user_id
      };

      
        fetch(import.meta.env.VITE_SERVER_URL + '/event', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(eventData)
        })
        .then(response => response.json())
        .then(data => {
          navigate("/dashboard/user/" + data[0].user_id);
          console.log('Server response:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
      };

  return (
    <>
    
    <div className={styles.event_create}>
        <div className={styles.event_create_container}>
        <form className={styles.event_create_wrapper}>
            <div className={styles.event_create_header}>
              <img src={Logo} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
            </div>
            <div className={styles.event_create_main}>
              <div className={styles.event_create_inputs}>
                    <input type="text" className={styles.styledinput} placeholder="Veranstaltung" value={event_name} onChange={(e) => setEvent_name(e.target.value)} />
                    <input type="text" className={styles.styledinput} placeholder="Ort" value={event_ort} onChange={(e) => setEvent_ort(e.target.value)} />
                    <input type="text" className={styles.styledinput} placeholder="Info" value={event_beschreibung_kurz} onChange={(e) => setEvent_beschreibung_kurz(e.target.value)} />
                    <input type="text" className={styles.styledinput} placeholder="Genre" value={event_genre} onChange={(e) => setEvent_genre(e.target.value)} />
                    
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                  <div className={styles.line}></div>
                  <Button type="submit" handleEvent={handleEvent} text="Event Eintragen" url="/dashboard"/>
                  </div>
                 </div> 
              </form>
            </div>
          </div>
            
            
        
        
        
    </>

    
  );
};



export default Event_Create;