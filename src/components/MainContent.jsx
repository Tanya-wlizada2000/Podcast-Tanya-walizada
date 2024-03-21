import { About } from "./MainContentcomponents/About";
import { Article } from "./MainContentcomponents/Article";
import { AvailableSec } from "./MainContentcomponents/AvailableSec";
import { Member } from "./MainContentcomponents/Member";
import { OurSponsor } from "./MainContentcomponents/OurSponsor";
import { Recent } from "./MainContentcomponents/Recent";
import { SlideShow } from "./MainContentcomponents/slideshow";






const MainContent = () => {
  return (
    <>
      <About />
      <SlideShow />
      <Member />
      <Recent />
      <OurSponsor />
      <Article />
      <AvailableSec />
    </>
  );
};

export { MainContent };
