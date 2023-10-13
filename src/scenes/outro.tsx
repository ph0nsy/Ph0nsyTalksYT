import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Rect, Circle, Txt, Icon} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';

import {waitFor} from '@motion-canvas/core/lib/flow';

import {fadeTransition} from '@motion-canvas/core/lib/transitions';
import {Vector2} from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {
  // Create your animations here
  const background = createRef<Rect>();
  const rect = createRef<Rect>();
  const circle = createRef<Circle>();
  const text = createRef<Circle>();
  const icon = createRef<Icon>();

  // --- Background ---
  view.add(
    <Rect
      ref={background}
      width={'100%'}
      height={'100%'}
      fill={'black'}
      layout
      alignItems={'center'}
      justifyContent={'center'}
    />); 
// --- Background ---

// --- YouTube Buttons --- 
  view.add(
    <>
    <Rect
      ref={rect}
      width={600}
      height={400}
      smoothCorners={true}
      radius={5}
      shadowOffset={new Vector2(-10,10)}
      shadowColor={'gray'}
      x={-450}
      y={-175}
      fill={'#fff'}
    />
      <Circle
        ref={circle}
        width={200}
        height={200}
        x={-450}
        y={275}
        fill={'#fff'}
      />
    </>);
// --- YouTube Buttons --- 

// --- Special Thanks --- 
  view.add(
    <>
    <Txt
      ref={text}
      offset={[-1,0]}
      x={275}
      y={-350}
      fontSize={60}
      fontWeight={700}
      fill={'#fff'}
      fontFamily={'"JetBrains Mono", monospace'}
    >SPECIAL THANKS</Txt>
    <Txt
      ref={text}
      offset={[-1,0]}
      width={550}
      x={275}
      y={-150}
      textWrap={true}
      fontSize={42}
      fontWeight={10}
      fill={'#fff'}
      fontFamily={'"JetBrains Mono", monospace'}
    >To Prof. Roberto Galán and my friends at University Francisco de Vitoria.</Txt>
    </>);
// --- Special Thanks --- 

// --- Socials --- 
// --- Reddit ---
  view.add(
    <>
      <Icon
        ref={icon}
        icon={'logos:reddit-icon'}
        width={75}
        height={75}
        x={300}
        y={100}
      />
      <Txt
        ref={text}
        offset={[-1,0]}
        x={375}
        y={100}
        fontSize={42}
        fontWeight={10}
        fill={'#fff'}
        fontFamily={'"JetBrains Mono", monospace'}
      >in/ph0nsy/</Txt>
    </>);

// --- Linkedin ---
  view.add(
    <>
      <Icon
        ref={icon}
        icon={'devicon:linkedin'}
        width={75}
        height={75}
        x={300}
        y={225}
      />
      <Txt
        ref={text}
        offset={[-1,0]}
        x={375}
        y={225}
        fontSize={42}
        fontWeight={10}
        fill={'#fff'}
        fontFamily={'"JetBrains Mono", monospace'}
      >u/ph0nsy</Txt>
    </>);

// --- Itch.io ---
  view.add(
    <>
      <Icon
        ref={circle}
        icon={'simple-icons:itchdotio'}
        width={75}
        height={75}
        x={300}
        y={350}
      />
      <Txt
        ref={text}
        offset={[-1,0]}
        x={375}
        y={350}
        fontSize={42}
        fontWeight={10}
        fill={'#fff'}
        fontFamily={'"JetBrains Mono", monospace'}
      >ph0nsy.itch.io</Txt>
    </>);
// --- Socials --- 

  yield* fadeTransition(1.5);
  yield* waitFor(6)

});
