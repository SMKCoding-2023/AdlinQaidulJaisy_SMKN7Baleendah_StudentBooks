import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./User.js";
import { Sekolah } from "./Sekolah.js";
import { Angkatan } from "./Angkatan.js";
import { Ruang } from "./Ruang.js";


export const Post = db.define(
  "Post",
  {
    jenis_post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isi_post: {
      type: DataTypes.STRING,
    },
    konten: {
      type: DataTypes.STRING,
    },
    gambar_konten: {
      type: DataTypes.STRING,
    },
    tanggal: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {}
);


Post.belongsTo(User)
Post.beforeBulkCreate(Sekolah)
Post.belongsTo(Angkatan)
Post.belongsTo(Ruang)
