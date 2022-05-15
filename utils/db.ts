import { createPool } from "mysql2";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak-etap7',
    namedPlaceholders: true,
    decimalNumbers: true,
});