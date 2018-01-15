import * as express from 'express'
import * as mustacheExpress from 'mustache-express'
import * as asyncHandler from 'express-async-handler'

import parkingRequest from './requests/parking/index'
import yogaRequest from './requests/yoga/index'

class App {
  public express

  constructor () {
    this.express = express()
    this.configureViewEngine()
    this.mountRoutes()
  }

  private configureViewEngine (): void {
    this.express.engine('mustache', mustacheExpress())
    this.express.set('view engine', 'mustache')
    this.express.set('views', `${__dirname}/../views`)
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', asyncHandler(async (req, res) => {
      const resp = await yogaRequest()
      // res.render('index')
      res.json(resp)
    }))
    this.express.use('/', router)
  }
}

export default new App().express
