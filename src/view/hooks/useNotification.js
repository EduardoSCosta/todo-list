import { useDispatch, useSelector } from 'react-redux';

export const useNotification = () => {
  const notifications = useSelector(state => state.notification)
  return { notifications};
}
