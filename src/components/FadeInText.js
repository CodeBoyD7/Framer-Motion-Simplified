"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var FadeInText = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-full bg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h1, { className: "text-white text-3xl font-bold", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }, children: "Welcome to My Site" }) }));
};
exports.default = FadeInText;
