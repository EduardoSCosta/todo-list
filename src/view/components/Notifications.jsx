import {useNotification} from '../hooks/useNotification';
import "../styles/components/_notifications.css"

const Notifications = () => {

  const { notifications } = useNotification()

  return (
    <div className='notifications-container'>
      {notifications.map(notification => <div className={`notification ${notification.type}`}>{notification.msg}</div>)}
    </div>
  );
}

export default Notifications;
