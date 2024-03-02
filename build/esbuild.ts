import { addHook } from 'yakumo'
import { } from 'yakumo-esbuild'

addHook('esbuild.before', (options, meta) => {
  if (meta.name !== '@r0x5a/koishi-plugin-eval') return
  if (options.entryPoints['worker/internal']) {
    options.banner = { js: '(function (host, module, GLOBAL) {' }
    options.footer = { js: '})' }
  }
})
