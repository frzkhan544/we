import{
    FooterLogo,
  } from '../../../helpers/allImgs'
  import { NavLink } from 'react-router-dom';
  import './Footer.css'
  import TextFooter from '../../../data/data-layout/Footer/data-TextFooter.json'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
  const FooterPages = ({
        text='',
        mt0=false,
        pt100=false
      }) => {
          var date = new Date().getFullYear();
  
      return (
         
        <section className="footer" style={{background: "#f8f9fc"}}>
      <div className="container">
          <div className="top-footer">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="footer-info mt-4">
                           <img src={FooterLogo} alt="" height="150px"/> 
                         <a className="logo f-30 text-dark fw-bold" href="index.html">
                                  <img src="images/logo-dark.png" className="logo-dark" alt="" height="40"/>
                                  <img src="images/logo-light.png" className="logo-light" alt="" height="40"/>
                              </a>
                          <p className="f-18 mt-2 text-muted">
                             Rare Collection of NFTs <br/>
                              Across the World Wide Web.
                          </p>
                      </div>
                  </div>
  
                  <div className="col-lg-5">
                      <div className="row">
  
                      {TextFooter && TextFooter.map((item , key) => (
                  <div key={key} className={item.classBlock}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={item.classInfo} data-wow-delay="0.3s">
                        <h5 className="f-18 fw-bold">{item.title}</h5>
                  <ul className="list-unstyled footer-link mt-3">
  <li><NavLink className="navbar-link" style={{color:"#6b6e6f"}} activeClassName="is-active" to={item.path1}>{item.text1}</NavLink></li>
  <li><NavLink className="navbar-link" style={{color:"#6b6e6f"}} activeClassName="is-active" to={item.path2}>{item.text2}</NavLink></li>
  <li><NavLink className="navbar-link" style={{color:"#6b6e6f"}} activeClassName="is-active" to={item.path3}>{item.text3}</NavLink></li>
  <li><NavLink className="navbar-link" style={{color:"#6b6e6f"}} activeClassName="is-active" to={item.path4}>{item.text4}</NavLink></li>
                        {item.text5 && <a href={item.path5}><p>{item.text5}</p></a>}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                          
                      </div>
                  </div>
  
                  
  
                  <div className="col-lg-3">
                      <div className="mt-4 pl-0 pl-lg-4">
                          <h5 className="f-18 fw-bold">Follow Us</h5>
                          <ul className="list-inline social-icons-list pt-3">
                              <li className="list-inline-item">
                                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
  
  
          <hr/>
  
          <div className="row">
              <div className="col-12">
                  <div className="text-center">
                      <p className="my-4 text-muted"><strong> Copyright © 
                          {" "+date} Rare List</strong>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </section>
      );
  
  }
  
  export default FooterPages