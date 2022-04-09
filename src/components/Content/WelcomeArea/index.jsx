import "./welcome.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import WelcomeAreaInfo from "../../../data/data-components/data-WelcomeArea.js"
import {Slider1} from "../../../helpers/allImgs"
import {Slider2} from "../../../helpers/allImgs"
import {Slider3} from "../../../helpers/allImgs"
import {Slider4} from "../../../helpers/allImgs"

const WelcomeArea = ({
    ClassSec,
    welcomeContClass,
    specialHeadClass,
    text,
    ClassTitle,
    title,
    ClassDummyText="",
    dummyText,
    addRow=false
  }) => {

    return (

      <section className={ClassSec} id="home">
  
        <div className="overlay" />
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-12">
                <div className={welcomeContClass}>
                  <div className="promo-section">
                    <h3 style={{color:"#13287e"}} className={specialHeadClass}>{text}</h3>
                  </div>
                  <h1 className={ClassTitle} data-wow-delay="0.2s">{title}</h1>
                  <p className={ClassDummyText} data-wow-delay="0.3s">{dummyText}</p>
                  <div className="info-btn-group fadeInUp" data-wow-delay="0.4s">
                    <a href="#explore" className="btn btn-dark">Explore</a>
                    <a href="#mint" style={{marginLeft: "20px"}} className="btn btn-dark">Create</a>
                  </div>
                </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12" style={{marginTop:"75px"}}>
                      <Carousel>
                        <Carousel.Item interval={1000}>
                          <img
                            className="d-block w-500"
                            src={Slider1}
                            alt=""
                          />
                          <Carousel.Caption>
                            <h3>Collection</h3>
                            <p>Rarelist Exclusive</p>
                          </Carousel.Caption>
                        </Carousel.Item> 

                        <Carousel.Item interval={500}>
                          <img
                            className="d-block w-500"
                            src={Slider2}
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                          <h3>Collection</h3>
                          <p>Digital Art Gallery</p>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-500"
                            src={Slider3}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                          <h3>Collection</h3>
                          <p>Liquid Forest Princess</p>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-500"
                            src={Slider4}
                            alt="Fourth slide"
                          />
                          <Carousel.Caption>
                          <h3>Collection</h3>
                          <p>Colorful Painting</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );

}

export default WelcomeArea