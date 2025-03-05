import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useNavigate,
} from "react-router-dom";
import React from "react";
import AddToCartButton from "./components/AddToCartButton";
import AnimateCard from "./components/AnimateCard";
import AnimationScroll from "./components/AnimationScroll";
import BouncingLoader from "./components/BouncingLoader";
import ExpandingCircle from "./components/ExpandingCircle";
import FadeInText from "./components/FadeInText";
import FlipCard from "./components/FlipCard";
import FlippingCard from "./components/FlippingCard";
import FloatingElement from "./components/FloatingElement";
import HeroSection from "./components/HeroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import ProductCard from "./components/ProductCard";
import ProductCarousel from "./components/ProductCarousel";
import RangeSlider from "./components/RangeSlider";
import RotatingLoader from "./components/RotatingLoader";
import ScrollRevealText from "./components/ScrollRevealText";
import ShakingButton from "./components/ShakingButton";
import SlideInCard from "./components/SlideInCard";
import StaggeredList from "./components/StaggeredList";
import TypewriterText from "./components/TypewriterText";
import Gestures from "./Properties/Gestures";
import StaggerAnimation from "./Properties/StaggerAnimation";
import UseMotionValue from "./Properties/UseMotionValue";
import UseScroll from "./Properties/UseScroll";
import UseSpring from "./Properties/UseSpring";
import UseTransform from "./Properties/UseTransform";
import Varients from "./Properties/Varients";
import UseScrollTopProgress from "./components/UseScrollTopProgress";

const ComponentWrapper = ({ component: Component }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Component />
      <button
        onClick={goBack}
        className="mt-4 p-2 bg-gray-300 text-black rounded"
      >
        Back
      </button>
    </div>
  );
};

const components = [
  { path: "add-to-cart", name: "Add to Cart", component: AddToCartButton },
  { path: "animate-card", name: "Animate Card", component: AnimateCard },
  {
    path: "animation-scroll",
    name: "Animation Scroll",
    component: AnimationScroll,
  },
  {
    path: "bouncing-loader",
    name: "Bouncing Loader",
    component: BouncingLoader,
  },
  {
    path: "expanding-circle",
    name: "Expanding Circle",
    component: ExpandingCircle,
  },
  { path: "fade-in-text", name: "Fade In Text", component: FadeInText },
  { path: "flip-card", name: "Flip Card", component: FlipCard },
  { path: "flipping-card", name: "Flipping Card", component: FlippingCard },
  {
    path: "floating-element",
    name: "Floating Element",
    component: FloatingElement,
  },
  { path: "hero-section", name: "Hero Section", component: HeroSection },
  { path: "portfolio-grid", name: "Portfolio Grid", component: PortfolioGrid },
  { path: "product-card", name: "Product Card", component: ProductCard },
  {
    path: "product-carousel",
    name: "Product Carousel",
    component: ProductCarousel,
  },
  { path: "range-slider", name: "Range Slider", component: RangeSlider },
  {
    path: "rotating-loader",
    name: "Rotating Loader",
    component: RotatingLoader,
  },
  {
    path: "scroll-reveal-text",
    name: "Scroll Reveal Text",
    component: ScrollRevealText,
  },
  { path: "shaking-button", name: "Shaking Button", component: ShakingButton },
  { path: "slide-in-card", name: "Slide In Card", component: SlideInCard },
  { path: "staggered-list", name: "Staggered List", component: StaggeredList },
  {
    path: "typewriter-text",
    name: "Typewriter Text",
    component: TypewriterText,
  },
  { path: "gestures", name: "Gestures", component: Gestures },
  {
    path: "stagger-animation",
    name: "Stagger Animation",
    component: StaggerAnimation,
  },
  {
    path: "use-motion-value",
    name: "Use Motion Value",
    component: UseMotionValue,
  },
  { path: "use-scroll", name: "Use Scroll", component: UseScroll },
  {
    path: "use-scroll-topbar",
    name: "Use Scroll Topbar",
    component: UseScrollTopProgress,
  },
  { path: "use-spring", name: "Use Spring", component: UseSpring },
  { path: "use-transform", name: "Use Transform", component: UseTransform },
  { path: "varients", name: "Varients", component: Varients },
];

const Home = () => (
  <div className="h-screen flex flex-col justify-center items-center w-full gap-4 p-4">
    <h1 className="text-2xl font-bold">Choose a Component</h1>
    <p className="text-gray-600 text-center max-w-md">
      This application demonstrates various animations and UI effects using
      Framer Motion. Click on any component below to see it in action!
    </p>
    <div className="grid grid-cols-3 gap-4 p-4">
      {components.map(({ path, name }) => (
        <Link
          key={path}
          to={`/${path}`}
          className="p-2 bg-blue-500 text-white rounded text-center"
        >
          {name}
        </Link>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="flex justify-center items-center h-screen w-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {components.map(({ path, component }) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<ComponentWrapper component={component} />}
          />
        ))}
      </Routes>
    </Router>
  </div>
);

export default App;
