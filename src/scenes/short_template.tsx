import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Rect, Txt} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {waitFor} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  // Create your animations here
  const background = createRef<Rect>();

  // --- Background ---
    view.add(
        <Rect
            ref={background}
            width={'100%'} // Set up 1920 as X in resolution
            height={'100%'} // Set up 1080 as Y in resolution
            fill={'black'}
            layout
            alignItems={'center'}
            justifyContent={'center'}
        />); 
    
    view.add(
        <>
            <Rect
                ref={background}
                width={'20%'}
                height={'50%'}
                fill={'white'}
                x={435}
                y={480}
            />
            <Rect
                ref={background}
                width={'100%'}
                height={'15%'}
                fill={'white'}
                x={0}
                y={820}
            />
        </>);
// --- Background ---
  yield* waitFor(6)

});