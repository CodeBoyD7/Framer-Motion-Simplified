"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var AnimationScroll = function () {
    var scrollY = (0, framer_motion_1.useScroll)().scrollY;
    var smoothScrollY = (0, framer_motion_1.useSpring)(scrollY, { stiffness: 100, damping: 15 });
    var scale = (0, framer_motion_1.useTransform)(smoothScrollY, [0, 1000], [1, 0.5]);
    var borderRadius = (0, framer_motion_1.useTransform)(smoothScrollY, [0, 1000], ["0%", "50%"]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative h-[200vh] overflow-hidden w-full", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { src: "https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_640.jpg", alt: "A beautiful ocean view", className: "absolute inset-0 w-full h-full object-cover", style: { scale: scale, borderRadius: borderRadius } }), (0, jsx_runtime_1.jsx)("div", { className: "sticky top-0 h-screen flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-6xl font-bold text-white", children: "Scroll Down" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "h-[200vh] flex items-center justify-center text-3xl text-gray-800", children: "More Content Here" })] }));
};
exports.default = AnimationScroll;
