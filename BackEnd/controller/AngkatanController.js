import { db } from "../config/db.js";
import { Angkatan } from "../models/Angkatan.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function AngkatanController(app) {
  app.get("/api/v2/angkatan", async (request, reply) => {
    try {
      const rest = await Angkatan.findAll({
        include: [{ association: Angkatan.sekolah }],
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v2/angkatan/:id", async (request, reply) => {
    var res = await Angkatan.findOne({
      where: { id: request.params.id },
      include: [{ association: Angkatan.sekolah }],
    });
    return res;
  });

  app.post("/api/v2/angkatan", async (request, reply) => {
    try {
      const rest = await Angkatan.create(request.body, {
        include: [{ association: Angkatan.sekolah }],
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v2/angkatan/:id", async (request, reply) => {
    try {
      const rest = await Angkatan.update(request.body, {
        where: {
          id: request.params.id,
        },
        include: [{ association: Angkatan.sekolah }],
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v2/angkatan/:id", async (request, reply) => {
    var res = await Angkatan.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
