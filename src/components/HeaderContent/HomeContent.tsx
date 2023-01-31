import { FunctionComponent } from "react";
import ButtonOut from "../ButtonOut";

import styles from "./HomeContent.module.scss";

interface HomeContentProps {
    title:string,
    description:string,
    mediaQwery: boolean,
}
 
export const HomeContent: FunctionComponent<HomeContentProps> = (props:HomeContentProps):JSX.Element => {
    return ( 

        <> 
            <div className={styles.content}>
                <h1 className={styles.content__title}>
                    {props.title}
                </h1>
                <span className={styles.content__span}>
                    {props.description} 
                </span>  
            </div> 
    
               <ButtonOut mediaQwery={props.mediaQwery} />
</>
                
              
    );
}
 
