"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var PulsingButton = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-fullbg-gray-900 w-screen", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "px-6 py-3 text-lg font-semibold rounded-lg border-2 border-white", animate: {
                scale: [1, 1.1, 1.2, 1.1, 1],
                backgroundColor: ["#000000", "#ffffff", "#000000"],
                color: ["#ffffff", "#000000", "#ffffff"],
            }, transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }, children: "Click Me" }) }));
};
exports.default = PulsingButton;
