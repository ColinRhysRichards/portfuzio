import React from "react";
import Mobile from "./Mobile_Components/Mobile";
import Desktop from "./Mobile_Components/Desktop";



export default ({ open, ...props }) => (
  <>
    <Desktop>
      <div className={open ? "dburger-menu open" : "dburger-menu"} {...props}>
        <div className="dbar1" key="db1" />
        <div className="dbar2" key="db2" />
        <div className="dbar3" key="db3" />
      </div>
    </Desktop>

    <Mobile>
      <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </Mobile>
  </>
);
