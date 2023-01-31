import { FunctionComponent } from "react";

import styles from "./ButtonOut.module.scss";

interface ButtonOutProps {
    mediaQwery: boolean,
}
 
const ButtonOut: FunctionComponent<ButtonOutProps> = (props:ButtonOutProps) => {

  const out=():void=>{
    window.localStorage.clear()
  }
    return ( 
        <>
        {props.mediaQwery ? (
        <button onClick={()=>out()}
         className={styles.btn_out}>Выход</button>
      ) : (
        <img
          onClick={()=>out()}
          className={styles.btn_out_320}
          src="../img/button_header_out.png"
          alt="out_button"
        />
      )} 
      </>
      );
}
 
export default ButtonOut;