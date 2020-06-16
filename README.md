# How to run

## Install dependencies

`npm ci`

## Set env variables

Copy .env.example to .env and set actual values.

TYPEORM_LOGGING should be `true`.

## Create database

Default database name in .env is `typeorm-insert`.

## Run

`npm run start`

## Bug info

Database: `mysql`.

If entity has `@CreateDateColumn`, after `insert` `users`, many identical `select` invoked too (number of `select` equal to the number of `users`).

Example:

```sql
query: COMMIT
query: INSERT INTO `user`(`id`, `firstName`, `lastName`, `age`, `createdAt`) VALUES (DEFAULT, ?, ?, ?, DEFAULT), (DEFAULT, ?, ?, ?, DEFAULT), (DEFAULT, ?, ?, ?, DEFAULT), (DEFAULT, ?, ?, ?, DEFAULT), (DEFAULT, ?, ?, ?, DEFAULT) -- PARAMETERS: ["fn1","ln1",30,"fn2","ln2",31,"fn3","ln3",32,"fn4","ln4",33,"fn5","ln5",34]
query: SELECT `User`.`id` AS `User_id`, `User`.`createdAt` AS `User_createdAt` FROM `user` `User` WHERE
`User`.`id` = ? -- PARAMETERS: [41]
query: SELECT `User`.`id` AS `User_id`, `User`.`createdAt` AS `User_createdAt` FROM `user` `User` WHERE
`User`.`id` = ? -- PARAMETERS: [41]
query: SELECT `User`.`id` AS `User_id`, `User`.`createdAt` AS `User_createdAt` FROM `user` `User` WHERE
`User`.`id` = ? -- PARAMETERS: [41]
query: SELECT `User`.`id` AS `User_id`, `User`.`createdAt` AS `User_createdAt` FROM `user` `User` WHERE
`User`.`id` = ? -- PARAMETERS: [41]
query: SELECT `User`.`id` AS `User_id`, `User`.`createdAt` AS `User_createdAt` FROM `user` `User` WHERE
`User`.`id` = ? -- PARAMETERS: [41]
```
