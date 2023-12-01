import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const Sekolah = db.define("Sekolah", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
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
  website: {
    type: DataTypes.STRING,
  },
}, {

});
