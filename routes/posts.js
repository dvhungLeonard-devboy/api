const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'HelloWorld',
            description: 'Hello HeroesPluss'
        }
    })
})

router.get('/:id', (req, res) => {
    res.json({
        posts: {
            title: 'HelloWorld',
            description: 'Hello HeroesPluss'
        }
    })
})

module.exports = router