"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var FloatingElement = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-full bg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-16 h-16 bg-blue-500 rounded-full", animate: { y: [-10, 10, -10] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }) }));
};
exports.default = FloatingElement;
