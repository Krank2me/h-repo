# h-repo

## Backend prerequisites

* [git](https://git-scm.com/)
* [nodejs](https://nodejs.org/es/) >= v14.17.3
* npm >= 6.14.13
* [MongoDB](https://account.mongodb.com/account/login), create an account if haven't

## Frontend prerequisites

* [nodejs](https://nodejs.org/es/) >= v14.17.3
* npm >= 6.14.13

## Frontend Getting Started

* clone the repository, get in to `client` folder
* run `npm install`
* run `npm start`

## Backend Getting Started

* clone the repository, get in to `server` folder
* run `npm install`
* create and configure the `.env` file in the root project with following data
  ```shell
  PORT=4000
  MONGO_DB_URI= db url
  ```
* run `npm run dev`


## API URL's

* Get buildings: `localhost:4000/api/v1/buildings`
  * response body:
   ```json
   [
    {
        "_id": "624ce52fbf9bc46da7ab3880",
        "name": "Exhibit",
        "address": "56 Fulton Street",
        "city": "New York",
        "state": "NY",
        "postal": 10038,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            },
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab3885",
        "name": "The Morgan",
        "address": "160 Morgan Street",
        "city": "Jersey City",
        "state": "NJ",
        "postal": 7302,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            },
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab388b",
        "name": "Chelsea Stratus",
        "address": "101 West 24th Street",
        "city": "New York",
        "state": "NY",
        "postal": 10010,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab3895",
        "name": "One Ten Third",
        "address": "110 3rd Avenue",
        "city": "New York",
        "state": "NY",
        "postal": 10003,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab389a",
        "name": "88 Leonard",
        "address": "88 Leonard Street",
        "city": "New York",
        "state": "NY",
        "postal": 10013,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            },
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab38e5",
        "name": "303 E 33rd",
        "address": "303 East 33rd Street",
        "city": "New York",
        "state": "NY",
        "postal": 10016,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab38d3",
        "name": "10 Rutgers",
        "address": "10 Rutgers Street",
        "city": "New York",
        "state": "NY",
        "postal": 10002,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab38bd",
        "name": "Exhibit",
        "address": "29 Cliff Street",
        "city": "New York",
        "state": "NY",
        "postal": 10038,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab38d5",
        "name": "The Jefferson",
        "address": "211 East 13th Street",
        "city": "New York",
        "state": "NY",
        "postal": 10003,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab3907",
        "name": "565 Broome",
        "address": "565 Broome Street",
        "city": "New York",
        "state": "NY",
        "postal": 10013,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            }
        ]
    },
    {
        "_id": "624ce52fbf9bc46da7ab3909",
        "name": "133 W 22nd",
        "address": "133 West 22nd Street",
        "city": "New York",
        "state": "NY",
        "postal": 10011,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce530bf9bc46da7ab3953",
        "name": "Exhibit",
        "address": "60 Fulton Street",
        "city": "New York",
        "state": "NY",
        "postal": 10038,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce530bf9bc46da7ab3957",
        "name": "249 Broome",
        "address": "249 Broome Street",
        "city": "New York",
        "state": "NY",
        "postal": 10002,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624cc76a21ae7b539b98ac39",
        "name": "The Charleston",
        "address": "225 East 34th Street",
        "city": "New York",
        "state": "NY",
        "postal": 10016,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "62324c06d0a8c1372303c880",
        "name": "The Anthem",
        "address": "222 East 34th Street",
        "city": "New York",
        "state": "NY",
        "postal": 10016,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce530bf9bc46da7ab392c",
        "name": "SoHo Court",
        "address": "301 Elizabeth Street",
        "city": "New York",
        "state": "NY",
        "postal": 10012,
        "plans": [
            {
                "monthsFree": 1,
                "label": "Premium",
                "price": 50
            },
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    },
    {
        "_id": "624ce530bf9bc46da7ab393e",
        "name": "50 Franklin",
        "address": "50 Franklin Street",
        "city": "New York",
        "state": "NY",
        "postal": 10013,
        "plans": [
            {
                "monthsFree": 0,
                "label": "Basic",
                "price": 30
            }
        ]
    }
  ]
  ```
  
* Post user `localhost:4000/api/v1/users`
  * request body:
   ```json
   {
    "firstName": "Jhon",
    "lastName": "Doe",
    "address": "Cll 47A 104-20",
    "apartment": 201,
    "plan": [
        {
            "monthsFree": 1,
            "label": "Premium",
            "price": "50"
        }
    ],
    "email": "jhon.doe@micorreo.com",
    "phone": "3174759715"
    }
    ```
   * Response body:
    ```json
    {
    "firstName": "Jhon",
    "lastName": "Doe",
    "address": "Cll 47A 104-20",
    "apartment": 201,
    "plan": [
        {
            "monthsFree": 1,
            "label": "Premium",
            "price": "50",
            "_id": "629003edf6d377efed3a5085"
        }
    ],
    "email": "jhon.doe@micorreo.com",
    "phone": "3174759715",
    "_id": "629003edf6d377efed3a5084",
    "__v": 0
    }
    ```

