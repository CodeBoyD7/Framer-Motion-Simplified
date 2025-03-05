"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var TypewriterText = function () {
    var text = "Typing animation in Framer Motion!";
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-fullbg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h1, { className: "text-white text-3xl font-bold", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 2 }, children: text.split("").map(function (char, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { animate: { opacity: [0, 1] }, transition: { duration: 0.05, delay: index * 0.05 }, children: char }, index)); }) }) }));
};
exports.default = TypewriterText;
