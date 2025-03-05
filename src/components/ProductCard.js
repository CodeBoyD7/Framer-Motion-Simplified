"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var ProductCard = function () {
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "w-60 h-80 bg-white shadow-lg rounded-lg overflow-hidden", whileHover: { scale: 1.05 }, transition: { duration: 0.3 }, children: [(0, jsx_runtime_1.jsx)("img", { src: "https://via.placeholder.com/150", alt: "Product" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold p-2", children: "Product Name" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 p-2", children: "$49.99" })] }));
};
exports.default = ProductCard;
