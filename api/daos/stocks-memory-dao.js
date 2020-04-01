import userModel from '../models/User'

export default class StocksMemoryDAO {
  constructor () {
    this.data = new Map()

    this.createUser(1, 'admin', 'Admin Dinkes', 'admin@example.com')
  }

  createUser (id, username, fullname, email) {
    this.data.set(id, new userModel(id, username, fullname, email))
  }

  retrieveAll () {
    return Array.from(this.data.values())
  }

  retrieve (id) {
    if (this.data.has(id)) {
      return this.data.get(id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  update (id) {
    if (this.data.has(id)) {
      const stock = this.data.get(id)
      return this.retrieve(stock.id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  create (user) {
    if (this.data.has(user.id)) {
      throw new Error(`An stock with id ${user.id} already exists`)
    } else {
      this.createUser(user.id, user.username, user.fullname, user.email)
      return this.retrieve(user.id)
    }
  }
}
