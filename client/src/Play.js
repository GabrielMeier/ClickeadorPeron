import styled from 'styled-components'

const Button = styled.button`
  background-color: green;
  width: 10rem;
  height: 3rem;
  border-radius: 20px;
  font-size: 1rem;
`

const Play = props => {
  const {
    startTimer,
    playing,
    clicks,
    setClicks
  } = props;

  const handleClick = () => {
    if (playing)
      setClicks(clicks + 1);
  };
  return (
    <div className="Play">
      <div
        className="PlayArea"
        onClick={handleClick}
      />
      <Button onClick={startTimer}>Jugar</Button>
      
      <h2>Clicks: {clicks}</h2>
    </div>
  );
};

export default Play;
