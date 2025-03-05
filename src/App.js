"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var AddToCartButton_1 = __importDefault(require("./components/AddToCartButton"));
var AnimateCard_1 = __importDefault(require("./components/AnimateCard"));
var AnimationScroll_1 = __importDefault(require("./components/AnimationScroll"));
var BouncingLoader_1 = __importDefault(require("./components/BouncingLoader"));
var ExpandingCircle_1 = __importDefault(require("./components/ExpandingCircle"));
var FadeInText_1 = __importDefault(require("./components/FadeInText"));
var FlipCard_1 = __importDefault(require("./components/FlipCard"));
var FlippingCard_1 = __importDefault(require("./components/FlippingCard"));
var FloatingElement_1 = __importDefault(require("./components/FloatingElement"));
var HeroSection_1 = __importDefault(require("./components/HeroSection"));
var PortfolioGrid_1 = __importDefault(require("./components/PortfolioGrid"));
var ProductCard_1 = __importDefault(require("./components/ProductCard"));
var ProductCarousel_1 = __importDefault(require("./components/ProductCarousel"));
var RangeSlider_1 = __importDefault(require("./components/RangeSlider"));
var RotatingLoader_1 = __importDefault(require("./components/RotatingLoader"));
var ScrollRevealText_1 = __importDefault(require("./components/ScrollRevealText"));
var ShakingButton_1 = __importDefault(require("./components/ShakingButton"));
var SlideInCard_1 = __importDefault(require("./components/SlideInCard"));
var StaggeredList_1 = __importDefault(require("./components/StaggeredList"));
var TypewriterText_1 = __importDefault(require("./components/TypewriterText"));
var Gestures_1 = __importDefault(require("./Properties/Gestures"));
var StaggerAnimation_1 = __importDefault(require("./Properties/StaggerAnimation"));
var UseMotionValue_1 = __importDefault(require("./Properties/UseMotionValue"));
var UseScroll_1 = __importDefault(require("./Properties/UseScroll"));
var UseSpring_1 = __importDefault(require("./Properties/UseSpring"));
var UseTransform_1 = __importDefault(require("./Properties/UseTransform"));
var Varients_1 = __importDefault(require("./Properties/Varients"));
var UseScrollTopProgress_1 = __importDefault(require("./components/UseScrollTopProgress"));
var ComponentWrapper = function (_a) {
    var Component = _a.component;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var goBack = function () { return navigate(-1); };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center p-4", children: [(0, jsx_runtime_1.jsx)(Component, {}), (0, jsx_runtime_1.jsx)("button", { onClick: goBack, className: "mt-4 p-2 bg-gray-300 text-black rounded", children: "Back" })] }));
};
var components = [
    { path: "add-to-cart", name: "Add to Cart", component: AddToCartButton_1.default },
    { path: "animate-card", name: "Animate Card", component: AnimateCard_1.default },
    {
        path: "animation-scroll",
        name: "Animation Scroll",
        component: AnimationScroll_1.default,
    },
    {
        path: "bouncing-loader",
        name: "Bouncing Loader",
        component: BouncingLoader_1.default,
    },
    {
        path: "expanding-circle",
        name: "Expanding Circle",
        component: ExpandingCircle_1.default,
    },
    { path: "fade-in-text", name: "Fade In Text", component: FadeInText_1.default },
    { path: "flip-card", name: "Flip Card", component: FlipCard_1.default },
    { path: "flipping-card", name: "Flipping Card", component: FlippingCard_1.default },
    {
        path: "floating-element",
        name: "Floating Element",
        component: FloatingElement_1.default,
    },
    { path: "hero-section", name: "Hero Section", component: HeroSection_1.default },
    { path: "portfolio-grid", name: "Portfolio Grid", component: PortfolioGrid_1.default },
    { path: "product-card", name: "Product Card", component: ProductCard_1.default },
    {
        path: "product-carousel",
        name: "Product Carousel",
        component: ProductCarousel_1.default,
    },
    { path: "range-slider", name: "Range Slider", component: RangeSlider_1.default },
    {
        path: "rotating-loader",
        name: "Rotating Loader",
        component: RotatingLoader_1.default,
    },
    {
        path: "scroll-reveal-text",
        name: "Scroll Reveal Text",
        component: ScrollRevealText_1.default,
    },
    { path: "shaking-button", name: "Shaking Button", component: ShakingButton_1.default },
    { path: "slide-in-card", name: "Slide In Card", component: SlideInCard_1.default },
    { path: "staggered-list", name: "Staggered List", component: StaggeredList_1.default },
    {
        path: "typewriter-text",
        name: "Typewriter Text",
        component: TypewriterText_1.default,
    },
    { path: "gestures", name: "Gestures", component: Gestures_1.default },
    {
        path: "stagger-animation",
        name: "Stagger Animation",
        component: StaggerAnimation_1.default,
    },
    {
        path: "use-motion-value",
        name: "Use Motion Value",
        component: UseMotionValue_1.default,
    },
    { path: "use-scroll", name: "Use Scroll", component: UseScroll_1.default },
    {
        path: "use-scroll-topbar",
        name: "Use Scroll Topbar",
        component: UseScrollTopProgress_1.default,
    },
    { path: "use-spring", name: "Use Spring", component: UseSpring_1.default },
    { path: "use-transform", name: "Use Transform", component: UseTransform_1.default },
    { path: "varients", name: "Varients", component: Varients_1.default },
];
var Home = function () { return ((0, jsx_runtime_1.jsxs)("div", { className: "h-screen flex flex-col justify-center items-center w-full gap-4 p-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "Choose a Component" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-center max-w-md", children: "This application demonstrates various animations and UI effects using Framer Motion. Click on any component below to see it in action!" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-4 p-4", children: components.map(function (_a) {
                var path = _a.path, name = _a.name;
                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/".concat(path), className: "p-2 bg-blue-500 text-white rounded text-center", children: name }, path));
            }) })] })); };
var App = function () { return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-screen w-screen", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home, {}) }), components.map(function (_a) {
                    var path = _a.path, component = _a.component;
                    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/".concat(path), element: (0, jsx_runtime_1.jsx)(ComponentWrapper, { component: component }) }, path));
                })] }) }) })); };
exports.default = App;
