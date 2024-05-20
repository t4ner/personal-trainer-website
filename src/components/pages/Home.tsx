import About from "../organs/About";
import Abouttwo from "../organs/Abouttwo";
import Aboutthree from "../organs/Aboutthree";

// import Blogs from "../organs/Blogs";
import Calculator from "../organs/Calculator";
// import Contact from "../organs/Contact";
import HeroSection from "../organs/HeroSection";
// import Membership from "../organs/Membership";
import Offers from "../organs/Offers";
import Banner from "../organs/Banner";
// import Testimonials from "../organs/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Abouttwo />
      <Aboutthree />
      <Offers />
      {/* <Membership /> */}
      <Calculator />
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      {/* <Contact /> */}
      <Banner />
    </>
  );
};

export default Home;
