import { db } from "../config/db.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export function IndexController(app) {
  app.get('/', async (request, reply) => {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    return { hello: 'world' }
  })

  app.get('/sync', async (request, reply) => {
    try {
      await db.sync({ force: true });
      return { Succes: true }
    } catch(e){
      console.error('error', e)
    }


  })
}
