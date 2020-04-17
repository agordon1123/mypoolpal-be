# TODOs

- [X] update readings to share foreign key with pool
    - pools already share a foreign key with user
- update user table to contain zipcode
- create pool equipment API with at least 10 main pieces of equipment per type
- create an add equipment for equipment that does not exist on API
    - create table for added equipment with references to user id and pool
    - this way we can seperate this added equipment from other users
    - monitor this and you can add to API   