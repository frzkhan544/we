import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import MarketplaceProvider from './store/MarketplaceProvider';

import App from './App';
import Nav from './Nav';
import WelcomeArea from "../src/components/Content/WelcomeArea"
import SecParttns from "../src/components/Content/SecParttns"

import OurService from "../src/components/Content/OurService"
import FooterPages from "../src/components/Content/FooterPages"
import logo from '../src/img/logo2.PNG'
import PageRouter from './router';

ReactDOM.render(
  <PageRouter>
  <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>
  
        <Nav />
        
        <WelcomeArea
          ClassSec="hero-section ai5 relative"
          welcomeContClass="welcome-content demo1 text-left"
          specialHeadClass="special-head"
          text="Full NFT Marketplace For Ethereum Chain"
          ClassTitle="bold b-text"
          title="Discover The Largest NFT Marketplace."
          dummyText=""
          addRow={true}
        />
        {/*
        <SecParttns
            ClassUp="container parttns parttns-mr"
        /> 
        */}
        <App />

        <OurService
            ClassSec="our_services_area section-padding-100-0"
            titleTop="Create and sell your NFTs"
            titleDown=""
            text="The digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items."
        />
        
        <FooterPages
          mt0={true}
          text='Discover, collect, and sell extraordinary NFTs'
        />

      </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>
  </PageRouter>, 
  document.getElementById('root')
);