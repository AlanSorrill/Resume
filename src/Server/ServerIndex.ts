import express from 'express'
import Path from 'path'
import fs from 'fs'

const app = express()

const port = 3000

let publicPath = Path.resolve(__dirname, '../public')

console.log(`Public path: ${publicPath}`)
function scanPublicPath(directory: string) {
    // console.log(`Generating path on ${directory}`)
    let fullPath = Path.resolve(publicPath, directory);
    let relativePath = Path.relative(publicPath, fullPath);
    let children = fs.readdirSync(fullPath);
    let out: string[] = []
    for (let child of children) {
        let fullChildPath = Path.join(fullPath, child);
        // console.log(`Checking child ${fullChildPath}, rel: ${Path.relative(publicPath, fullChildPath)}`)
        if (fs.lstatSync(fullChildPath).isDirectory()) {
            for (let sub of scanPublicPath(Path.relative(publicPath, fullChildPath))) {
                out.push(sub);
            }
        } else {
            // console.log(`Adding file ${Path.relative(publicPath, fullChildPath)}`)
            out.push(Path.relative(publicPath, fullChildPath))
        }
    }
    return out;
}
function genPublicPathType() {
    let paths = scanPublicPath('./');
    let options = paths.map((p) => (`"${p.replace('\\', '/')}"`)).join(' | ');
    let code = `export type PublicPath = ${options};\n` +
        "export type PublicFilePath<EXT extends string> = (PublicPath | `./${PublicPath}`)  & `${string}.${EXT}`;"
    fs.writeFileSync(Path.resolve(publicPath, '../src/Client/PublicPaths.ts'),code);
    console.log(code);
}
// console.log(scanPublicPath('./'))
genPublicPathType();
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})