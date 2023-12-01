import { db } from "../config/db.js";
import { Comments } from "../models/Comments.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function CommentsController(app) {
  app.get("/api/v7/comments", async (request, reply) => {
    try {
      const rest = await Comments.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v7/comments/:id", async (request, reply) => {
    var res = await Comments.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v7/comments", async (request, reply) => {
    try {
      const rest = await Comments.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v7/comments/:id", async (request, reply) => {
    try {
      const rest = await Comments.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v7/comments/:id", async (request, reply) => {
    var res = await Comments.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
