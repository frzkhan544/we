import { Fragment, useContext, useState } from 'react';
import Web3Context from '../../store/web3-context';
import MarketplaceContext from '../../store/marketplace-context';
import { NavLink } from 'react-router-dom';
import web3 from '../../connection/web3';
import { formatPrice } from '../../helpers/utils';
const Navbar = () => {
  const [fundsLoading, setFundsLoading] = useState(false);
  
  const web3Ctx = useContext(Web3Context);
  const marketplaceCtx = useContext(MarketplaceContext);
  
  const connectWalletHandler = async() => {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch(error) {
      console.error(error);
    }

    // Load accounts
    web3Ctx.loadAccount(web3);
  };

  const claimFundsHandler = () => {
    marketplaceCtx.contract.methods.claimFunds().send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      setFundsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      setFundsLoading(false);
    });
  };

  // Event ClaimFunds subscription 
  marketplaceCtx.contract.events.ClaimFunds()
  .on('data', (event) => {
    marketplaceCtx.loadUserFunds(marketplaceCtx.contract, web3Ctx.account);
    setFundsLoading(false);
  })
  .on('error', (error) => {
    console.log(error);
  });

  let etherscanUrl;

  if(web3Ctx.networkId === 3) {
    etherscanUrl = 'https://ropsten.etherscan.io'
  } else if(web3Ctx.networkId === 4) {
    etherscanUrl = 'https://rinkeby.etherscan.io'
  } else if(web3Ctx.networkId === 5) {
    etherscanUrl = 'https://goerli.etherscan.io'
  } else {
    etherscanUrl = 'https://etherscan.io'
  }

  
  return (

      <Fragment>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top sticky">      
      <div class="container-fluid custom-container">
    <a className="navbar-brand logo f-30 text-white fw-bold" style={{color: "white",fontSize:"1.2rem"}}>Rare List</a>
    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mx-auto navbar-center">
      <li className="nav-item" style={{marginLeft: "20px",marginTop:"3px"}}>
      <NavLink className="navbar-link" style={{color:"white"}} activeClassName="is-active" to="/">
        Home
            </NavLink>
        </li>
        <li className="nav-item" style={{marginLeft: "20px",marginTop:"3px"}}>
        <NavLink className="navbar-link" style={{color:"white"}} activeClassName="is-active" to="/explore">
        Explore
            </NavLink>
        </li>
        <li className="nav-item" style={{marginLeft: "20px",marginTop:"3px"}}>
        <NavLink className="navbar-link" style={{color:"white"}} activeClassName="is-active" to="/mynfts">
        My NFTs
            </NavLink>
        </li>
        <li className="nav-item" style={{marginLeft: "20px",marginTop:"3px"}}>
       {// <NavLink className="navbar-link" style={{color:"white"}} activeClassName="is-active" to="/transactions">
        //Recent Transactions
         //   </NavLink> 
        }
        </li>
        
        <li className="nav-item" style={{position:"absolute",right:"205px",top:"5px"}}>
          {marketplaceCtx.userFunds > 0 && !fundsLoading &&
            <button 
              type="button" 
              className="btn btn-info btn-block navbar-btn text-white" 
              onClick={claimFundsHandler}
              style={{marginLeft: "0"}}
            >     
              {`CLAIM ${formatPrice(marketplaceCtx.userFunds)} ETH`} 
            </button>}
          {fundsLoading &&
          <button 
          type="button" 
          className="btn btn-info btn-block navbar-btn text-white" 
          onClick={""}
          style={{marginLeft: "0"}}
        >     
          <div class="d-flex justify-content-center text-info">
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only"></span>
        </div>
    </div>     
        </button>
            }          
        </li>
        <li className="nav-item" style={{position:"absolute",right:"10px",top:"5px"}}>
          {web3Ctx.account && 
           <button 
           type="button" 
           className="btn btn-warning text-white my-2 my-sm-0" 
           onClick={""} 
         > <a style={{color: "white"}} href={`${etherscanUrl}/address/${web3Ctx.account}`}>
          {(web3Ctx.account).substring(0,8)+"..."+(web3Ctx.account).substring((web3Ctx.account).length-8,(web3Ctx.account).length)}
          </a></button>}
          {!web3Ctx.account && 
            <button 
              type="button" 
              className="btn btn-warning text-white" 
              onClick={connectWalletHandler} 
            > 
              Connect your wallet
            </button>}
        </li>
        
      </ul>
      
      </div>
      </div>
    </nav>
    <br></br>
    <br></br>
    </Fragment>
  );  
};

export default Navbar;