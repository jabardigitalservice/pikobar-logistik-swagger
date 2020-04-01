/**
 * @swagger
 * definitions:
 *   Districtcity:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       kemendagri_provinsi_kode:
 *         type: string
 *       kemendagri_provinsi_nama:
 *         type: string
 *       kemendagri_kabupaten_kode:
 *         type: string
 *       kemendagri_kabupaten_nama:
 *         type: string
 *       dinkes_kota_kode:
 *         type: string
 *       required:
 *         - kemendagri_provinsi_kode
 *         - kemendagri_provinsi_nama
 *         - kemendagri_kabupaten_kode
 *         - kemendagri_provinsi_nama
 *   Districtcitys:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Districtcity'
 */
export default class Districtcity {
  constructor (
    id,
    kemendagri_provinsi_kode,
    kemendagri_provinsi_nama,
    kemendagri_kabupaten_kode,
    kemendagri_kabupaten_nama,
    dinkes_kota_kode
  ) {
    this.id = id
    this.kemendagri_provinsi_kode = kemendagri_provinsi_kode
    this.kemendagri_provinsi_nama = kemendagri_provinsi_nama
    this.kemendagri_kabupaten_kode = kemendagri_kabupaten_kode
    this.kemendagri_provinsi_nama = kemendagri_kabupaten_nama
    this.dinkes_kota_kode = dinkes_kota_kode
  }
}
