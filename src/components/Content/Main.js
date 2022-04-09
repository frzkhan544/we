import { useContext  } from 'react';

// import MintForm from './MintNFT/MintForm';

import CollectionContext from '../../store/collection-context';
import MarketplaceContext from '../../store/marketplace-context';
import Spinner from '../Layout/Spinner';

import MintSection from "./MintSection"
import NFTCollection from './NFTCollection/NFTCollection';
import '../../assets/css/general.css';

const Main = () => {
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  
  return(
    <>
      
      

        {!collectionCtx.nftIsLoading && (
          <MintSection
              SecClass="blue-bg special-mr section-padding-100"
              topTitle="Mint New NFT Item"
              downTitle="Mint NFT Now and List Your Creative NFT Digital Asset For Sale"
              topText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis at dictum risus, non suscipit arcu."
              downText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!"
          />
        )}
        {collectionCtx.nftIsLoading && <Spinner />}

        {!marketplaceCtx.mktIsLoading && <NFTCollection ClassTextDIV="top-sec-h" />}
        {marketplaceCtx.mktIsLoading && <Spinner />}

        

    </>
  );
};

export default Main;