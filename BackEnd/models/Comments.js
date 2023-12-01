import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./User.js";
import { Post } from "./Post.js";
export const Comments = db.define(
  "Comments",
  {
    konten: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.STRING,
    },
  },
  {}
);

Comments.belongsTo(User);
Comments.belongsTo(Post);
