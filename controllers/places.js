//const router = require('express').Router()
//const places = require('../models/places.js')

//router.get('/', (req, res) => {
//    res.render('places/index', { places })
//})

// More code ...

//router.get('/new', (req, res) => {
//    res.render('places/new')
//  })
  
// GET /places
//app.get('/', (req, res) => {
//   let places = [{
//        name: 'H-Thai-ML',
//        city: 'Seattle',
//        state: 'WA',
//        cuisines: 'Thai, Pan-Asian',
//        pic: 'http://placekitten.com/250/250'
//      }, {
//        name: 'Coding Cat Cafe',
//        city: 'Phoenix',
//        state: 'AZ',
//       cuisines: 'Coffee, Bakery',
//        pic: 'http://placekitten.com/250/250'
//      }]      
//      res.render('places/index', { places })
//  })
  
//module.exports = router

// POST /places
//router.post('/', (req, res) => {
//    console.log(req.body)
//    if (!req.body.pic) {
      // Default image if one is not provided
//      req.body.pic = 'http://placekitten.com/400/400'
//    }
//    if (!req.body.city) {
//      req.body.city = 'Anytown'
//    }
//    if (!req.body.state) {
//      req.body.state = 'USA'
//    }
//    places.push(req.body)
//    res.redirect('/places')
//  })

//Pass the appropriate data item from the places array to the render method so that it is available for use in the view.
//  router.get('/:id/edit', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
//      res.render('places/edit', { place: places[id] })
//    }
//  })
  
  // PUT /places
//  router.put('/:id', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
        // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
            // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//      if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }
  
//        // Save the new data into places[id]
//        places[id] = req.body
//        res.redirect(`/places/${id}`)
//    }
//  })
  

//Updating Index and Show
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

//Fix the Show Page and Links
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
