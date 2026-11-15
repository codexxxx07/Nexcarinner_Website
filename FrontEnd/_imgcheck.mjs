import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'

const dir = path.resolve('src/assets/CommunityMoments')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg')).sort((a, b) => parseInt(a) - parseInt(b))

const ramp = ' .:-=+*#%@'

for (const f of files) {
  const buf = fs.readFileSync(path.join(dir, f))
  const meta = await sharp(buf).metadata()
  const W = 56
  const H = Math.max(8, Math.round((W * meta.height) / meta.width / 2)) // chars ~2x tall
  const { data } = await sharp(buf).greyscale().resize(W, H, { fit: 'fill' }).raw().toBuffer({ resolveWithObject: true })
  let art = ''
  for (let y = 0; y < H; y++) {
    let line = ''
    for (let x = 0; x < W; x++) {
      const v = data[y * W + x]
      line += ramp[Math.min(ramp.length - 1, Math.floor((v / 255) * (ramp.length - 1)))]
    }
    art += line + '\n'
  }
  console.log(`\n===== ${f} (${meta.width}x${meta.height}, ratio ${(meta.width / meta.height).toFixed(3)}) =====`)
  console.log(art)
}
