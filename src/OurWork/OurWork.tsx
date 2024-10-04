import OurWorkBar from "./OurWorkBar";
import OurWorkEntrance from "./OurWorkEntrance";
import OurWorkCallToAction from "./OurWorkCallToAction";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Work } from "../objects/Work";
import { useState } from "react";

function OurWork() {
  const [workIndex, setWorkIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);
  const [lockScroll, setLockScroll] = useState(false);
  const { width } = useWindowDimensions();

  return (
      <>
          <div data-scroll-section id="our-work" className={ `vstack expanding animated"}` }
            style={{ maxWidth: width, backgroundColor: Work.ponderWork.backgroundColor.toRgbString() }}>
              <OurWorkBar work={Work.ponderWork} color={Work.ponderWork.primaryTextColor.toRgbString()}/>
              <OurWorkEntrance work={Work.ponderWork} detailIndex={detailIndex} />
              <OurWorkCallToAction works={[ Work.ponderWork ]} workIndex={workIndex} setWorkIndex={setWorkIndex} detailIndex={detailIndex} setDetailIndex={setDetailIndex} lockScroll={lockScroll} setLockScroll={setLockScroll} />
          </div>
      </>
  );
}

export default OurWork;
