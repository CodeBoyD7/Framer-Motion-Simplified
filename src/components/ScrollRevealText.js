"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var ScrollRevealText = function () {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { className: "text-3xl font-bold text-white", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: "I create amazing web experiences!" }));
};
exports.default = ScrollRevealText;
