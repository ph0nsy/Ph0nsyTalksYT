import {makeProject} from '@motion-canvas/core';

// > Reusable Scenes <
import intro from './scenes/intro?scene'
import outro from './scenes/outro?scene'
import short_intro from './scenes/short_intro?scene'
import short_template from './scenes/short_template?scene';
// - Current Project Scenes -
import virus_short from './scenes/virus_short/virus_short?scene';
// - Current Project Audio -
import audio from './scenes/virus_short/assets/text_reader.mp3'

export default makeProject({
  audio: audio,
  scenes: [virus_short],
});
