"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var RangeSlider = function () {
    var scale = (0, framer_motion_1.useMotionValue)(1);
    var changeHandler = function (e) {
        scale.set(parseFloat(e.target.value));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center w-full h-full", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "box", style: { scale: scale } }), (0, jsx_runtime_1.jsx)("div", { className: "mt-[8rem]", children: (0, jsx_runtime_1.jsx)("input", { type: "range", min: 0.5, max: 5, step: 0.01, defaultValue: 1, onChange: changeHandler }) })] }));
};
exports.default = RangeSlider;
