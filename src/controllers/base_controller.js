class BaseController {
  ok (body, headers) {
    return {
      statusCode: 200,
      body,
      headers
    }
  }

  noContent (body, headers) {
    return {
      statusCode: 204,
      body,
      headers
    }
  }

  badRequest (body, headers) {
    return {
      statusCode: 400,
      body,
      headers
    }
  }

  unauthorized (body, headers) {
    return {
      statusCode: 401,
      body,
      headers
    }
  }

  notFound (body, headers) {
    return {
      statusCode: 404,
      body,
      headers
    }
  }

  conflict (body, headers) {
    return {
      statusCode: 409,
      body,
      headers
    }
  }

  internalError (body, headers) {
    return {
      statusCode: 500,
      body,
      headers
    }
  }
}

module.exports = { BaseController }
