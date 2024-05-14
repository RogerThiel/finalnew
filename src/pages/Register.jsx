import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Logo from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/register.module.css";
import stage from "../assets/elements/Bühne_final.png";


const Register = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState(null);
  const [user_name, setUserName] = useState("");
  const [passwort, setPasswort] = useState("");
  const [email, setEmail] = useState("");
  const [urlaubstage, setUrlaubstage] = useState("");
  const [budget, setBudget] = useState("");
  const [avatar_link, setAvatarLink] = useState("");
  const [newUser, setNewUser] = useState([]);
  const navigate = useNavigate();

  // const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + '/user');

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  // useEffect(() => {
  //   if (backendFetchResult?.length > 0) {
  //     setUser(backendFetchResult);
  //   }
  // }, [backendFetchResult]);

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      user_name,
      passwort,
      email,
      urlaubstage,
      budget,
      avatar_link
    };

    fetch(import.meta.env.VITE_SERVER_URL + '/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      
      setNewUser(data[0].user_id);
      navigate("/dashboard/user/" + data[0].user_id);
      console.log('Server response:', data);
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  };

  return (

    <>
    <div className={styles.register}>
        <div className={styles.register_container}>
        <form className={styles.register_wrapper}>
            <div className={styles.register_header}>
              <img src={Logo} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
            </div>
            <div className={styles.register_main}>
              <div className={styles.register_inputs}>
                <input type="text" placeholder="Benutzername" className={styles.styledinput} value={user_name} onChange={(e) => setUserName(e.target.value)}  />
                <input type="password" placeholder="Passwort" className={styles.styledinput} value={passwort} onChange={(e) => setPasswort(e.target.value)}  />
                <input type="email" placeholder="Email" className={styles.styledinput} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder="Urlaubstage" className={styles.styledinput} value={urlaubstage} onChange={(e) => setUrlaubstage(e.target.value)} />
                <input type="number" placeholder="Budget (optional)" className={styles.styledinput} value={budget} onChange={(e) => setBudget(e.target.value)} />
                <input type="text" placeholder="Avatar Link (optional)" className={styles.styledinput} value={avatar_link} onChange={(e) => setAvatarLink(e.target.value)} />
              </div>
              {/* <button className={styles.styledbutton} onClick={handleRegister}>Register</button> */}
              <div>
                <Button type="submit" handleEvent={handleRegister} text="Register" />
              </div>
              
              
              <div className={styles.line}></div>
              <div className={styles.bereitsreg}>
                <span className={styles.first}>Du hast bereits einen Account?</span>
                <a href="/login">
                  <span className={styles.reg}>Einloggen</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    </>

    
  );
};

export default Register;