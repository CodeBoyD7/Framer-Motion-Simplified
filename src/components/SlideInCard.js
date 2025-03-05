"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var SlideInCard = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-full ", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "p-6 bg-white rounded-lg shadow-lg", initial: { x: "-100vw" }, animate: { x: 0 }, transition: { type: "spring", stiffness: 50 }, children: "Hello, I'm a sliding card!" }) }));
};
exports.default = SlideInCard;
