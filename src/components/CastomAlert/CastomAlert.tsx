import { useEffect, useState } from "react";
import styles from "./CastomAlert.module.scss";

interface CustomAlertProps {
    show : boolean,
    onClose ? : (arg)=>void,
}

const CustomAlert = (props:CustomAlertProps) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={styles.overlay}
    >
      <div className={styles.popup}>
        <div className={styles.popup__content}>
        <h2  className={styles.popup__h2}>Доступно только зарегистрированным пользователям.</h2>
        <a href={"/registration"} className={styles.popup__button}>зарегистрироваться</a>
        </div>
        <span className={styles.popup__close} onClick={closeHandler}>
          &times;
        </span>
      </div>
    </div>
  );
};


export default CustomAlert;