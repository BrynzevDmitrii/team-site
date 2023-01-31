import { FunctionComponent } from "react";
import ButtonOut from "../ButtonOut";
import styles from "./PersonContent.module.scss";

interface PersonContentProps {
  title: string;
  description: string;
  mediaQwery: boolean;
  photo?: string;
}

export const PersonContent: FunctionComponent<PersonContentProps> = (
  props: PersonContentProps
) => {
  return (
    <>
      <div className={styles.content}>
        {props.mediaQwery ?
        (<button
         onClick={()=>{window.history.back()}}
         className={styles.content__btn_back}>Назад</button>)
        :(<img
            onClick={()=>{window.history.back()}}
            className={styles.content__btn_back_320}
            src="../img/arrowBack.png"
            alt="back_button"
          />)
        }
        <img className={styles.content__avatar} src={props.photo ?? "../img/userDefault.jpg"} alt="userAva" />
        <div className={styles.content__user}>
          <h1 className={styles.content__title}>{props.title}</h1>
          <span className={styles.content__span}>{props.description}</span>
        </div>
      </div>
      <ButtonOut mediaQwery={props.mediaQwery} />
    </>
  );
};
