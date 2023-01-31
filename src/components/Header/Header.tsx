import { FunctionComponent } from "react";
import { HomeContent, PersonContent } from "../HeaderContent";

import styles from "./Header.module.scss";
interface HeaderProps {
  title: string;
  description: string;
  mediaQwery: boolean;
  photo?: string;
  page: string;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps):JSX.Element => {
  return (
    <div className={styles.container}>
      {props.page === "home" ? (
        <>
          <HomeContent
            title={props.title}
            description={props.description}
            mediaQwery={props.mediaQwery}
          />
        </>
      ) : (
        <PersonContent
          photo={props.photo}
          title={props.title}
          description={props.description}
          mediaQwery={props.mediaQwery}
        />
      )}
    </div>
  );
};

export default Header;
