import OurServiceContent from "../../../data/data-components/data-OurService.js"

import "./service.css"

const OurService = ({
	ClassSec,
	titleTop,
	titleDown,
	text
	
}) => {

    return (

      <section className={ClassSec}>
        <div className="container"><center>
			<br></br><br></br><strong>
        <h3 data-aos="fade-up" style={{color:"#183b56"}}>{titleTop}</h3></strong></center><br></br><br></br>
          <div className="row">
            <div className="col-12 col-md-12">
            
              <div className="row">
              	{OurServiceContent && OurServiceContent.map((item , key) => (
	                <div className="col-12 col-md-6" key={key}>
	                  {/* Content */}
	                  <div className="service_single_content text-center mb-100">
	                    {/* Icon */}
	                    <div className="service_icon max">
	                      <img src={item.img} alt="" />
	                    </div>
	                    <h6 className="d-blue bold">{item.title}</h6>
	                    <p>{item.text}</p>
	                  </div>
	                </div>
              	))}
              </div>
            </div>
          </div>
        </div>
		<br></br>
		<br></br>
      </section>
    );  

}

export default OurService