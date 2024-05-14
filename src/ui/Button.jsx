import { Link } from "react-router-dom";
import styles from "../assets/css/button.module.css";

const Button = (props) => {
  const {url, img, text,type} = props
  
  return (
    <Link to={url}>
      <button onClick={props.handleEvent} type={type} className={styles.button_styledbutton} >
        <img src={img} border="0"/>
        {text}
      </button>
    </Link>
  )
}

export default Button; 