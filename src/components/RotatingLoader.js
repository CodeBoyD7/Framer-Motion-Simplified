"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var RotatingLoader = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-full bg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-16 h-16 border-4 border-white border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } }) }));
};
exports.default = RotatingLoader;
