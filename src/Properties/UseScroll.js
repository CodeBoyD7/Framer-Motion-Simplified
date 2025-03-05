"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var UseScroll = function () {
    var scrollY = (0, framer_motion_1.useScroll)().scrollY;
    var scale = (0, framer_motion_1.useTransform)(scrollY, [0, 300], [1, 1.5]);
    var opacity = (0, framer_motion_1.useTransform)(scrollY, [0, 300], [1, 0]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: " flex items-center justify-center", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "bg-blue-500 w-32 h-32 rounded-lg shadow-lg", style: { scale: scale, opacity: opacity } }), (0, jsx_runtime_1.jsx)("div", { className: "w-full h-[150vh]" })] }));
};
exports.default = UseScroll;
