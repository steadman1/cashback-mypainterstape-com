
import OurWorkBar from '../components/OurWorkBar';
import { Work } from '../objects/Work';
import Footer from './Footer';
import { isMobile } from "react-device-detect";
import VideoAnimation from "./VideoAnimation";
import Policy from '../objects/Policy';
import replaceSpecialCharacters from '../replaceSpecialCharacters';

const TermsOfService = () => {
  const getHeight = () => {
    const topBarHeight = 0;
    return isMobile ? { height: `calc(100dvh - ${topBarHeight}px)` } : { height: `60dvh` };
  }
  
  const textStyle = { color: Work.ponderWork.primaryTextColor.toRgbString(), fontFamily: Work.ponderWork.bodyFont };

  return (
    <div className='entrance-screen vstack leading'>
      <OurWorkBar work={Work.ponderWork} color={Work.ponderWork.primaryTextColor.toRgbString()} fixed={false} />
      <div className='hstack space-between'>
        <div style={{ maxWidth: "650px", margin: "0 16px 32px 16px" }}>
          <h1 style={{ ...textStyle, fontWeight: "bold" }}>Terms of Service</h1>
          <h2 style={{ ...textStyle, fontWeight: "bold" }}>Last Updated: {replaceSpecialCharacters(Policy.ponderTermsOfService.updated)}</h2>
          {Policy.ponderTermsOfService.content.map((section, index) => (
            <div key={index}>
              <h2 style={{ ...textStyle, fontWeight: "bold" }}>{replaceSpecialCharacters(section.subtitle)}</h2>
              <p style={{ ...textStyle }}>{replaceSpecialCharacters(section.content)}</p>
              {section.subContent && section.subContent.length > 0 && (
                <ul>
                  {section.subContent.map((sub, subIndex) => (
                    <li key={subIndex} style={{ ...textStyle }}>  {replaceSpecialCharacters(sub.bullet)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="zstack" style={{ ...getHeight(), overflow: "clip" }}>
        <Footer height={getHeight()} />
        <VideoAnimation height={getHeight()} videoSrc={"tape-falling"} stillFrameSrc={"tape-falling-final.png"} />
      </div>
    </div>
  );
}

export default TermsOfService;
