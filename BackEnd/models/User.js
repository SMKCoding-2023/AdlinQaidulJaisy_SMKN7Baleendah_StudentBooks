import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { Sekolah } from "./Sekolah.js";
import { Angkatan } from "./Angkatan.js";
import { Ruang } from "./Ruang.js";

export const User = db.define(
  "User",
  {
    nama_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_user: {
      type: DataTypes.STRING,
    },
    follow: {
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
    nomor: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {}
);

User.belongsTo(Sekolah)
User.belongsTo(Angkatan)
User.belongsTo(Ruang)
