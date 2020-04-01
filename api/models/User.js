/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       username:
 *         type: string
 *       fullname:
 *         type: string
 *       email:
 *         type: string
 *       role:
 *         type: string
 *       code_district_city:
 *         type: string
 *       name_district_city:
 *         type: string
 *       hash:
 *         type: string
 *         format: password
 *       salt:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date-time
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       required:
 *         - email
 *         - username
 *         - password
 *   Users:
 *     type: array
 *     items:
 *       $ref: '#/definitions/User'
 */
export default class User {
  constructor (id, username, fullname, email) {
    this.id = id
    this.username = username
    this.fullname = fullname
    this.email = email
  }
}
