import Fastify from "fastify";
import { IndexController } from "./controller/IndexController.js";
import { modelInit } from "./models/init.js";
import { SekolahController } from "./controller/SekolahController.js";
import { AngkatanController } from "./controller/AngkatanController.js";
import { RuangController } from "./controller/RuangController.js";
import { UserController } from "./controller/UserController.js";
import { UserSosialController } from "./controller/UserSosialController.js";
import { PostController } from "./controller/PostController.js";
import { CommentsController } from "./controller/CommentsController.js";

const app = Fastify({
  logger: true,
});

modelInit()
IndexController(app)
SekolahController(app)
AngkatanController(app)
RuangController(app)
UserController(app)
UserSosialController(app)
PostController(app)
CommentsController(app)



/**
 * Run the server!
 */
const start = async () => {
  try {
    await app.listen({ port: 4000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
