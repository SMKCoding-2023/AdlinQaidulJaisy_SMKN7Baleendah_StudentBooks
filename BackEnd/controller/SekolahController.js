import { db } from "../config/db.js";
import { Sekolah } from "../models/Sekolah.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function SekolahController(app) {
  app.get("/api/v1/sekolah", async (request, reply) => {
    try {
      const rest = await Sekolah.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v1/sekolah/:id", async (request, reply) => {
    var res = await Sekolah.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v1/sekolah", async (request, reply) => {
    try {
      const rest = await Sekolah.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v1/sekolah/:id", async (request, reply) => {
    try {
      const rest = await Sekolah.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v1/sekolah/:id", async (request, reply) => {
    var res = await Sekolah.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
