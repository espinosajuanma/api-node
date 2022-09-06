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
      try {
        return await this.routes[method].get(url)(req, res)
      } catch (e) {
        return res.error('SERVER_ERROR', e)
      }
    }
    return res.error('NOT_FOUND')
  }
}

module.exports = Router

