/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - username
 *       - lastUpdate
 *     properties:
 *       id:
 *         type: number
 *       username:
 *         type: string
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       lastUpdate:
 *         type: number
 *   Users:
 *     type: array
 *     items:
 *       $ref: '#/definitions/User'
 */
export default class User {
  constructor (id, username, first_name, last_name, lastUpdate) {
    this.id = id
    this.username = username
    this.first_name = first_name
    this.last_name = last_name
    this.lastUpdate = lastUpdate
  }
}
