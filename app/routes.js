const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/sign-in-answer', function (req, res) {
    var username = req.session.data['username']
    if(username.toLowerCase() == 'row'){
        res.redirect('row-dashboard')
    }
        res.redirect('dashboard');
  
})

module.exports = router
