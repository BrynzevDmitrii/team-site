import { useForm } from "react-hook-form";
import { addNewUser } from "../../store/RegisterSlice";

import styles from "./Registration.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import clsx from "clsx";
import { Navigate } from "react-router-dom";
import { useState } from "react";

type ActionUser = {
  id: string,
  fullName: string,
  email: string,
  password: string,
  passwordCheck:string,
}

const Registration = (): JSX.Element => {

  const isRegistration = Boolean( window.localStorage.getItem('token') && window.localStorage.getItem('token')!== undefined );

  const [type, setType ] = useState('password')

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordCheck:"",
    },
    mode: "onChange",
  });

  const dispatch = useAppDispatch();

  const { dataRegistration, isPasswordError, isValidEmail }= useAppSelector((state)=>state.registration)
  
  const submit=(values:ActionUser ):void=>{
      dispatch(addNewUser(values));
      if(dataRegistration[0].token){
        window.localStorage.setItem('token', dataRegistration[0].token )
      }      
    }

    if(isRegistration){
      return <Navigate to = {'/'} />
    }


  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__title}>Регистрация</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className={styles.popup__label}>
          <span className={styles.popup__label_title}>Имя</span>
          <input
            className={styles.popup__input}
            {...register("fullName")}
            type="text"
            name="fullName"
          />
        </label>

        <label className={styles.popup__label}>
          <span className={styles.popup__label_title}>Электронная почта</span>
          <input
            className={clsx((!isValidEmail)? styles.popup__input: styles.popup__input_error)}
            {...register("email")}
            type="text"
            name="email"
          />
        </label>

        <label className={styles.popup__label}>
          <span className={styles.popup__label_title}>Пароль</span>
          <input
            className={clsx((!isPasswordError)? styles.popup__input : styles.popup__input_error )}
            {...register("password")}
            type={type}
            name="password"
          />
          <div 
           onClick={()=>{setType('text')}}
          className={styles.popup__input_security_psw}></div>
        </label>

        <label className={styles.popup__label}>
          <span className={styles.popup__label_title}>Подтвердите пароль</span>
          <input
          {... register('passwordCheck')}
            className={clsx((!isPasswordError)? styles.popup__input : styles.popup__input_error )}
            type={type}
            name="passwordCheck"
          />
          <div
          onClick={()=>{setType('text')}}
           className={styles.popup__input_security_listen}></div>
        </label>
        {isPasswordError && 'Пароли не совподают'}

        <input
          type="submit"
          value={"Зарегистрироваться"}
          className={styles.popup__submit}
        />
      </form>
    </div>
  );
};

export default Registration;
