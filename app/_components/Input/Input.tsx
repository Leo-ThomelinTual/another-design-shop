import React from 'react'
import styles from "./Input.module.css"

type InputProps = {
  className?: string;
  label?: string;
  type?: string | "text" ;
  placeholder?: string;
}

const Input = ({className, label, type, placeholder}: InputProps) => {
  return (
    <div className={styles.inputContainer + " " + className}>
      {label ? <label className={styles.inputLabel} htmlFor={label}>{label}</label> : null}
      <input className={styles.input} name={label} type={type} placeholder={placeholder ? placeholder : ""} required />
    </div>
  )
}

export default Input
