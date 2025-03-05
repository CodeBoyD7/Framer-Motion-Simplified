"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var UseTransform = function () {
    var x = (0, framer_motion_1.useMotionValue)(0);
    var _a = (0, react_1.useState)([0, 360]), outputRange = _a[0], setOutputRange = _a[1];
    var rotate = (0, framer_motion_1.useTransform)(x, [-100, 100], outputRange);
    return ((0, jsx_runtime_1.jsxs)("div", { className: " flex flex-col items-center justify-center bg-[#0a0a0a] py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12 px-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Transform Animation" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, children: ["This example showcases the ", (0, jsx_runtime_1.jsx)("code", { children: "useTransform" }), " hook in Framer Motion. It maps motion values from one range to another. Drag the box to see it rotate dynamically based on the horizontal movement."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "mb-6 flex flex-col items-center space-y-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-gray-300 mb-1", children: ["Rotation Range: ", outputRange[1], "\u00B0"] }), (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "720", value: outputRange[1], onChange: function (e) { return setOutputRange([0, Number(e.target.value)]); }, className: "w-64 cursor-pointer" })] }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer", style: { x: x, rotate: rotate, background: "#4d79ff" }, drag: "x", dragConstraints: { left: -100, right: 100 }, children: "Drag Me" })] }));
};
exports.default = UseTransform;
