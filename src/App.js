import React, { useContext, useEffect } from 'react';

import web3 from './connection/web3';
import Main from './components/Content/Main';
import Web3Context from './store/web3-context';
import CollectionContext from './store/collection-context';
import MarketplaceContext from './store/marketplace-context'

const App = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);

  const showContent = web3 && collectionCtx.contract && marketplaceCtx.contract && web3Ctx.account;
  
  return(
    <React.Fragment>
      {showContent && <Main />}
    </React.Fragment>
  );
};

export default App;