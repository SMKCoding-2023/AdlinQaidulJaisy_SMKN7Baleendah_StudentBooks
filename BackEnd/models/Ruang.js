import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Sekolah } from "./Sekolah.js";
import { Angkatan } from "./Angkatan.js";

export const Ruang = db.define(
  "Ruang",
  {
    nama_ruang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    post: {
      type: DataTypes.STRING,
    },
  },
  {}
);

Ruang.belongsTo(Sekolah);
Ruang.belongsTo(Angkatan);
