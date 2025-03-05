"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var ShakingButton = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full w-full  bg-gray-900", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { className: "px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg", whileHover: {
                x: [-5, 5, -5, 5, 0],
            }, transition: { duration: 0.3 }, children: "Shake Me" }) }));
};
exports.default = ShakingButton;
