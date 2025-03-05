"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var BouncingLoader = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center  h-[100px]", children: (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2 p-4", children: [0, 1, 2].map(function (index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-4 h-4 bg-white rounded-full", animate: { y: [0, -10, 0] }, transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: index * 0.2,
                } }, index)); }) }) }));
};
exports.default = BouncingLoader;
