import React from 'react'
import styles from "./ErrorMessage.module.css"

type ErrorMessageProps = {
  children?: React.ReactNode;
  priority: "success" | "warning" | "error";
  className?: string;
}

const ErrorMessage = ({ children, priority, className}: ErrorMessageProps) => {
  return (
    <div className={styles.NotificationContainer + " " + (priority === "success" ? styles.success : null) + " " + (priority === "warning" ? styles.warning : null) + " " + (priority === "error" ? styles.error : null) + " " + className}>
      <p>
        {children}
      </p>
    </div>
  )
}

export default ErrorMessage
