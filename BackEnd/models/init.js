import { db } from "../config/db.js";
import { Sekolah } from "./Sekolah.js";
import { Angkatan } from "./Angkatan.js";
import { Ruang } from "./Ruang.js";
import { User } from "./User.js";
import { UserSosial } from "./UserSosial.js";
import { Post } from "./Post.js";
import { Comments } from "./Comments.js";
export function modelInit() {
  console.log("Init db sekolah :", Sekolah === db.models.Sekolah? "Berhasil":"Gagal" ); // true
  console.log("Init db angkatan :", Angkatan === db.models.Angkatan? "Berhasil":"Gagal");
  console.log("Init db angkatan :", Ruang === db.models.Ruang? "Berhasil":"Gagal");
  console.log("Init db angkatan :", User === db.models.User? "Berhasil":"Gagal");
  console.log("Init db angkatan :", UserSosial === db.models.UserSosial? "Berhasil":"Gagal");
  console.log("Init db angkatan :", Post === db.models.Post? "Berhasil":"Gagal");
  console.log("Init db angkatan :", Comments === db.models.Comments? "Berhasil":"Gagal");
}
