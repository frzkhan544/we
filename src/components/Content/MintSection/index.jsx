import { useContext } from 'react';
import {CreativeSolutionsAboutSec} from "../../../helpers/allImgs"
import MintForm from '../MintNFT/MintForm';
import CollectionContext from '../../../store/collection-context';
import Spinner from '../../Layout/Spinner';


const CreativeSolutions = ({
  SecClass,
  topTitle,
  downTitle
}) => {

  const collectionCtx = useContext(CollectionContext);

    return (

      <section className={SecClass} id="mint">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-sm-12">
              <div className="welcome-meter mt-s" data-aos="fade-up">
                <img src={CreativeSolutionsAboutSec} className="doted" alt="" style={{width:"450px",marginTop:"40px",marginBottom:"40px"}} />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
              <div className="who-we-contant mt-s">
                <div className="top-sec-h" data-aos="fade-up">{topTitle}</div>
                <h4 className="w-text" data-aos="fade-up">{downTitle}</h4>
                {!collectionCtx.nftIsLoading && <MintForm />}
                {collectionCtx.nftIsLoading && <Spinner />}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default CreativeSolutions