const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryText = `SELECT description, image_url, id FROM item`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`ERROR ON QUERY ${error}`)
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('item arrived at server', req.body);
    let sqlText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3 );`;
    pool.query(sqlText, [req.body.description, req.body.image_url, req.body.user_id]).then( () => {
        res.sendStatus(200);    
    }).catch( error => {
        console.log('error in adding item to database ', error)
        res.sendStatus(500);
    });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/', (req, res) => {
    console.log('id of item to delete and user to delete arrived at server', req.body);
    let sqlText = `DELETE FROM "item" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(sqlText, [req.body.item_id, req.body.user_id]).then((response) => {
        console.log('deleted', response);
        res.sendStatus(200);
    }).catch( error => {
        console.log('error', error);
        res.sendStatus(500);
    });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;