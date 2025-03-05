"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var UseSpring = function () {
    var x = (0, framer_motion_1.useMotionValue)(0);
    var _a = (0, react_1.useState)(100), stiffness = _a[0], setStiffness = _a[1];
    var _b = (0, react_1.useState)(10), damping = _b[0], setDamping = _b[1];
    var springX = (0, framer_motion_1.useSpring)(x, { stiffness: stiffness, damping: damping });
    return ((0, jsx_runtime_1.jsxs)("div", { className: " flex flex-col items-center justify-center bg-[#0a0a0a] py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12 px-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent py-6", children: "Spring Animation" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, children: ["This example demonstrates how to use ", (0, jsx_runtime_1.jsx)("code", { children: "useSpring" }), " in Framer Motion. The spring animation creates a smooth, natural movement effect as you drag the box horizontally. Adjust the stiffness and damping values using the sliders below to see how the animation changes."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6 flex flex-col items-center space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-gray-300 mb-1", children: ["Stiffness: ", stiffness] }), (0, jsx_runtime_1.jsx)("input", { type: "range", min: "10", max: "300", value: stiffness, onChange: function (e) { return setStiffness(Number(e.target.value)); }, className: "w-64 cursor-pointer" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-gray-300 mb-1", children: ["Damping: ", damping] }), (0, jsx_runtime_1.jsx)("input", { type: "range", min: "1", max: "50", value: damping, onChange: function (e) { return setDamping(Number(e.target.value)); }, className: "w-64 cursor-pointer" })] })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer", style: { x: springX, background: "#ff4d4d" }, drag: "x", dragConstraints: { left: -100, right: 100 }, children: "Drag Me" })] }));
};
exports.default = UseSpring;
