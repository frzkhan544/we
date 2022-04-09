import { useContext, useRef, createRef } from 'react';

import web3 from '../../../connection/web3';
import Web3Context from '../../../store/web3-context';
import CollectionContext from '../../../store/collection-context';
import MarketplaceContext from '../../../store/marketplace-context';
import { formatPrice } from '../../../helpers/utils';
import eth from '../../../img/eth.png';
import check from '../../../img/check.png';
import "./MyNFT.css"

import SectionHeading from "../SectionHeading"

const MyNFT = ({ColorBack="#eef5ff" ,ClassTextDIV}) => {

  
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);

  const priceRefs = useRef([]);
  if (priceRefs.current.length !== collectionCtx.collection.length) {
    priceRefs.current = Array(collectionCtx.collection.length).fill().map((_, i) => priceRefs.current[i] || createRef());
  }
  
  const makeOfferHandler = (event, id, key) => {
    event.preventDefault();

    const enteredPrice = web3.utils.toWei(priceRefs.current[key].current.value, 'ether');

    collectionCtx.contract.methods.approve(marketplaceCtx.contract.options.address, id).send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('receipt', (receipt) => {      
      marketplaceCtx.contract.methods.makeOffer(id, enteredPrice).send({ from: web3Ctx.account })
      .on('error', (error) => {
        window.alert('Something went wrong when pushing to the blockchain');
        marketplaceCtx.setMktIsLoading(false);
      }); 
    });
  };
  
  const buyHandler = (event) => {    
    const buyIndex = parseInt(event.target.value);      
    marketplaceCtx.contract.methods.fillOffer(marketplaceCtx.offers[buyIndex].offerId).send({ from: web3Ctx.account, value: marketplaceCtx.offers[buyIndex].price })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });            
  };

  const cancelHandler = (event) => {    
    const cancelIndex = parseInt(event.target.value);
    marketplaceCtx.contract.methods.cancelOffer(marketplaceCtx.offers[cancelIndex].offerId).send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });    
  };

var flag = 0;
var count = 0;
function NoNFT(){
  console.log("Hele");
}
    return (

      <section className="pricing section-padding-80 relative hex-pat-1" style={{background: "#ffffff"}}>
        <div className="container" id="explore"><br></br>
          <SectionHeading
            title=""
            textTop="NFTs Owned By"
            textDown={web3Ctx.account}
            ClassTextDIV={ClassTextDIV}
            ClassTextH2="d-blue bold"
          />
          <div className="loader" id="loader"></div>
            <div className="row text-center">
              {collectionCtx.collection.map((NFT, key) => {
                const index = marketplaceCtx.offers ? marketplaceCtx.offers.findIndex(offer => offer.id === NFT.id) : -1;
                const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
                const price = index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;
                document.getElementById('loader').style = "visiblity:hidden;display:none";
                if(owner == web3Ctx.account){
                return(
                  <div className="col-md-3 pb-4">
                    <div key={key} className="card border-info minted-item box-shadow">
                      <div className={"card-body"}>       
                        <h5 className="card-title">{NFT.title}</h5>
                      </div>
                      <div className="image-wrapper">
                        <img src={`https://ipfs.infura.io/ipfs/${NFT.img}`} className="card-img-bottom" alt={`NFT ${key}`} />              
                      </div>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="mr-3 owner-info">
                          <img src={check} width="50" height="50" className="align-center float-start" alt="price icon"></img> 
                        </div>
                        <div>
                          <p className="created-by mb-0">Created By</p>
                          <p className="fw-light fs-6 mt-0 mb-0">{`${owner.substr(0,7)}...${owner.substr(owner.length - 7)}`}</p>
                        </div>
                      </div>
                      <hr/>
                      {index !== -1 ?
                        owner === web3Ctx.account ?              
                          <form className="row g-2" onSubmit={(e) => makeOfferHandler(e, NFT.id, key)}>                
                            <div className="col-5 d-grid gap-2">
                              <button type="submit" className="btn info-bg">OFFER</button>
                            </div>
                            <div className="col-7">
                              <input
                                type="number"
                                step="0.01"
                                placeholder="ETH..."
                                className="form-control"
                                ref={priceRefs.current[key]}
                              />
                            </div>                                  
                          </form> :
                          <p className="ownership-note">No Price has been set Yet!</p>
                          :null}
                    </div>
                  </div>
                );
              }else{
                flag = 1;
              }
              if(flag == 1){
                count++;
                if(count < 2){
                return(
                  <div>
                  <h2 style={{color:"#183b56"}}>Sorry! You do not own any NFTs!</h2>
                  <br></br></div>
                );
              }
              }
              })
              }
            </div>
        </div>
      </section>
    );
  }

export default MyNFT;