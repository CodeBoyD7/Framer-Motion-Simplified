"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var FlippingCard = function () {
    var _a = (0, react_1.useState)(false), isFlipped = _a[0], setIsFlipped = _a[1];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center ", children: (0, jsx_runtime_1.jsx)("div", { className: "relative w-[300px] h-[400px] perspective-1000", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "w-full h-full relative", animate: { rotateY: isFlipped ? 180 : 0 }, transition: { duration: 0.6, ease: "easeInOut" }, style: {
                    transformStyle: "preserve-3d",
                    cursor: "pointer",
                }, onClick: function () { return setIsFlipped(!isFlipped); }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute w-full h-full bg-blue-500 flex justify-center items-center rounded-lg shadow-xl", style: { backfaceVisibility: "hidden" }, children: (0, jsx_runtime_1.jsx)("h2", { className: "text-white text-2xl font-semibold", children: "Front Side" }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute w-full h-full bg-green-500 flex justify-center items-center rounded-lg shadow-xl", style: {
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }, children: (0, jsx_runtime_1.jsx)("h2", { className: "text-white text-2xl font-semibold", children: "Back Side" }) })] }) }) }));
};
exports.default = FlippingCard;
