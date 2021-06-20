const routesAdapt = (logger, controllerHandler) => {
  return async (req, res, next) => {
    const httpRequest = {
      body: req.body,
      headers: req.headers
    }
    try {
      const result = await controllerHandler(httpRequest)
      logger.error({ method: req.method, path: req.path, statusCode: result.statusCode })

      if (result.statusCode >= 400) {
        return res.status(result.statusCode).header(result.headers).json({ statusCode: result.statusCode, message: result.body })
      }

      return res.status(result.statusCode).header(result.headers).json(result.body)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = { routesAdapt }
