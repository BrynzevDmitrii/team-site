import Header from "../../components/Header";

import { useMediaQuery } from "react-responsive";
import UserCard from "../../components/UserCard";

import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { fetchLoadMore, fetchUsers } from "../../store/UserSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import CastomAlert from "../../components/CastomAlert";

const title = "Наша Команда";
const description = "Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. ";

const Home = (): JSX.Element => {
  const [visibility, setVisibility] = useState(false);

  const isAuth = Boolean(window.localStorage.getItem('token'));
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.user.data);
  const mediaQwery = useMediaQuery({ minWidth: 1024 });

  const openAlert = (bool:boolean)=>{
    setVisibility(bool)
  }

  const onClose = (b:boolean):void=>{
    setVisibility(b)
  }

  useEffect(() => {
    dispatch(fetchUsers(undefined));
  }, [dispatch]);

  return (
    <>
      <Header
        title={title}
        description={description}
        mediaQwery={mediaQwery}
        page={"home"}
      />
      <div className={styles.container}>
        <div className={styles.main}>
          {selector.map((user, ind) => {
            return (
              <UserCard
                isAuth={isAuth}
                id={user.id}
                key={ind + user.id}
                avatar={user.avatar}
                fullName={user.first_name}
                openPopup={ openAlert } />
            );
          })}
          <CastomAlert show={visibility} onClose={onClose}  />
        </div>
        <div className={styles.main__btn}>
          <button onClick={()=>dispatch(fetchLoadMore(3))} className={styles.main__more}> Показать еще </button>
        </div>
      </div>
    </>
  );
};

export default Home;
