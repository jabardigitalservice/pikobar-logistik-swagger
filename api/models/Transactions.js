/**
 * @swagger
 * definitions:
 *   Transaction:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       id_product:
 *         type: integer
 *       id_user:
 *         type: integer
 *       id_recipient:
 *         type: integer
 *       name:
 *         type: string
 *       contact_person:
 *         type: string
 *       phone_number:
 *         type: string
 *       location_address:
 *         type: string
 *       location_subdistrict_code:
 *         type: string
 *       location_district_code:
 *         type: string
 *       location_province_code:
 *         type: string
 *       quantity:
 *         type: integer
 *       time:
 *         type: string
 *         format: date-time
 *       note:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date-time
 *       updatedAt:
 *         type: string
 *         format: date-time
 *   Transactions:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Transaction'
 */
export default class Transaction {
  constructor (
    id,
    id_product,
    id_user,
    id_recipient,
    name,
    contact_person,
    phone_number
  ) {
    this.id = id
    this.id_product = id_product
    this.id_user = id_user
    this.id_recipient = id_recipient
    this.name = name
    this.contact_person = contact_person
    this.phone_number = phone_number
  }
}
