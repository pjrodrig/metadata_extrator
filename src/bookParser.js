const fs = require('fs')
const xml2js = require('xml2js')

let parser = new xml2js.Parser();

const RDF = 'rdf:RDF'
const EBOOK = 'pgterms:ebook'
const ABOUT = 'rdf:about'
const ID_PREFIX = 'ebooks/'
const TITLE = 'dcterms:title'
const CREATOR = 'dcterms:creator'
const AGENT = 'pgterms:agent'
const AUTHOR_ID_PREFIX = '2009/agents/'
const NAME = 'pgterms:name'
const PUBLISHER = 'dcterms:publisher'
const ISSUED = 'dcterms:issued'
const LANGUAGE = 'dcterms:language'
const DESCRIPTION = 'rdf:Description'
const VALUE = 'rdf:value'
const SUBJECT ='dcterms:subject'
const RIGHTS = 'dcterms:rights'

/**
 * Extract a value from the specified xml path if it exists, otherwise returns undefined
 * @param source - javascript object or array from which to extract data
 * @param path - array containing string or int keys
 */
let extractValueByPath = (source, path) => {
    path.forEach(pathPart => {
        source = source[pathPart] || {emptyObject: true}
    })
    return source.emptyObject ? undefined : source
}

const parseFile = (path, response) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        parseXML(data, response)
    })
}

const parseXML = (data, response) => {
    parser.parseString(data, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        let bookData = extractValueByPath(result, [RDF, EBOOK, 0])
        let bookMetadata = {
            id: (extractValueByPath(bookData, ['$', ABOUT]) || '').replace(ID_PREFIX, ''),
            title: extractValueByPath(bookData, [TITLE, 0]),
            authors: (extractValueByPath(bookData, [CREATOR]) || []).map(creator => {
                let agent = extractValueByPath(creator, [AGENT, 0])
                return {
                    id: (extractValueByPath(agent, ['$', ABOUT]) || '').replace(AUTHOR_ID_PREFIX, ''),
                    name: extractValueByPath(agent, [NAME, 0])
                }
            }),
            publisher: extractValueByPath(bookData, [PUBLISHER, 0]),
            publicationDate: extractValueByPath(bookData, [ISSUED, 0, '_']),
            language: extractValueByPath(bookData, [LANGUAGE, 0, DESCRIPTION, 0, VALUE, 0, '_']),
            subjects: (extractValueByPath(bookData, [SUBJECT]) || []).map(subject => {
                return extractValueByPath(subject, [DESCRIPTION, 0, VALUE, 0])
            }),
            licenseRights: extractValueByPath(bookData, [RIGHTS, 0])
        }

        response(bookMetadata)
    })
}

module.exports = {
    parseFile: parseFile,
    parseXML: parseXML
}