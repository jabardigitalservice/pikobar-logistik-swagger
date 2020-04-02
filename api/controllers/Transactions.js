import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /v1/transactions:
 *   get:
 *     description: Retrieve the full list of Transactions
 *     tags:
 *       - transactions
 *     parameters:
 *       - in: query
 *         name: kabkota_kode
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Transactions
 *         schema:
 *           $ref: '#/definitions/Transactions'
 */
router.get('/', (req, res, next) => {
  const response = {
    data: [
      {
        'id': '1',
        'location_address': 'Kota Bandung',
        'quantity': 12344,
        'time': '2020-04-02T06:19:28.760Z'
      },
      {
        'id': '2',
        'location_address': 'Kota Cimahi',
        'quantity': 12344,
        'time': '2020-04-02T06:19:28.760Z'
      }
    ],
    _meta: {
      "itemCount": 2,
      "perPage": 10,
      "totalPages": 1,
      "currentPage": 1,
      "pagingCounter": 1,
      "hasPrevPage": false,
      "hasNextPage": true,
      "prevPage": null,
      "nextPage": 1
    }
  }
  // Swagger.validateModel('Transactions', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/transactions/{id}:
 *   get:
 *     description: Retrieve an specific Transactions
 *     tags:
 *       - transactions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Transactions to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Transactions
 *         schema:
 *           $ref: '#/definitions/Transactions'
 */
router.get('/:id', (req, res, next) => {
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('Transactions', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/transactions/{id}:
 *   put:
 *     description: Update lastUpdate field of an Transactions
 *     tags:
 *       - transactions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Transactions to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as Transactions's lastUpdate field
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: updated Transactions
 *         schema:
 *           $ref: '#/definitions/Transactions'
 */
router.put('/:id', (req, res, next) => {
  const response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate)
  Swagger.validateModel('Transactions', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/transactions:
 *   post:
 *     description: Create a new Transactions
 *     tags:
 *       - transactions
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: transactions
 *         description: Transactions object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transactions'
 *     responses:
 *       200:
 *         description: new Transactions
 *         schema:
 *           $ref: '#/definitions/Transactions'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('Transactions', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('Transactions', response)
  res.send(response)
})

module.exports = router
