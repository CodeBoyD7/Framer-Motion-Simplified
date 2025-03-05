"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var AddToCartButton = function () {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg", whileTap: { scale: 0.9 }, transition: { duration: 0.2 }, children: "Add to Cart \uD83D\uDED2" }));
};
exports.default = AddToCartButton;
