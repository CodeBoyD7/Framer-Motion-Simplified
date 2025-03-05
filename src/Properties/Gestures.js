"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var gestureItems = [
    {
        text: "Hover & Tap",
        motionProps: {
            whileHover: { scale: 1.1, rotate: 8 },
            whileTap: { scale: 0.9 },
            transition: { type: "spring", stiffness: 250, damping: 12 },
        },
    },
    {
        text: "Drag Me",
        motionProps: {
            //   drag: true,drag="x or y"
            drag: true,
            dragConstraints: { top: -50, left: -50, right: 50, bottom: 50 },
            whileDrag: { scale: 1.05 },
        },
    },
    {
        text: "Drag with Constraints",
        motionProps: {
            drag: true,
            dragConstraints: { top: -100, left: -100, right: 100, bottom: 100 },
            whileHover: { scale: 1.1, rotate: -5 },
            whileTap: { scale: 0.95, backgroundColor: "red", color: "white" },
            transition: { type: "spring", stiffness: 250, damping: 12 },
        },
    },
];
var Gestures = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: " bg-[#0a0a0a] flex flex-col items-center py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12 px-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent", children: "Gestures" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.p, { className: "mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease: "easeOut" }, children: "Explore Framer Motion's built-in gestures to create dynamic and interactive animations." })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6", children: gestureItems.map(function (_a, index) {
                    var text = _a.text, motionProps = _a.motionProps;
                    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, __assign({ className: "bg-white text-black p-10 rounded-2xl shadow-xl w-80 h-80 flex justify-center items-center cursor-pointer" }, motionProps, { children: text }), index));
                }) })] }));
};
exports.default = Gestures;
