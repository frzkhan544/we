import SecParttnsInfo from '../../../data/data-components/data-SecParttns.js';

import "./partners.css"

const SecParttns = ({ClassUp}) => {

    return (

      <div className={ClassUp}>
        <div>
          <div className="row">
            {SecParttnsInfo && SecParttnsInfo.map((item , key) => (
              <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6" key={key}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecParttns;