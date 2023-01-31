import Header from "../../components/Header";

import { useMediaQuery } from "react-responsive";

import styles from "./PersonPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchPerson } from "../../store/UserSlice";
import { useParams } from "react-router-dom";

const PersonPage = (): JSX.Element => {
  const description = "Партнет";
  const mediaQwery = useMediaQuery({ minWidth: 1024 });
  const select = useAppSelector((state) => state.user.personData);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPerson(params.id));
  }, [dispatch, params]);
  return (
    <>
      {!select ? (
        "loading"
      ) : (
        <>
          <Header
            photo={select.data.avatar}
            title={select.data.first_name + " " + select.data.last_name}
            description={description}
            mediaQwery={mediaQwery}
            page={"person"}
          />

          <div className={styles.container}>
            <div className={styles.container__description}>
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты. В работе с клиентами недостаточно просто решить
              конкретную проблему или помочь справиться с трудностями. Не менее
              важно уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно". Помимо разнообразных проектов
              для клиентов финансового сектора, Сорин ведет активную
              предпринимательскую деятельность. Он является совладельцем сети
              клиник эстетической медицины в Швейцарии, предлагающей
              инновационный подход к красоте, а также инвестором других
              бизнес-проектов.
            </div>
            <div className={styles.container__contacts}>
              <div className={styles.container__contacts_con}>
                <img
                  className={styles.icon}
                  src="../img/phone.png"
                  alt="telphone"
                />
                <span>+7 (954) 333-44-55</span>
              </div>
              <div className={styles.container__contacts_con}>
                <img
                  className={styles.icon}
                  src="../img/email.png"
                  alt="email"
                />
                <span>{select.data.email}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PersonPage;
