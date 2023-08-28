import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-softBlue footerGrid">
      <div className="contactFlex">
        <h2 className="contactH2 contactH2Padding ">Kontakt</h2>
        <div className="pSizeText">
          <p>Tornebuskvej 22, 1.</p>
          <p>1131 København K</p>
          <p>CVR: 22446187</p>
          <p>Husk at du kan få fradrag for donationer på op til 16.600 kr.</p>
        </div>
      </div>
      <p className="copyRight">© 2020 - Forening for Dyrevelfærd</p>
      <div className="partnerFlex">
        <h2 className="partnersH2 partnerH2Padding ">Partnere</h2>
        <div className="blueTextPartners">
          <div className="pSizeText">
            <p className="blueText">Anima</p>
            <p className="blueText">World Animal Protection</p>
            <p className="blueText">Fødevarestyrelsen</p>
            <p className="blueText">Faktalink</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
