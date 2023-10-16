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

exports.agregarEstado = async (req, res) => {
  const { nombre } = req.body;
  const sql = `INSERT INTO estados (nombre) VALUES ('${nombre}')`;

  try {
    const [estados, fields] = await db.query(sql);
    res.status(200).json(estados);
  } catch (err) {
    res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
  }
}

exports.actualizarEstado = async (req, res) => {
  const id = req.params.id;
  const { nombre } = req.body;

  const sql = `UPDATE estados SET nombre = '${nombre}' WHERE id_estado = ${id}`;

  try {
    const [estados, fields] = await db.query(sql);
    res.status(200).json(estados);
  } catch (err) {
    res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
  }
}

exports.eliminarEstado = async (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM estados WHERE id_estado = ${id}`;

  try {
    const [estados, fields] = await db.query(sql);
    res.status(200).json(estados);
  } catch (err) {
    res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
  }
}