import { db } from "../config/db.js";
import { Post } from "../models/Post.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function PostController(app) {
  app.get("/api/v6/post", async (request, reply) => {
    try {
      const rest = await Post.findAll();
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.get("/api/v6/post/:id", async (request, reply) => {
    var res = await Post.findOne({ where: { id: request.params.id } });
    return res;
  });

  app.post("/api/v6/post", async (request, reply) => {
    try {
      const rest = await Post.create(request.body);
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.put("/api/v6/post/:id", async (request, reply) => {
    try {
      const rest = await Post.update(request.body, {
        where: {
          id: request.params.id,
        },
      });
      return rest;
    } catch (e) {
      console.error("error", e);
    }
  });

  app.delete("/api/v6/post/:id", async (request, reply) => {
    var res = await Post.destroy({
      where: {
        id: request.params.id,
      },
    });
    return res;
  });
}
