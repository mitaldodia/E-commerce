import Button from 'react-bootstrap/Button';

function Buttons(props) {
  return (
    <>
      <Button className='first-dem-btn'>{props.value}</Button>
    </>
  );
}

export default Buttons;