"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var StaggeredList = function () {
    var items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center h-full w-fullbg-gray-900 pt-10", children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "p-4 mb-2 bg-white rounded-lg shadow-lg w-40 text-center", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.2 }, children: item }, index)); }) }));
};
exports.default = StaggeredList;
