const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    area: {
      type: String, // Puedes cambiar el tipo según tus necesidades
      required: true,
    },
    cargo: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    subdepartamento: {
      type: String,
      required: true,
    },
    periodo: {
      type: String,
      required: true,
    },
    carrera: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", NoteSchema);
