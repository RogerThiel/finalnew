import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import Logo from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import styles from "../assets/css/login.module.css";
import stage from "../assets/elements/Bühne_final.png";


const Login = () => {

  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + "/user");

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  // useEffect(() => {
  //   if (backendFetchResult?.length > 0) {
  //     setUser(backendFetchResult);
  //   }
  // }, [backendFetchResult]);


  const handleLogin = (e) => {
    e.preventDefault();

  fetch(import.meta.env.VITE_SERVER_URL + '/user/2')
      .then(response => response.json())
      .then(data => {setUser(data[0]);
        navigate("/dashboard");}
      )
      .catch(error => console.error('Error:', error));


  }

  return (
    <>
    <div className={styles.login}>
        <div className={styles.container}>
        <form className={styles.wrapper}>
            <div className={styles.header}>
              <img src={Logo} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.inputs}>
                <input type="text" placeholder="Benutzername" className={styles.styledinput} />
                <input type="password" placeholder="Passwort" className={styles.styledinput} />
              </div>
              <div>
              <Button type="submit" handleEvent={handleLogin} text="Login" url="/dashboard"/>
              </div>
              <div className={styles.line}></div>
              <div className={styles.bereitsreg}>
                <span className={styles.first}>Du hast noch keinen Account?</span>
                <a href="/register">
                  <span className={styles.reg}>Registrieren</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>


          {/* <div className={styles.login}>
            <div className={styles.blur}></div>
            <div className={styles.container}>
              <form onSubmit={handleLogin} className={styles.wrapper}>
                <div className={styles.header}>
                  <span className={styles.h1}>Login</span>
                  <div>
                    <span className={styles.h2}> Bitte log dich mit deinen Account ein
                    <input type="text" className={styles.styledinput} />
                    <br />
                    <input type="text" className={styles.styledinput} />
                    <br />
                    <button className={styles.styledbutton} >Login</button>
                    <br />
                    <br />
                    <div className={styles.line}></div>
                    <br />
                    <div className={styles.bereitsreg}>
                      <span className={styles.first}>Du hast noch keinen Account?</span>
                      <a href="/register">
                        <span className={styles.reg}>Registrieren</span>
                      </a>
                    </div>
                  </span>
                  </div>
                  </div>
              </form>
            </div>
        </div> */}
    
  </>
  );
};

export default Login;


