import {makeProject} from '@motion-canvas/core';

// Scenes
import intro from './scenes/intro?scene'
import outro from './scenes/outro?scene'
import short_template from './scenes/short_template?scene';
import virus_intro from './scenes/virus_short/virus_intro?scene';
import audio from './scenes/virus_short/assets/text_reader.mp3'

export default makeProject({
  audio: audio,
  scenes: [virus_intro],
});
