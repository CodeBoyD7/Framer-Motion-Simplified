"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var PortfolioGrid = function () {
    return ((0, jsx_runtime_1.jsx)("a", { href: "https://github.com/CodeBoyD7", className: "flex justify-center items-center ", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.img, { src: "https://avatars.githubusercontent.com/u/169260481?v=4", className: "rounded-lg shadow-lg", whileHover: { scale: 1.1 }, transition: { duration: 0.3 } }) }));
};
exports.default = PortfolioGrid;
