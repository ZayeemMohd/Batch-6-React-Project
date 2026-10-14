import { logoURL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Footer = () => {
  const isOnline = useOnlineStatus();
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",

        color: "white",
      }}
    >
      {isOnline ? <b>You are Online</b> : <b>You are Offline</b>}
      <img src={logoURL} />

      <h4>© 2024 Zayeem Mohd. All rights reserved.</h4>
    </div>
  );
};

export default Footer;
