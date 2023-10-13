const db = require("../models/db");

exports.listarEstados = async (req, res) => {
  const sql = "SELECT * FROM estados";

  try {
    const [estados, fields] = await db.query(sql);
    res.status(200).json(estados);
  } catch (err) {
    res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
  }
};
