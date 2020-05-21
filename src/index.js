const bookParser = require('./bookParser')
const db = require('./db')

//let path = './rdf-files/cache/epub/10008/pg10008.rdf'  //85/pg85.rdf'

const NULL = 'NULL'

//Stole this from here to save time
//https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
const fs = require("fs")
const path = require("path")
 
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)
 
  arrayOfFiles = arrayOfFiles || []
 
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })
 
  return arrayOfFiles
}
//end stolen stuff

let processFile = (path) => {
    bookParser.parseFile(path, book => {
        console.log(book)
        //TODO: break into smaller methods
        db.insertBook(book, err => {
            if(err) {
                console.error(err)
                return
            }
            for(let i = 0; i < book.authors.length; i++) {
                let author = book.authors[i];
                db.insertAuthor(author, err => {
                    if(err) {
                        console.error(err)
                        return
                    }
                    db.insertBookAuthor(book.id, author.id, err => {
                        if(err) {
                            console.error(err)
                            return
                        }
                    })
                })
            }
            for(let i = 0; i < book.subjects.length; i++) {
                db.insertBookSubject(book.id, book.subjects[i], err => {
                    if(err) {
                        console.error(err)
                        return
                    }
                })
            }
        })
    })
}


let basePath = './rdf-files/cache/epub/'
//replacing \\src, because __dirname reads from this directory
//ideally I'd just implement a better solution for getting paths recursively
let paths = getAllFiles(basePath).map(p => p.replace('\\src', ''))

//this definitely wont work, as I need to stagger open files and queries
for(let i = 0; i < paths.length; i++) {
    processFile(paths[0])
}