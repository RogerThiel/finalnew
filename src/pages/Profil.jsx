import { useEffect } from "react";
import { useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import ProfilButton from '../assets/icons/electric.png';
import Background from '../assets/background/Background_Strand.png';
import styles from "../assets/css/profil.module.css";
import HomeButton from '../assets/icons/Logo.png';
import stage from "../assets/elements/Bühne_final.png";


function Profil() {

  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);

  const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + "/user");

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  useEffect(() => {
    if (backendFetchResult?.length > 0) {
      setUser(backendFetchResult);
    }
  }, [backendFetchResult]);

  return (
    <>
      <div className={styles.profil}>
        <div className={styles.profil_container}>
          <div className={styles.profil_wrapper}>
            <div className={styles.profil_header}>
              <img src={HomeButton} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
              <div>
                <h2>Placeholder</h2>
                <h2>Placeholder</h2>
                <h2>Placeholder</h2>
              </div>
            </div>
            <div className={styles.profil_addEvent}>
              <Button url="/profil_edit" text="Editieren" />
            </div>
            
            <div className={styles.profil_main}> {/* TODO */}
                <div className={styles.line}></div>
              
            
            <div>
              <div className={styles.profil_UserStatus}>
                <h1> Placeholder</h1>
                <p>Placeholder</p>
              </div>
              <div className={styles.profil_UserStatus}>
                <h1>Placeholder</h1>
                <p>Placeholder</p>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
export default Profil;