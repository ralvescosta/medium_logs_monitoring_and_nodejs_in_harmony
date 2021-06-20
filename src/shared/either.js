class Left {
  constructor (value) {
    this.value = value
  }

  isLeft () {
    return true
  }

  isRight () {
    return false
  }
}

class Right {
  constructor (value) {
    this.value = value
  }

  isLeft () {
    return false
  }

  isRight () {
    return true
  }
}

const left = (l) => {
  return new Left(l)
}

const right = (a) => {
  return new Right(a)
}

module.exports = { Left, Right, left, right }
