"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var UseScrollTopProgress = function () {
    var containerRef = (0, react_1.useRef)(null);
    var scrollYProgress = (0, framer_motion_1.useScroll)({ container: containerRef }).scrollYProgress;
    var smoothScroll = (0, framer_motion_1.useSpring)(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 1,
    });
    var scale = (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [1, 1.5]);
    var opacity = (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [1, 0]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] py-12", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "text-center mb-12 px-6", style: { scale: scale, opacity: opacity }, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent", children: "Scroll Animation" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, children: ["This example showcases the ", (0, jsx_runtime_1.jsx)("code", { children: "useScroll" }), " hook in Framer Motion. It tracks the user's scroll progress and triggers animations based on scrolling behavior."] })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "fixed top-0 left-0 right-0 h-2 bg-red-500 origin-left", style: { scaleX: smoothScroll } }), (0, jsx_runtime_1.jsxs)("div", { ref: containerRef, className: "w-full max-w-2xl h-96 overflow-y-scroll bg-gray-800 p-6 rounded-lg shadow-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 mb-4", children: "Scroll down to see how animations are triggered and driven by scroll progress. The text below fades out gradually as you scroll." }), __spreadArray([], Array(20), true).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "text-gray-400 mb-4", style: {
                            opacity: (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [1, 0.2]),
                            x: (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [0, 50]),
                        }, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et facilisis ligula." }, index)); })] })] }));
};
exports.default = UseScrollTopProgress;
