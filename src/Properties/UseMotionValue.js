"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var UseMotionValue = function () {
    var x = (0, framer_motion_1.useMotionValue)(0);
    var background = (0, framer_motion_1.useTransform)(x, [-100, 100], ["#ff0000", "#0000ff"]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center bg-[#0a0a0a] py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12 px-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Motion Value Animation" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, children: ["This example demonstrates how to use ", (0, jsx_runtime_1.jsx)("code", { children: "useMotionValue" }), " and", " ", (0, jsx_runtime_1.jsx)("code", { children: "useTransform" }), " in Framer Motion. Drag the box horizontally to see the background color change dynamically."] })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer", style: { x: x, background: background }, drag: "x", dragConstraints: { left: -100, right: 100 }, children: "Drag Me" })] }));
};
exports.default = UseMotionValue;
