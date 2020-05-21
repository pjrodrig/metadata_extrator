var assert = require('assert')
const bookParser = require('../src/bookParser')
const xml = require('./test_xml_input')

describe('Parse book from XML', () => {
    describe('when all values are present', () => {
        it('should return a book object with all values populated', () => {
            bookParser.parseXML(xml.xml_all_values, book => {
                let expected = { 
                    id: '1',
                    title: 'Book Title',
                    authors: [ { id: '1', name: 'Author 1' } ],
                    publisher: 'Publisher',
                    publicationDate: '2000-12-01',
                    language: 'Language',
                    subjects: [ 'Subject 1' ],
                    licenseRights: 'License Rights' 
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.authors[0].id, expected.authors[0].id)
                assert.equal(book.authors[0].name, expected.authors[0].name)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.subjects[0], expected.subjects[0])
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })

    describe('when no authors are present', () => {
        it('should return a book object with all values populated w/ an empty authors array', () => {
            bookParser.parseXML(xml.xml_no_authors, book => {
                let expected = { 
                    id: '1',
                    title: 'Book Title',
                    authors: [],
                    publisher: 'Publisher',
                    publicationDate: '2000-12-01',
                    language: 'Language',
                    subjects: [ 'Subject 1' ],
                    licenseRights: 'License Rights' 
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.subjects[0], expected.subjects[0])
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })

    describe('when multiple authors are present', () => {
        it('should return a book object with all values populated w/ multiple authors', () => {
            bookParser.parseXML(xml.xml_multiple_authors, book => {
                let expected = { 
                    id: '1',
                    title: 'Book Title',
                    authors: [
                        {id: '1', name: 'Author 1'},
                        {id: '2', name: 'Author 2'},
                        {id: '3', name: 'Author 3'}
                    ],
                    publisher: 'Publisher',
                    publicationDate: '2000-12-01',
                    language: 'Language',
                    subjects: [ 'Subject 1' ],
                    licenseRights: 'License Rights' 
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.authors[0].id, expected.authors[0].id)
                assert.equal(book.authors[0].name, expected.authors[0].name)
                assert.equal(book.authors[1].id, expected.authors[1].id)
                assert.equal(book.authors[1].name, expected.authors[1].name)
                assert.equal(book.authors[2].id, expected.authors[2].id)
                assert.equal(book.authors[2].name, expected.authors[2].name)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.subjects[0], expected.subjects[0])
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })

    describe('when no subjects are present', () => {
        it('should return a book object with all values populated w/ an empty subjects array', () => {
            bookParser.parseXML(xml.xml_no_subjects, book => {
                let expected = { 
                    id: '1',
                    title: 'Book Title',
                    authors: [
                        {id: '1', name: 'Author 1'}
                    ],
                    publisher: 'Publisher',
                    publicationDate: '2000-12-01',
                    language: 'Language',
                    subjects: [],
                    licenseRights: 'License Rights' 
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.authors[0].id, expected.authors[0].id)
                assert.equal(book.authors[0].name, expected.authors[0].name)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })

    describe('when multiple subjects are present', () => {
        it('should return a book object with all values populated w/ multiple subjects', () => {
            bookParser.parseXML(xml.xml_multiple_subjects, book => {
                let expected = { 
                    id: '1',
                    title: 'Book Title',
                    authors: [
                        {id: '1', name: 'Author 1'}
                    ],
                    publisher: 'Publisher',
                    publicationDate: '2000-12-01',
                    language: 'Language',
                    subjects: [ 'Subject 1', 'Subject 2', 'Subject 3'],
                    licenseRights: 'License Rights' 
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.authors[0].id, expected.authors[0].id)
                assert.equal(book.authors[0].name, expected.authors[0].name)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.subjects[0], expected.subjects[0])
                assert.equal(book.subjects[1], expected.subjects[1])
                assert.equal(book.subjects[2], expected.subjects[2])
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })

    describe('when only the id is present', () => {
        it('should return a book object only the id defined', () => {
            bookParser.parseXML(xml.xml_only_id, book => {
                let expected = { 
                    id: '1',
                    title: undefined,
                    authors: [],
                    publisher: undefined,
                    publicationDate: undefined,
                    language: undefined,
                    subjects: [],
                    licenseRights: undefined
                }
                assert.equal(book.id, expected.id)
                assert.equal(book.title, expected.title)
                assert.equal(book.authors.length, expected.authors.length)
                assert.equal(book.publisher, expected.publisher)
                assert.equal(book.publicationDate, expected.publicationDate)
                assert.equal(book.language, expected.language)
                assert.equal(book.subjects.length, expected.subjects.length)
                assert.equal(book.licenseRights, expected.licenseRights)
            })
        })
    })
})