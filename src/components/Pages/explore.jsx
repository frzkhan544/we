import Web3Provider from '../../store/Web3Provider';
import CollectionProvider from '../../store/CollectionProvider';
import MarketplaceProvider from '../../store/MarketplaceProvider';
import Nav from '../../Nav.js';
import FooterPages from '../Content/FooterPages';
import NFTCollection from '../Content/NFTCollection/NFTCollection.js';
const Explore = ({
	
}) => {

    return (
    <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>
        <Nav />
        <div style={{display:"flex",minHeight:"94.9vh",flexDirection:"column",justifyContent:"space-between",background:"#fff5ee"}}>
        <NFTCollection ClassTextDIV="top-sec-h" />
        <FooterPages
          mt0={true}
          text='Discover, collect, and sell extraordinary NFTs'
        />
        </div>
      </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>
    );  

}

export default Explore;