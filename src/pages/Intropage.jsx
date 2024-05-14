import { useEffect } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import Button from "../ui/Button.jsx";
import Logo from '../assets/icons/Logo.png';
import LoginButton from '../assets/icons/electric.png';
import Background from '../assets/background/crowd.jpg';

function Intropage() {

  const { setBackgroundImage } = useBackgroundImage();

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

return (
  <div className="intropage">
    <img src={Logo} alt="Background" />
    <div>
      <Button className="login-button" img={LoginButton} url="/login"/>
      </div>
  </div>
);
}

export default Intropage;