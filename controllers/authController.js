const Request = require('../error/index')
const loginFailure = (req, res) => {
  res.send('something went wrong...')
}

const register = (req, res) => {
  // res.send('register')
  // res.status(200).json({ register: 'sucess...' })
  const { name, email, password, lastName } = req.body
  if (!name || !email || !password) {
    res.status(400).json({
      Error: 'Please provide all valuess',
    })
    throw new Request.BadRequestError('Pleasse provide all values')
  }

  res.status(201).json({
    user: {
      email: email,
      lastName: lastName || 'NULL',
      fastName: name,
    },
  })
}

const protected = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
    })
  }
}

const logout = (req, res) => {
  if (req.user) {
    req.logout()
    req.session.destroy()
    res.status(200).json({ success: true, message: 'logout' })
  }
}

module.exports = { loginFailure, protected, logout, register }
