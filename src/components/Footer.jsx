import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-softBlue footerGrid">
      <div className="contactFlex">
        <h2 className="contactH2">Kontakt</h2>
        <p>Tornebuskvej 22, 1.</p>
        <p>1131 København K</p>
        <p>CVR: 22446187</p>
        <p>Husk at du kan få fradrag for donationer på op til 16.600 kr.</p>
      </div>
      <p>© 2020 - Forening for Dyrevelfærd</p>
      <div className="partnerFlex">
        <h2 className="partnersH2">Partnere</h2>
        <div className="blueTextPartners">
          <p>Anima</p>
          <p>World Animal Protection</p>
          <p>Fødevarestyrelsen</p>
          <p>Faktalink</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
