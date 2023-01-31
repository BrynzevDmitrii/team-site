import { FunctionComponent } from "react";

import { clsx } from "clsx";

import styles from "./UserCard.module.scss";

interface UserCardProps {
  openPopup: (bool: boolean) => void;
  id: string;
  avatar?: string;
  fullName: string;
  isLike?: boolean;
  isAuth: boolean;
}

const UserCard: FunctionComponent<UserCardProps> = (
  props: UserCardProps
): JSX.Element => {
  const castomAlert = (isAuth: boolean): void => {
    if (!isAuth) {
      props.openPopup(true);
    } else {
      return;
    }
  };
  

  return (
    <div className={styles.card}>
      <a
        onClick={() => castomAlert(props.isAuth)}
        className={styles.card__href}
        href={props.isAuth ? `/person/${props.id}` : "#"}
      >
        <img
          className={styles.card__avatar}
          src={props.avatar ?? "../img/userDefault.jpg"}
          alt="avatar"
        />
      </a>

      <span className={styles.card__name}>{props.fullName}</span>
      <div className={styles.card__like}>
        <img
          src="./img/like.svg"
          className={clsx(props.isLike ? styles.card__liked : "")}
          alt="like_icon"
        />
      </div>
    </div>
  );
};

export default UserCard;
