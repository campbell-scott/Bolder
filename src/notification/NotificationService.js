import { createContext, useState } from "react";
import './NotificationService.css'

const Notification = ({ message, severity }) => {
  if(message === '') return

  return (
    <div className={severity === 'success' ? 'success' : 'error'}>
      {message}
    </div>
  )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
      setSeverity(severity)
      setMessage(message)

      setTimeout(() => {
          setMessage('')
      }, 2000)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification severity={severity} message={message} />
            {children}
        </NotificationContext.Provider>
    )
}