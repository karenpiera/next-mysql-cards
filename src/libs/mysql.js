import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "156426399",
    port: 3306,
    database: "nextmysqlcrud",
  },
});
