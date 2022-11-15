import Container from 'react-bootstrap/Container';
import Buttons from '../share-components/Button';


export default function banner() {
  return (
    <>  
        <div className="banner-contains">
            <div className="banner-details">
                    <div className="banner-txt">
                        <div className="banner-up-txt">
                            <Container>
                            <h1>Communication is the key <br/>for any Global Business</h1>
                            <div className="banner-btns">
                                <div className='no-bg-btn me-4'>
                                    <Buttons value="about us"/>
                                </div>
                                <Buttons value="our services"/>
                            </div>
                            </Container>
                        </div>
                        
                    </div>
            </div>
        </div>
       
        
    </>
    
  )
}

