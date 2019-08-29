MongoDB cheatsheet

To Run Mongo Server:
*In Terminal:*
`mongod`

To use mongo in terminal 
*In Terminal - new tab must run with `mongod`* 
- After starting `mongo` in another tab open a new tab and
- `mongo`
- prompt should change from bash `$` to `>`

*Show DBs* or ‘collections’
- `show dbs`

*Show which db is in use*
- `db`

*Switch to a database*
- `use databseName`


*Create a collection*
- `db.createCollection(‘collectionName’)

*Show collections in database*
- `show collections`

*Show data* or show documents 
- `db.collectionName.find()`
- Make it pretty `db.collectionName.find().pretty()

- find something specific 
- From the docs `db.collectionName.find ( <field> : <value> )`
    - How you would actually type it out:
    - `db.collectionName.find( { school: “General Assembly”}
- More from the docs : https://docs.mongodb.com/manual/reference/method/db.collection.find/

- find one 
- `db.collectionName.findOne()`
- find one and show only the name and contribution fields
- `db.collectionName.findOne({}, { name: 1 , contributions :1 })`
  - find one and exclude the id field
- `db.collectionName.findOne( {} , { _id : 0 })`

*Remove set of documents*
- db.collectionName.remove ({state : ’NY’})

*Drop Collection* - warning! Cannot be undone!
- db.collectionName.drop()

*Drop database* - warning! Cannot be undone!
use `dbToBeDropped`
`db.dropDatabase()`

 

*Exit mongo shell*
`⌃  C` or `exit` or `quit()`

*Shut down `mongod`  `⌃  C`

gracefully exit out of terminal 
`exit`

Problem exiting `mongod`?
https://github.com/ga-students/wdi-remote-gizmo/blob/master/unit_2/w05d05/instructor_notes/1.%20MONGO.md

1. ps -A | grep mongod
2. find the line that just mentions mongod, but not grep
3. take note of the number on the left
4. type kill 1774 or whatever that number is. Try mongod again.
5. If that doesn't work, go to /data/db and rm mongod.lock. Try mongod again.


 Basic Crud operations: https://docs.mongodb.com/manual/crud/





