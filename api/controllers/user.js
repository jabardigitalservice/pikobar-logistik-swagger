import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /user:
 *   get:
 *     description: Retrieve the full list of user
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.get('/', (req, res, next) => {
  const response = dao.retrieveAll()
  Swagger.validateModel('User', response)
  res.send(response)
})

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     description: Retrieve an specific user
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the user to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.get('/:id', (req, res, next) => {
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('User', response)
  res.send(response)
})

/**
 * @swagger
 * definitions:
 *   TimeStamp:
 *     type: object
 *     required:
 *       - lastUpdate
 *     properties:
 *       lastUpdate:
 *         type: number
 */

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     description: Update lastUpdate field of an user
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the user to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as user's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.put('/:id', (req, res, next) => {
  Swagger.validateModel('TimeStamp', req.body)
  const response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate)
  Swagger.validateModel('Stock', response)
  res.send(response)
})

/**
 * @swagger
 * /user:
 *   post:
 *     description: Create a new user
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: new user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('User', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('User', response)
  res.send(response)
})

module.exports = router
