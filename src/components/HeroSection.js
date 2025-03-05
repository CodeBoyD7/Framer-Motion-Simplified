"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var HeroSection = function () {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "text-center text-white", initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: (0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold", children: "Welcome to My Portfolio" }) }));
};
exports.default = HeroSection;
