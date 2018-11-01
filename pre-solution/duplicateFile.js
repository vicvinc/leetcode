/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const pathToFile = file => {
  let dirInfo = file.split(' ')
  let dir = dirInfo[0]
  let files = []

  for (let i = 1, ii = dirInfo.length; i < ii; i++) {
    let curFile = dirInfo[i]
    let fileContent = curFile.split('(')[1].split(')')[0]
    // console.log('filecontent ===>', fileContent)
    let fileName = curFile.split('(')[0]

    let parseFile = {
      path: dir,
      name: fileName,
      content: fileContent
    }
    files.push(parseFile)
  }
  return files  
}

var findDuplicate = function(paths) {
    let allFiles = []
    for (let p of paths) {
      let files = pathToFile(p)
      allFiles = allFiles.concat(files)
    }
    console.log('===>', allFiles)
    let result = allFiles.reduce((acc, cur) => {
      if (!acc[cur.content]) {
        acc[cur.content] = []
      }
      acc[cur.content].push(cur)
      return acc
    }, {})
    console.info('===result====>', result)

    let duplicated = []
    for (let cont in result) {
      let curCont = result[cont]
      console.log('===cont===>', curCont)

      let d = curCont.map(p => {
        return `${p.path}/${p.name}`
      })
      duplicated.push(d)
    }
    let isDuplicated = false
    
    console.log(duplicated)
    
    let rt = duplicated.reduce((acc, cur) => {
      if (cur.length > 1) {
        acc.push(cur)
      }
      return acc
    }, [])

    console.log('rt===>', rt)
    
    return rt

}


let files = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
let files1 = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
let files2 = ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]

findDuplicate(files2)

