import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /v1/areas/cities:
 *   get:
 *     description: Retrieve the full list of districtcity
 *     tags:
 *       - districtcity
 *     parameters:
 *       - in: query
 *         name: kabkota_kode
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: districtcity
 *         schema:
 *           $ref: '#/definitions/Districtcitys'
 */
router.get('/', (req, res, next) => {
  const response = {
      data: [
        {
          'id': '1',
          'kemendagri_provinsi_kode': '35',
          'kemendagri_provinsi_nama': 'Jawa Barat',
          'kemendagri_kabupaten_kode': '35.02',
          'kemendagri_kabupaten_nama': 'Kota Bandung'
        },
        {
          'id': '2',
          'kemendagri_provinsi_kode': '35',
          'kemendagri_provinsi_nama': 'Jawa Barat',
          'kemendagri_kabupaten_kode': '35.03',
          'kemendagri_kabupaten_nama': 'Kota Cimahi'
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
  // Swagger.validateModel('Districtcity', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/areas/cities/{id}:
 *   get:
 *     description: Retrieve an specific Districtcity
 *     tags:
 *       - districtcity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Districtcity to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: districtcity
 *         schema:
 *           $ref: '#/definitions/Districtcitys'
 */
router.get('/:id', (req, res, next) => {
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('Districtcity', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/areas/cities/{id}:
 *   put:
 *     description: Update lastUpdate field of an Districtcity
 *     tags:
 *       - districtcity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the Districtcity to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as Districtcity's lastUpdate field
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: updated Districtcity
 *         schema:
 *           $ref: '#/definitions/Districtcitys'
 */
router.put('/:id', (req, res, next) => {
  const response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate)
  Swagger.validateModel('Districtcity', response)
  res.send(response)
})

/**
 * @swagger
 * /v1/areas/cities:
 *   post:
 *     description: Create a new districtcity
 *     tags:
 *       - districtcity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: districtcity
 *         description: districtcity object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Districtcitys'
 *     responses:
 *       200:
 *         description: new districtcity
 *         schema:
 *           $ref: '#/definitions/Districtcitys'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('Districtcity', req.body)
  const response = dao.create(req.body)
  Swagger.validateModel('Districtcity', response)
  res.send(response)
})

module.exports = router
