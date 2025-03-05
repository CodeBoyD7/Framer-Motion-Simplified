"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var ExpandingCircle = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center  ", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-10 h-10 bg-blue-500 rounded-full", animate: {
                scale: [1, 2.5],
                opacity: [1, 0],
            }, transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" } }) }));
};
exports.default = ExpandingCircle;
