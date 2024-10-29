const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())

// Stockage temporaire des utilisateurs (remplacer par une base de données en production)
const users = []

// Route pour l'inscription
router.post('/register', (req, res) => {
  const { username, email, password } = req.body

  // Vérifier si l'utilisateur existe déjà
  const userExists = users.some((user) => user.email === email)
  if (userExists) {
    return res.status(400).json({ message: 'Utilisateur déjà inscrit.' })
  }

  users.push({ username, email, password })
  res.status(201).json({ message: 'Inscription réussie!' })
})

// Route pour la connexion
router.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(
    (user) => user.email === email && user.password === password
  )

  if (!user) {
    return res.status(400).json({ message: 'Identifiants incorrects.' })
  }

  res.status(200).json({ message: 'Connexion réussie!' })
})

module.exports = router
