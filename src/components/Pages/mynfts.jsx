import { Fragment } from 'react';
import Nav from '../../Nav';
import FooterPages from '../Content/FooterPages';
import Web3Provider from '../../store/Web3Provider';
import CollectionProvider from '../../store/CollectionProvider';
import MarketplaceProvider from '../../store/MarketplaceProvider';
import "../Content/MyNFT/MyNFT.css"
import MyNFT from '../Content/MyNFT/MyNFT';

const MyNFTs = ({ColorBack="#eef5ff" ,ClassTextDIV}) => {

    return (
      <Fragment>
        <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>
        <Nav />
        <div style={{display:"flex",minHeight:"94.9vh",flexDirection:"column",justifyContent:"space-between"}}>
        <MyNFT/>
      <FooterPages
      mt0={true}
      text='Discover, collect, and sell extraordinary NFTs'
    />
        </div>
    </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>
    </Fragment>
    );
}

export default MyNFTs;