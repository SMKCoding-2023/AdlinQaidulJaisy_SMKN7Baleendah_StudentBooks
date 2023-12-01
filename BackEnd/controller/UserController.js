import { db } from "../config/db.js";
import { User } from "../models/User.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function UserController(app) {
  app.get("/api/v4/user", async (request, reply) => {
    try {
      const rest = await User.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v4/user/:id", async (request, reply) => {
    var res = await User.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v4/user", async (request, reply) => {
    try {
      const rest = await User.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v4/user/:id", async (request, reply) => {
    try {
      const rest = await User.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v4/user/:id", async (request, reply) => {
    var res = await User.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
