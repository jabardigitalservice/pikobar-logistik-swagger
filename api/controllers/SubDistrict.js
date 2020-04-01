import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /areas/subdistricts:
 *   get:
 *     description: Retrieve the full list of Subdistrict
 *     tags:
 *       - subdistrict
 *     parameters:
 *       - in: query
 *         name: subdistrict_code
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Subdistrict
 *         schema:
 *           $ref: '#/definitions/Subdistricts'
 */
router.get('/', (req, res, next) => {
  const response = dao.retrieveAll()
  Swagger.validateModel('SubDistrict', response)
  res.send(response)
})

/**
 * @swagger
 * /areas/subdistricts/{id}:
 *   get:
 *     description: Retrieve an specific Subdistricts
 *     tags:
 *       - subdistrict
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Subdistricts to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: subdistricts
 *         schema:
 *           $ref: '#/definitions/Subdistricts'
 */
router.get('/:id', (req, res, next) => {
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('SubDistrict', response)
  res.send(response)
})

/**
 * @swagger
 * /areas/subdistricts/{id}:
 *   put:
 *     description: Update lastUpdate field of an Subdistrict
 *     tags:
 *       - subdistrict
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Subdistrict to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as Subdistrict's lastUpdate field
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: updated Subdistrict
 *         schema:
 *           $ref: '#/definitions/Subdistricts'
 */
router.put('/:id', (req, res, next) => {
  const response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate)
  Swagger.validateModel('SubDistrict', response)
  res.send(response)
})

/**
 * @swagger
 * /areas/subdistricts:
 *   post:
 *     description: Create a new Subdistrict
 *     tags:
 *       - subdistrict
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: districtcity
 *         description: Subdistrict object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Subdistricts'
 *     responses:
 *       200:
 *         description: new SubDistrict
 *         schema:
 *           $ref: '#/definitions/Subdistricts'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('SubDistrict', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('SubDistrict', response)
  res.send(response)
})

module.exports = router
