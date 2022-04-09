import { Fragment } from 'react';
import Nav from '../../Nav';
import App from '../../App';
import FooterPages from '../Content/FooterPages';
const Transactions = ({
	
}) => {

    return (

        <Fragment>
        <Nav />
        <App />
        <FooterPages
      mt0={true}
      text='Discover, collect, and sell extraordinary NFTs'
    />
    </Fragment>
    );  

}

export default Transactions;