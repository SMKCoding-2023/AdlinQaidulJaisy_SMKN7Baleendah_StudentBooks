import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./User.js";
import { Sekolah } from "./Sekolah.js";
import { Angkatan } from "./Angkatan.js";
import { Ruang } from "./Ruang.js";
export const UserSosial = db.define(
  "UserSosial",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_sosial: {
      type: DataTypes.STRING,
    },
    userid: {
      type: DataTypes.STRING,
    },
  },
  {}
);

UserSosial.belongsTo(User)
UserSosial.belongsTo(Sekolah)
UserSosial.belongsTo(Angkatan)
UserSosial.belongsTo(Ruang)
