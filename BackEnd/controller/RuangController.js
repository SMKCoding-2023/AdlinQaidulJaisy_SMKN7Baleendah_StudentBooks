import { db } from "../config/db.js";
import { Ruang } from "../models/Ruang.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function RuangController(app) {
  app.get("/api/v3/ruang", async (request, reply) => {
    try {
      const rest = await Ruang.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v3/ruang/:id", async (request, reply) => {
    var res = await Ruang.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v3/ruang", async (request, reply) => {
    try {
      const rest = await Ruang.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v3/ruang/:id", async (request, reply) => {
    try {
      const rest = await Ruang.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v3/ruang/:id", async (request, reply) => {
    var res = await Ruang.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
