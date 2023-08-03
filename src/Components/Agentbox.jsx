import React, { useState } from 'react';

function Agentbox(props) {
  const [account, setAccount] = useState('');

  const handleGetAccount = () => {
    setAccount('0x23422464544232453');
  };

  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h3>{props.name}</h3>
        <a href="#" className="agent-btn" onClick={handleGetAccount}>
          Get Account
        </a>
        <br />
        <p>{account}</p>
        <a href="#" className="agent-btn">
          Current Provider
        </a>
      </div>
    </div>
  );
}

export default Agentbox;
