export const getCreationDate = () => {
  const date = new Date();
  const [day, month, year] = [date.getDate(), date.toLocaleString('en-US', { month: 'short' }), date.getFullYear()];
  const [hour, minutes] = [`0${date.getHours()}`.slice(-2), `0${date.getMinutes()}`.slice(-2)];
  return `Created ${month} ${day}, ${year}, ${hour}:${minutes}`;
}
