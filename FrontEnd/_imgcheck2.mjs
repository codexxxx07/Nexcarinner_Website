import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'

const ramp = ' .:-=+*#%@'
const targets = ['src/assets/images/Gunjan.jpg']

for (const t of targets) {
  const buf = fs.readFileSync(path.resolve(t))
  const meta = await sharp(buf).metadata()
  const W = 56
  const H = Math.max(8, Math.round((W * meta.height) / meta.width / 2))
  const { data } = await sharp(buf).greyscale().resize(W, H, { fit: 'fill' }).raw().toBuffer({ resolveWithObject: true })
  let art = ''
  for (let y = 0; y < H; y++) {
    let line = ''
    for (let x = 0; x < W; x++) line += ramp[Math.min(9, Math.floor((data[y * W + x] / 255) * 9))]
    art += line + '\n'
  }
  console.log(`\n===== ${t} (${meta.width}x${meta.height}, ratio ${(meta.width / meta.height).toFixed(3)}) =====`)
  console.log(art)
}
