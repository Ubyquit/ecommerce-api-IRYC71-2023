const express = require("express");
const estadoController = require("../controllers/estadoController");

const router = express();

router.get("/", estadoController.listarEstados);

module.exports = router;