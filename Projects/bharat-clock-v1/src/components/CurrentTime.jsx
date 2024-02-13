let ClockTime = () => {
  let time = new Date();
  return (
    <p>
      CurrentTime : {time.toLocaleDateString()} : {time.toLocaleTimeString()}
    </p>
  );
};
export default ClockTime;
