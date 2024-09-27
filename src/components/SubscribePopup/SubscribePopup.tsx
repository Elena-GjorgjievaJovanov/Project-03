import React from "react";
import "./SubscribePopup.css";

interface SubscribePopupProps {
  onClose: () => void;
}

const SubscribePopup: React.FC<SubscribePopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h1>
          Претплатете се на нашиот <br />
          Е-Билтен
        </h1>
        <p>Бидете во тек со најновите понуди и новости.</p>
        <form>
          <input type="email" placeholder="Е-маил" required />
          <button type="submit">Претплати се</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribePopup;
