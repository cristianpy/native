import path from 'path'
import fs from 'fs'
import {promisify} from 'util'

const MOCKS_DIR = path.join(__dirname, 'mocks')

const read = promisify(fs.readFile)

export default async function restMiddleware(req, res, next) {
  const fileName = path.join(MOCKS_DIR, `${req.path}.json`)
  if (fs.existsSync(fileName)) {
    const data = await read(fileName)
    res.status(200).json(JSON.parse(data))
  } else next()
}
