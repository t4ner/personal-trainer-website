import Membership from "../organs/Membership";
import StickyIcons from "../molecules/StickyIcons";
import PackageDesc from "../organs/PackageDesc";
import Banner from "../organs/Banner";

function Packages() {
  return (
    <div>
      <Membership />
      <StickyIcons />
      <PackageDesc />
      <Banner />
    </div>
  );
}

export default Packages;
