"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Keyframe = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-[100vh] w-[100vw]", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-[30vh] flex justify-center items-center ", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center  bg-[#0a0a0a] p-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent", children: "Keyframes" }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.p, { className: "mt-6 text-lg text-gray-300 max-w-2xl text-center leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: ["Keyframes allow us to create more complex animations by specifying multiple points in an animation sequence. Instead of just animating from one state to another, we can define several intermediate states (", (0, jsx_runtime_1.jsx)("span", { className: "font-bold text-white", children: "frames" }), ") to control the animation more precisely by Splitting /Dividing Animations into multiple frames."] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-[70vh]", children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "box", 
                    //   animate={{ scale: [1, 2, 3, 4, 5, 4, 3, 2, 1] }}
                    //   animate={{ rotate: [0, 0, 10, 20, 50, 100, 200, 100, 50, 10, 0, 0] }}
                    animate: { borderRadius: ["20%", "20%", "50%", "50%", "20%"] }, transition: { duration: 2 } }) })] }));
};
exports.default = Keyframe;
