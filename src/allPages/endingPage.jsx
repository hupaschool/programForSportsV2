import whatsappIcon from "../media/whatsappIcon.svg";
import yahak from "../media/yahakLogo.png";
import kanaf from "../media/kanaf.svg";
import school from "../media/school.svg";
import SOI from "../media/soiLogo2.svg";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";

const EndingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="ending-page-content">
      <div className="logos">
        <img src={kanaf} alt="kanaf" className="logo" />
        <img src={school} alt="school" className="logo" />
        <img src={SOI} alt="SOI" className="logo" />
        <img src={yahak} alt="yahak" className="logo" />
      </div>
      <div className="ending-page-header">
        <div className="text ending-page-title">כל הכבוד<br></br> סיימתם את הלומדה!</div>
        <div className="text ending-small-message">נתראה במועד הגיוס...</div>
      </div>
      <div className="buttons-move">
              <img
                src={forwardBtn}
                alt="back"
                onClick={() => {
                  navigate("/start-programs")
                }}
                className="move-button"
                id="forward-btn"
              />
              <img
                src={backwardBtn}
                alt="next"
                className="move-button"
                id="backward-btn"
                style={{ visibility: "hidden"}}
              />
            </div>
    </div>
  );
};

export default EndingPage;
