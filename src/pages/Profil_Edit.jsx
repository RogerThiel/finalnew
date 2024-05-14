import React, { useEffect, useState } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Logo from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/profil_edit.module.css";
import stage from "../assets/elements/Bühne_final.png";


const Profil_Edit = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState("");
  const [currentUser, setCurrentuser] = useState("");
  const [user_name, setUserName] = useState("");
  const [passwort, setPasswort] = useState("");
  const [email, setEmail] = useState("");
  const [urlaubstage, setUrlaubstage] = useState("");
  const [budget, setBudget] = useState("");
  const [avatar_link, setAvatarLink] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
      console.log('User', user);
      console.log('CurrentUser', currentUser);

  }); 

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL + '/user/' + id)
      .then(response => response.json())
      .then((data) => {setCurrentuser(data[0]);
                       setUser(data[0])})
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => { 
    setBackgroundImage(Background);
  }, []);

  // const updateUser = () => {
  //   useEffect(() => {
  //   setUserName(currentUser.user_name);
  //   console.log(user_name);
  //   setPasswort(currentUser.passwort);
  //   setEmail(currentUser.email);
  //   setUrlaubstage(currentUser.urlaubstage);
  //   setBudget(currentUser.budget);
  //   setAvatarLink(currentUser.avatar_link);
  // }, []);


// useEffect(() => {
//     updateUser();
// }, []);

  


  const handleProfile_Edit = (e) => {
    e.preventDefault();
    const userData = {
      user_name,
      passwort,
      email,
      urlaubstage,
      budget,
      avatar_link
    };

    updateForm();

    // fetch(import.meta.env.VITE_SERVER_URL + '/user/' + id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   navigate("/dashboard");
    //   console.log('Server response:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  };

  // function updateForm(){
  //   fetch(import.meta.env.VITE_SERVER_URL + '/user/' + id, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(currentUser)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setUser(data.user);
  //     console.log('Server response:', data);
  //   }) 
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });


    function updateForm(){
      fetch(import.meta.env.VITE_SERVER_URL + '/user/' + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUser)
      })
      .then(response => response.json())
      .then(data => {
        setUser(data.user);
        navigate("/dashboard");
        console.log('Server response:', data);
      }) 
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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
                <input type="text" placeholder="Benutzername" className={styles.styledinput} value={currentUser.user_name} onChange={(e) => setCurrentuser({ ...currentUser, user_name: e.target.value})} />
                <input type="password" placeholder="Passwort" className={styles.styledinput} value={currentUser.passwort} onChange={(e) => setCurrentuser({ ...currentUser, passwort: e.target.value})} />
                <input type="email" placeholder="Email" className={styles.styledinput} value={currentUser.email} onChange={(e) => setCurrentuser({ ...currentUser, email: e.target.value})} />
                <input type="number" placeholder="Urlaubstage" className={styles.styledinput} value={currentUser.urlaubstage} onChange={(e) => setCurrentuser({ ...currentUser, urlaubstage: e.target.value})} />
                <input type="number" placeholder="Budget (optional)" className={styles.styledinput} value={currentUser.budget} onChange={(e) => setCurrentuser({ ...currentUser, budget: e.target.value})} />
                <input type="text" placeholder="Avatar Link (optional)" className={styles.styledinput} value={currentUser.avatar_link} onChange={(e) => setCurrentuser({ ...currentUser, avatar_link: e.target.value})} />
              </div>
              {/* <button className={styles.styledbutton} onClick={handleRegister}>Register</button> */}
              <div className={styles.line}></div>
              <div>
                <Button type="submit"  handleEvent={handleProfile_Edit} text="Änderungen speichern" url="/dashboard"/>
              </div>
              
              
              
              
            </div>
          </form>
        </div>
      </div>
    
    </>

    
  );
};

export default Profil_Edit;