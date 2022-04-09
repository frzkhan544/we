import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import App from './App';
import Nav from './Nav';
import WelcomeArea from "./components/Content/WelcomeArea";
import OurService from "./components/Content/OurService";
import FooterPages from "./components/Content/FooterPages";
import MarketplaceProvider from './store/MarketplaceProvider';
import Explore from "./components/Pages/explore";
import MyNFTs from "./components/Pages/mynfts";
import Transactions from "./components/Pages/transactions";
import Privacy from "./components/Pages/privacypolicy";
import Terms from "./components/Pages/terms";

const PageRouter = ({
	
}) => {

    return (
        <Router>

        <Routes>
          <Route exact path="/" element={
            <Web3Provider>
            <CollectionProvider>
              <MarketplaceProvider>
                <Nav />
                
        
                <WelcomeArea
                  ClassSec="hero-section ai5 relative"
                  welcomeContClass="welcome-content demo1 text-left"
                  specialHeadClass="special-head"
                  text="Full NFT Marketplace For Ethereum Chain"
                  ClassTitle="bold b-text text-warning"
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
                    ClassSec="our_services_area section-padding-000-0"
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
          }/>
          <Route exact path="/explore" element={<Explore />}/>
          <Route exact path="/mynfts" element={<MyNFTs />}/>
          <Route exact path="/transactions" element={<Transactions />}/>
          <Route exact path="/privacypolicy" element={<Privacy />}/>
          <Route exact path="/terms" element={<Terms />}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
        </Router>

    );  

}

export default PageRouter;