import React from "react";
import { ReactComponent as BtcLogo } from "../../images/btc.svg";
import { ReactComponent as AdaLogo } from "../../images/ada.svg";
import { ReactComponent as EthLogo } from "../../images/eth.svg";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <header className="portfolio">
        <h1>Portfolio</h1>
      </header>
      <section className="total">
        <div className="holdings">
          <h3>Total holdings</h3>
          <p>€ 0.00</p>
        </div>
        <div className="balance">
          <div className="available">
            <h3>Available balance</h3>
            <p>€ 0.00</p>
          </div>
          <div className="on-orders">
            <h3>On orders</h3>
            <p>€ 0.00</p>
          </div>
        </div>
      </section>

      <section className="assets">
        <div className="individual-asset">
          <div class="coin">
            <div class="logo">
            <BtcLogo></BtcLogo>
            </div>
            <div class="percentage">
              <h3>Bitcoin</h3>
              <p>20%</p>
            </div>
          </div>
          <div class="price">
            <h3>0 BTC</h3>
            <p>€ 0.00</p>
          </div>
        </div>
        <div className="individual-asset">
          <div class="coin">
            <div class="logo">
            <AdaLogo></AdaLogo>
            </div>
            <div class="percentage">
              <h3>Cardano</h3>
              <p>10%</p>
            </div>
          </div>
          <div class="price">
            <h3>0 ADA</h3>
            <p>€ 0.00</p>
          </div>
        </div>
        <div className="individual-asset">
          <div class="coin">
            <div class="logo">
            <EthLogo></EthLogo>
            </div>
            <div class="percentage">
              <h3>Ethereum</h3>
              <p>30%</p>
            </div>
          </div>
          <div class="price">
            <h3>0 ETH</h3>
            <p>€ 0.00</p>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Dashboard;
