# Star Wars API

## Table of Contents

- [Tech]
- [Up and Running]
    - [Local Setup]
- [REST API]
    - [Endpoints]
- [Contributing]


## Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework.
* [PostgreSQL] - Sequelize is a promise-based ORM for Node.js
## Up and Running

### Local Setup
Make sure you have [Node.js] and the [PostgreSQL] installed.
Install the dependencies and devDependencies and start the server.

```sh
https://github.com/hasnaink007/star_wars_Api.git # or clone your own fork
cd star_wars_Api
npm install # To install NodeJS dependencies.
npm run start:dev # To run project in Development Environment.
npm run start # To run project in Production Environment.
npm run test
```
### Environment Variable setup
```
* export DATABSE_USERNAME="My database username"
* export DATABASE_PASSWORD="My database password"
* export DATABASE_NAME="My database name"
* export DATABASE_HOST="My database host"
```
## REST API

### Endpoints

| Method 			| URI Pattern                 |
| ------------------| --------------------------- |
| `POST`		    | 	/api/planets              |
| `GET` 		    | 	/api/planets              |
| `GET` 		    | 	/api/planets/:id          |
| `POST` 		    | 	/api/planets/:planetId/comments|
| `GET`		        | 	/api/planets/:planetId/comments|


### API Flow



#### Create a new Planet

Post request to `/api/planets`
```
{
	"name": "Yavin IV"
}
```

Response `201 created`
```
{
    "success": true
}
```
#### Get List of Planets

GET request to `/api/planets/`

Response `200 OK`
```
{
    "success": true,
    "data": [
        {
            "createdAt": 1523721098445,
            "updatedAt": 1523721098445,
            "id": 1,
            "name": "Yavin IV",
            "swapi_id": 3,
            "swapi": {
                "name": "Yavin IV",
                "rotation_period": "24",
                "orbital_period": "4818",
                "diameter": "10200",
                "climate": "temperate, tropical",
                "gravity": "1 standard",
                "terrain": "jungle, rainforests",
                "surface_water": "8",
                "population": "1000",
                "residents": [],
                "films": [
                    "https://swapi.co/api/films/1/"
                ],
                "created": "2014-12-10T11:37:19.144000Z",
                "edited": "2014-12-20T20:58:18.421000Z",
                "url": "https://swapi.co/api/planets/3/"
            }
        }]
}
```

#### Find a planet by ID

GET request to `/api/planets/1`

Response `200 OK`
```
{
    "success": true,
    "data": {
        "createdAt": 1523721098445,
        "updatedAt": 1523721098445,
        "id": 1,
        "name": "Yavin IV",
        "swapi_id": 3,
        "swapi": {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.co/api/planets/3/"
        }
    }
}
```

#### Create a new comment

Post request to `/api/planets/1/comments`
```
{
    "body": "Hello, This is a Testing Comment.",
    "score": 5
}
```

Response `201 Created`
```
{
    success: true
}
```

#### Get List of Comments of a given planet

GET request to `/api/planets/1/comments`

Response `200 OK`
```
{
    "success": true,
    "data": [
         {
            "createdAt": 1523690002430,
            "updatedAt": 1523690002430,
            "id": 1,
            "score": 5,
            "body": "Hello, This is a Testing Comment.",
            "planet": 1
        }]
}
```


## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request!



   [git-repo-url]: <https://github.com/hasnaink007/star_wars_Api.git>
   [node.js]: <http://nodejs.org>
   [PostgreSQL]: <https://www.postgresql.org>
   [express]: <http://expressjs.com>
