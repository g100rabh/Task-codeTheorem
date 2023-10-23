import React from "react";

import classes from "./Header.module.css";
import { BsBell, BsDot } from "react-icons/bs";
import Finance from "./Finance";
const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <div className={classes.head}>
        <span className={classes.greeting}>
          <text>Hi, Welcome back</text> <p>Robert!</p>
        </span>
        <span className={classes.searchSec}>
          <input type="search" placeholder="🔍Search..." />
          <section>
            
            <BsBell />
          </section>
          <img src="https://s3-alpha-sig.figma.com/img/0e5d/8279/8e2becda16e2f3abc85e162b63a8d214?Expires=1698624000&Signature=P9zB9neaZrk9MtixnbVMxNp3Nmqo2EtX3r5NOP0-bJZCQMnAcedfcsxbk2rdkVUohW1utWQzzZv~OAALgmYdSMqHt48ahVrNcKFqVYPt3svtSRluLvza~8rRuU2XRUhWPXGroQ-GyZr-t3cEoXRXB9sMY6BLg-UXdX7sf2SuYU4D9jGrDz-oQwhFDGWPyQOJD7PPu8N850FIWJT~0-qTPkzHOLDxTI6ki1HSWbxACjNQSFHW0jm52ehpxmqBdwR0Wl7ubh1dqi5zvS-mF7cWzVWrQcwxyFZ82bPIT4Hlw2HXTwTiIsu309cOP8oiYPctepuX~oZGluIGQEl9JleNyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </span>
      </div>
      <Finance />
    </header>
  );
};

export default Header;
