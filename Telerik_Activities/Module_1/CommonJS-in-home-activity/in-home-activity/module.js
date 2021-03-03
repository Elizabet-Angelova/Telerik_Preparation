const { readFileSync, writeFileSync, renameSync } = require('fs')

const fileRead = (path) => {
    try {
        let result = readFileSync(path, 'utf8')
        return result
    } catch (error) {
        return ('Can`t execute `fileRead` function!')
    }
}

const fileJoin = (newPath, ...paths) => {
    try {
        let content = ''
        for (let el of paths) {
            text = fileRead(el)
            content += text + `\n`
        }

        writeFileSync(newPath, content)
        return (`Created joined file at ${newPath}`)
    } catch (error) {
        return 'Can`t execute `fileJoin` function!'
    }
}

const fileRename = (filePath, newPath) => {
    try {
        renameSync(filePath, newPath)
        return `File ${filePath} renamed to ${newPath}`
    } catch (error) {
        return 'File couldn`t be renamed'
    }
}


module.exports = {
    fileRead,
    fileJoin,
    fileRename
}