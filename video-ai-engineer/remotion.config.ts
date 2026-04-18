import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setPixelFormat('yuv420p');
Config.setCodec('h264');
Config.setConcurrency(4);
Config.setOverwriteOutput(true);

// 配图和 BGM 放 src/assets/ 而不是 public/ —— 和我们其他 curriculum 子项目结构一致
Config.setPublicDir('./src/assets');

// Chrome flags for better CJK font rendering
Config.setChromiumOpenGlRenderer('angle');
