import Web3Provider from '../../store/Web3Provider';
import CollectionProvider from '../../store/CollectionProvider';
import MarketplaceProvider from '../../store/MarketplaceProvider';
import Nav from '../../Nav.js';
import FooterPages from '../Content/FooterPages';
const Privacy = ({
	
}) => {

    return (
    <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>
        <Nav />
        <style>{"\
        .rr{\
          color:#13287e;\
        }\
      "}</style>
        <div className="rr" style={{marginLeft:"250px",width:"80%"}}>
        <br></br>
        <center><h1 style={{color:"#13287e"}}>Privacy Policy</h1></center>
        <br></br>
        <h1 style={{color:"#13287e"}}>Website Privacy Policy</h1>
<h2 style={{color:"#13287e"}}>1. Policy</h2>
<p style={{color:"#13287e"}}>By accessing this Website, accessible from http://recipe.international, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
<h2 style={{color:"#13287e"}}>2. Use License</h2>
<p style={{color:"#13287e"}}>Permission is granted to temporarily download one copy of the materials on NFT Marketplace's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
<ul>
    <li style={{color:"#13287e"}}>modify or copy the materials;</li>
    <li style={{color:"#13287e"}}>use the materials for any commercial purpose or for any public display;</li>
    <li style={{color:"#13287e"}}>attempt to reverse engineer any software contained on NFT Marketplace's Website;</li>
    <li style={{color:"#13287e"}}>remove any copyright or other proprietary notations from the materials; or</li>
    <li style={{color:"#13287e"}}>transferring the materials to another person or "mirror" the materials on any other server.</li>
</ul>
<p style={{color:"#13287e"}}>This will let NFT Marketplace to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>
<h2 style={{color:"#13287e"}}>3. Disclaimer</h2>
<p style={{color:"#13287e"}}>All the materials on NFT Marketplace’s Website are provided "as is". NFT Marketplace makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, NFT Marketplace does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
<h2 style={{color:"#13287e"}}>4. Limitations</h2>
<p style={{color:"#13287e"}}>NFT Marketplace or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on NFT Marketplace’s Website, even if NFT Marketplace or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
<h2 style={{color:"#13287e"}}>5. Revisions and Errata</h2>
<p style={{color:"#13287e"}}>The materials appearing on NFT Marketplace’s Website may include technical, typographical, or photographic errors. NFT Marketplace will not promise that any of the materials in this Website are accurate, complete, or current. NFT Marketplace may change the materials contained on its Website at any time without notice. NFT Marketplace does not make any commitment to update the materials.</p>
<h2 style={{color:"#13287e"}}>6. Links</h2>
<p style={{color:"#13287e"}}>NFT Marketplace has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by NFT Marketplace of the site. The use of any linked website is at the user’s own risk.</p>
<h2 style={{color:"#13287e"}}>7. Site Terms of Use Modifications</h2>
<p style={{color:"#13287e"}}>NFT Marketplace may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
<h2 style={{color:"#13287e"}}>8. Governing Law</h2>
<p style={{color:"#13287e"}}>Any claim related to NFT Marketplace's Website shall be governed by the laws of in without regards to its conflict of law provisions.</p></div>
        <FooterPages
          mt0={true}
          text='Discover, collect, and sell extraordinary NFTs'
        />
      </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>
    );  

}

export default Privacy;