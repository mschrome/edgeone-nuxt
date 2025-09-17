import type { NitroPreset } from 'nitropack';
import { PresetNameInput } from 'nitropack/presets';

export default <NitroPreset>{
  extends: 'cloudflare-pages' as PresetNameInput, // You can extend existing presets
  //   entry: fileURLToPath(new URL('./entry.ts', import.meta.url)),
  output: {
    dir: './.output',
    publicDir: '{{ output.dir }}/{{ baseURL }}',
    serverDir: 'dist/_worker.js'
  },
  commands: {
    preview: 'edgeone pages dev'
  },
  hooks: {
    compiled() {
      // ...
    }
  }
};
