/**
 * @swagger
 * definitions:
 *   SubDistrict:
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
 *       kemendagri_kecamatan_kode:
 *         type: string
 *       kemendagri_kecamatan_nama:
 *         type: string
 *       required:
 *         - kemendagri_provinsi_kode
 *         - kemendagri_provinsi_nama
 *         - kemendagri_kabupaten_kode
 *         - kemendagri_kabupaten_nama
 *         - kemendagri_kecamatan_kode
 *         - kemendagri_kecamatan_nama
 *   Subdistricts:
 *     type: array
 *     items:
 *       $ref: '#/definitions/SubDistrict'
 */
export default class SubDistrict {
  constructor (
    id,
    kemendagri_provinsi_kode,
    kemendagri_provinsi_nama,
    kemendagri_kabupaten_kode,
    kemendagri_kabupaten_nama,
    kemendagri_kecamatan_kode,
    kemendagri_kecamatan_nama
  ) {
    this.id = id
    this.kemendagri_provinsi_kode = kemendagri_provinsi_kode
    this.kemendagri_provinsi_nama = kemendagri_provinsi_nama
    this.kemendagri_kabupaten_kode = kemendagri_kabupaten_kode
    this.kemendagri_provinsi_nama = kemendagri_provinsi_nama
    this.kemendagri_kecamatan_kode = kemendagri_kecamatan_kode
    this.kemendagri_kecamatan_nama = kemendagri_kecamatan_nama
  }
}
