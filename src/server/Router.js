const { NOT_FOUND } = require('./status')

class Router {
  routes = {
    GET: new Map(),
    POST: new Map(),
    PUT: new Map(),
    DELETE: new Map(),
  }
  
  handle = (method, path, handler) => {
    return this.routes[method].set(path, handler)
  }

  processRequest = async (req, res) => {
    let { method, url } = req
    if (this.routes[method].has(url)) {
      return this.routes[method].get(url)(req, res)
    } else {
      return res
        .status('NOT_FOUND')
        .json({
          ok: false,
          error: { code: NOT_FOUND, message: 'Not found' }
        })
    }
  }
}

module.exports = Router

