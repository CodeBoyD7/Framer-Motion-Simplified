"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Variants = function () {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: " flex flex-col items-center bg-[#0a0a0a] p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center text-center bg-[#121212] p-8 rounded-xl shadow-lg border border-gray-800", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent", children: "Variants in Framer Motion" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: "Variants provide a powerful way to define animations in Framer Motion. They allow you to manage animation states efficiently and apply smooth transitions with ease." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center mt-10", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl shadow-xl cursor-pointer", variants: {
                            hidden: { opacity: 0, scale: 0.7 },
                            visible: { opacity: 1, scale: 1 },
                            exit: { opacity: 0, scale: 0.5 },
                        }, initial: "hidden", animate: isVisible ? "visible" : "hidden", transition: { duration: 0.5 } }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setIsVisible(function (prev) { return !prev; }); }, className: "mt-6 px-6 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-lg shadow-md transition-transform duration-300 hover:scale-105", children: "Toggle Animation" })] })] }));
};
exports.default = Variants;
