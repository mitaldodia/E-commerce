import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


export default function banner() {
  return (
    <Container>  
    <div className='banner-slide'>
      <div className="banner-txt">
        <h2>Wp-shopkeeper - Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui, ab ad sit eaque ut ex nam.</p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/slid-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className='slide-btn'>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/slid-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='slide-btn'>Shop Now</button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
        
       
        
    </Container>
    
  )
}

