const dbConfig = require('./config').dbConfig
const {Pool} = require('pg')

const pool = new Pool({
    host: dbConfig.db_host || 'localhost',
    port: dbConfig.db_port || 5432,
    user: dbConfig.db_user || 'postgres',
    password: dbConfig.db_password || 'postgres',
    database: dbConfig.db_name
})

//TODO: move into some type of migration management
pool.query(`CREATE TABLE IF NOT EXISTS book(
    id INT PRIMARY KEY, 
    title VARCHAR(500),
    publisher VARCHAR(200),
    publication_date DATE,
    language VARCHAR(500),
    license_rights VARCHAR(200)
);`, (error, results) => {
    if (error) {
        throw error
    }

    pool.query(`CREATE TABLE IF NOT EXISTS author(
        id INT PRIMARY KEY NOT NULL, 
        name VARCHAR(200) NOT NULL
    );`, (error, results) => {
        if (error) {
            throw error
        }

        pool.query(`CREATE TABLE IF NOT EXISTS book_author(
            book_id INT REFERENCES book(id) NOT NULL,
            author_id INT REFERENCES author(id) NOT NULL,
            PRIMARY KEY (book_id, author_id)
        );`, (error, results) => {
            if (error) {
                throw error
            }
        })
    })
    
    pool.query(`CREATE TABLE IF NOT EXISTS book_subject(
        book_id INT REFERENCES book(id) NOT NULL,
        subject VARCHAR(200) NOT NULL,
        PRIMARY KEY (book_id, subject)
    );`, (error, results) => {
        if (error) {
            throw error
        }
    })
})

module.exports = {
    insertBook: (book, response) => {
        //TODO: set these variables in a more testable way
        let title = book.title ? `'${book.title}'` : NULL
        let publisher = book.publisher ? `'${book.publisher}'` : NULL
        //TODO: verify date conversion
        let publication_date = book.publicationDate ? `'${book.publicationDate}'` : NULL
        let language = book.language ? `'${book.language}'` : NULL
        let license_rights = book.licenseRights ? `'${book.licenseRights}'` : NULL
        pool.query(`
            INSERT INTO book(id, title, publisher, publication_date, language, license_rights)
            VALUES(${book.id}, ${title}, ${publisher}, ${publication_date}, ${language}, ${license_rights})
            ON CONFLICT DO NOTHING;
        `, response)
    },
    insertAuthor: (author, response) => {
        pool.query(`
            INSERT INTO author(id, name)
            VALUES(${author.id}, '${author.name}')
            ON CONFLICT DO NOTHING;
        `, response)
    },
    insertBookAuthor: (bookId, authorId, response) => {
        pool.query(`
            INSERT INTO book_author(book_id, author_id)
            VALUES(${bookId}, ${authorId})
            ON CONFLICT DO NOTHING;
        `, response)
    },
    insertBookSubject: (bookId, subject, response) => {
        pool.query(`
            INSERT INTO book_subject(book_id, subject)
            VALUES(${bookId}, '${subject}')
            ON CONFLICT DO NOTHING;
        `, response)
    }
}