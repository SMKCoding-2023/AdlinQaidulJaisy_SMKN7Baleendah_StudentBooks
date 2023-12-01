import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Sekolah } from "./Sekolah.js";

export const Angkatan = db.define(
  "Angkatan",
  {
    namaangkatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    tahun: {
      type: DataTypes.STRING,
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
  },
  {}
);

Angkatan.sekolah = Angkatan.belongsTo(Sekolah);
