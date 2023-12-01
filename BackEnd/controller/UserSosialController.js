import { db } from "../config/db.js";
import { UserSosial } from "../models/UserSosial.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function UserSosialController(app) {
  app.get("/api/v5/UserSosial", async (request, reply) => {
    try {
      const rest = await UserSosial.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v5/UserSosial/:id", async (request, reply) => {
    var res = await UserSosial.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v5/UserSosial", async (request, reply) => {
    try {
      const rest = await UserSosial.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v5/UserSosial/:id", async (request, reply) => {
    try {
      const rest = await UserSosial.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v5/UserSosial/:id", async (request, reply) => {
    var res = await UserSosial.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
