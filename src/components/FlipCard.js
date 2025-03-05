"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var FlipCard = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-fullbg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-40 h-40 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-lg", whileHover: { rotateY: 180 }, transition: { duration: 0.5 }, children: "Flip Me" }) }));
};
exports.default = FlipCard;
