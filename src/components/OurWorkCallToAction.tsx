import { Work, CallToActionType } from "../objects/Work";
import CTAContinue from "./CTA/CTAContinue";
import CTADownloadURLWithNext from "./CTA/CTADownloadURLWithNext";
import { Link } from "react-router-dom";

function OurWorkCallToAction({ works, workIndex, setWorkIndex, detailIndex, setDetailIndex, lockScroll, setLockScroll }: { works: Work[], workIndex: number, setWorkIndex: React.Dispatch<React.SetStateAction<number>>, detailIndex: number, setDetailIndex: React.Dispatch<React.SetStateAction<number>>, lockScroll: boolean, setLockScroll: React.Dispatch<React.SetStateAction<boolean>> }) {
    let ctaComponent;

    const ctaType = works[workIndex].details[detailIndex].ctaType;

    switch (ctaType) {
        case CallToActionType.CONTINUE: {
            ctaComponent = <CTAContinue works={works} workIndex={workIndex} setWorkIndex={setWorkIndex} detailIndex={detailIndex} setDetailIndex={setDetailIndex} lockScroll={lockScroll} setLockScroll={setLockScroll}/>
            break;
        }   
        case CallToActionType.DOWNLOAD_URL_WITH_NEXT: {
            ctaComponent = <CTADownloadURLWithNext works={works} workIndex={workIndex} setWorkIndex={setWorkIndex} detailIndex={detailIndex} setDetailIndex={setDetailIndex} setLockScroll={setLockScroll}/>
            break;
        }
    }

    return (
      <div id="our-work-call-to-action" style={{ width: "100vw", background: `linear-gradient(to top, ${works[workIndex].backgroundColor.transparentize(1).toRgbaString()} 60%, ${works[workIndex].backgroundColor.transparentize(0).toRgbaString()} 100%)`}}>
        <div className="vstack">
          { ctaComponent }
          <div className="hstack space-between" style={{ width: "calc(100vw - 20px)", margin: "5px 0px" }}>
            <Link to={"/terms-of-service"} style={{ textDecoration: 'none' }}>
              <button>
                <h3 className="bottom-text animated">Terms of Service</h3>
              </button>
            </Link>
            <h4 className="bottom-text" style={{ margin: 0 }}>
              <span className='italic'>Made with Love. (2024)</span>
            </h4>
            <Link to={"/privacy"} style={{ textDecoration: 'none' }}>
              <button>
                <h3 className="bottom-text animated">Privacy Policy</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default OurWorkCallToAction;