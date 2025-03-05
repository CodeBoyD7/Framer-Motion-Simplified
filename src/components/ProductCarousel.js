"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var ProductCarousel = function () {
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "flex space-x-4 overflow-hidden", animate: { x: [-100, 0, -100] }, transition: { duration: 5, repeat: Infinity, ease: "linear" }, children: [(0, jsx_runtime_1.jsx)("img", { src: "https://via.placeholder.com/150", alt: "Product", className: "w-40" }), (0, jsx_runtime_1.jsx)("img", { src: "https://via.placeholder.com/150", alt: "Product", className: "w-40" }), (0, jsx_runtime_1.jsx)("img", { src: "https://via.placeholder.com/150", alt: "Product", className: "w-40" })] }));
};
exports.default = ProductCarousel;
