import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Rect, Icon, Txt} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import {waitFor} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  // Create your animations here
  const background = createRef<Rect>();
  const bubble = createRef<Icon>();
  const text = createRef<Txt>();
  const icon1 = createRef<Icon>();
  const icon2 = createRef<Icon>();
  const icon3 = createRef<Icon>();
  const icon4 = createRef<Icon>();
  const icon5 = createRef<Icon>();
  const icon6 = createRef<Icon>();
  const icon7 = createRef<Icon>();

  // --- Background ---
  view.add(
    <>
      <Rect
        ref={background}
        width={'100%'}
        height={'100%'}
        fill={'black'}
        layout
        alignItems={'center'}
        justifyContent={'center'}
      />
      <Icon
        ref={bubble}
        icon={'akar-icons:chat-bubble'}
        width={150}
        height={150}
        x={300}
        y={0}
      />
      <Txt
        ref={text}
        x={-150}
        y={0}
        fontSize={100}
        fontWeight={800}
        fill={'#fff'}
        fontFamily={'"Monaco", monospace'}
      >Ph0nsy Talks</Txt>
    </>); 
  // --- Background ---

  // --- Icons ---
  // --- Gear ---
  view.add(
    <Icon
        ref={icon1}
        icon={'ic:baseline-settings'}
        width={70}
        height={70}
        x={300}
        y={-5}
    />
  );

  // --- Flask ---
  view.add(
    <Icon
        ref={icon2}
        icon={'fa6-solid:flask-vial'}
        width={60}
        height={60}
        x={300}
        y={-5}
    />
  );
  
  // --- Atom ---
  view.add(
    <Icon
        ref={icon3}
        icon={'ph:atom-light'}
        width={70}
        height={70}
        x={300}
        y={-5}
    />
  );
  
  // --- Brush ---
  view.add(
    <Icon
        ref={icon4}
        icon={'ri:brush-fill'}
        width={60}
        height={60}
        x={300}
        y={-5}
    />
  );
  
  // --- Bookshelf ---
  view.add(
    <Icon
        ref={icon5}
        icon={'ion:library-sharp'}
        width={55}
        height={55}
        x={300}
        y={-5}
    />
  );
  
  // --- Code ---
  view.add(
    <Icon
        ref={icon6}
        icon={'ph:code-bold'}
        width={65}
        height={65}
        x={300}
        y={-5}
    />
  );
  
  // --- Gamepad ---
  view.add(
    <Icon
        ref={icon7}
        icon={'solar:gamepad-bold'} 
        width={60}
        height={60}
        x={300}
        y={-5}
    />
  );
  // --- Icons ---
  
  // --- Icons Animations --- 
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );

  // Modify order of appereance according to topic (last is 'theme')
  // --- Gear ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(1, 1),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );

  // --- Flask ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(1, 1),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );

  // --- Atom ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(1, 1),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );
  
  // --- Brush ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(1, 1),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );
  
  // --- Bookshelf ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(1, 1),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(0, 0),
  );
  
  // --- Code ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(1, 1),
    icon7().alpha(0, 0).to(0, 0),
  );
  
  // --- Gamepad ---
  yield* waitFor(0.1);
  yield* all(
    icon1().alpha(0, 0).to(0, 0),
    icon2().alpha(0, 0).to(0, 0),
    icon3().alpha(0, 0).to(0, 0),
    icon4().alpha(0, 0).to(0, 0),
    icon5().alpha(0, 0).to(0, 0),
    icon6().alpha(0, 0).to(0, 0),
    icon7().alpha(0, 0).to(1, 1),
  );
  // --- Icons Animations ---
  
  yield* waitFor(0.5);

});
