import StickyIcons from "../molecules/StickyIcons";
import Banner from "../organs/Banner";
import CorpAbout from "../organs/CorpAbout";
import CorpAbout2 from "../organs/CorpAbout2";
import CorpAbout3 from "../organs/CorpAbout3";

function CorporateOrg() {
  return (
    <div style={{ overflow: 'hidden', pointerEvents: 'none' }}>
      <CorpAbout />
      <CorpAbout2 />
      <CorpAbout3 />
      <StickyIcons />
      <Banner />
    </div>
  );
}

export default CorporateOrg;
