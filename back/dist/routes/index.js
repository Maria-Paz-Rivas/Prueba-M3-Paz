"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/users");
router.post("/users");
// router.delete("/users");
router.delete("/users/:id");
exports.default = router;
