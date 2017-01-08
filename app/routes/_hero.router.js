// ```
// _hero.router.js


// */app/routes/_hero..router.js*

// ## Hero API object

// HTTP Verb  Route                 Description

// GET        /api/heroes           Get all of the todo items
// GET        /api/todo/:todo_id    Get a single todo item by todo item id
// POST       /api/todo             Create a single todo item
// DELETE     /api/todo/:todo_id    Delete a single todo item
// PUT        /api/todo/:todo_id    Update a todo item with new info

// Load the todo model
import Hero from '../models/hero.model';

export default (app, router) => {


  // for the hearo search
  router.route('/hero-search')
    .get((req, res)=> {
      // retrieve the name
      var name = req.query.name;
      // find all hero with name includes input name
      Hero.find({"name": {$regex: name, $options: 'i'}}, (err, hero)=>{
        if (err)
          res.send(err);
        else
          res.json(hero);
      })
    })
  // ### Hero API Routes

  // Define routes for the hero item API

  router.route('/hero-server')

    // ### Create a hero item

    // Accessed at POST http://localhost:8080/api/hero

    // Create a hero item
    .post((req, res) => {

      Hero.create({
        id: req.body.id,
        name : req.body.name

      }, (err, hero) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Hero created: ${hero}`);

        // Hero.find((err, heroes) => {
        //   if(err)
        //     res.send(err);

        //   res.json(heroes);
        // });
        Hero.find({'id': req.body.id, 'name':req.body.name}, (err, hero)=>{
          if(err)
            res.send(err);
          res.json(hero);
        })
      });
    })

    // ### Get all of the hero items

    // Accessed at GET http://localhost:8080/api/hero
    .get((req, res) => {

      // Use mongoose to get all hero items in the database
      Hero.find((err, hero) => {

        if(err)
          res.send(err);

        else
          res.json(hero);
      });
    });

  router.route('/hero-server/:id')

//     // ### Get a todo item by ID

//     // Accessed at GET http://localhost:8080/api/todo/:todo_id
//     .get((req, res) => {

//       // Use mongoose to a single todo item by id in the database
//       Todo.findOne(req.params.todo_id, (err, todo) => {

//         if(err)
//           res.send(err);

//         else
//           res.json(todo);
//       });
//     })

//     // ### Update a todo item by ID

    // Accessed at PUT http://localhost:8080/api/todo/:todo_id
    .put((req, res) => {

      // use our todo model to find the todo item we want
      Hero.findOne({

        'id' : req.params.id

      }, (err, hero) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
        if (req.body.name)
          hero.name = req.body.name;

        // save the todo item
        return hero.save((err) => {

          if (err)
            res.send(err);

          return res.send(hero);

        });
      });
    })

    // ### Delete a todo item by ID

    // Accessed at DELETE http://localhost:8080/api/todo/:todo_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete todo with id: ${req.params.todo_id}`);

      Hero.remove({

        id : req.params.id
      }, (err, hero) => {

        if(err)
          res.send(err);

        console.log('Hero successfully deleted!');

        Hero.find((err, heroes) => {
          if(err)
            res.send(err);

          res.json(heroes);
        });
      });
    });
};
