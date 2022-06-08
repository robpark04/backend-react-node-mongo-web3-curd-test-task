"use strict";

const express = require("express");
const Controller = require("./nft-controller");
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

const controller = new Controller();
const router = express.Router();

router.get("/", controller.list);
router.get("/edit/:id", controller.detail);
router.post("/create", upload.single('image'), controller.create);
router.post("/update/:id", upload.single('image'), controller.update);
router.delete("/delete", controller.delete); 

module.exports = router;