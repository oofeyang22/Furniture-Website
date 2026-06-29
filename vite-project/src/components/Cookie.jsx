import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const Cookie = () => {
    return (
        <div>
            <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Reject"
            enableDeclineButton
            style={{
            background: "#2B373B",
            fontSize: "14px",
            padding: "12px",
            }}

            buttonStyle={{
            background: "#4CAF50",
            color: "#fff",
            borderRadius: "8px",
            padding: "8px 16px",
            }}
            declineButtonStyle={{
            background: "#f44336",
            color: "#fff",
            borderRadius: "8px",
            padding: "8px 16px",
            }}
            expires={0.064}
            >This website uses cookies to enhance the user experience.{" "} 
            <span style={{ fontSize: "16px" }}>By clicking "Accept", you consent to use of all cookies. You can read our private policy{" "} 
                <Link to="/privacy-policy" style={{ color: "#4CAF50", textDecoration: "underline" }} > here. </Link> 
                </span>

            </CookieConsent>
            
        </div>
    );
};

export default Cookie;