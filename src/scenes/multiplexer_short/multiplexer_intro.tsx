import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Icon, Img, Rect, Txt} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all, waitFor} from '@motion-canvas/core/lib/flow';
import mltpx_pic from './multiplexer_short/assets/Multiplexer.png'

export default makeScene2D(function* (view) {
  // Create your animations here
  const background = createRef<Rect>();
  const text = createRef<Txt>();
  const bubble = createRef<Icon>();
  const icon = createRef<Icon>();
  const image = createRef<Img>();
    
    view.add(
        <>
            <Rect
                ref={background}
                width={'100%'} // Set up 1920 as X in resolution
                height={'100%'} // Set up 1080 as Y in resolution
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
                x={350}
                y={-500}
            />
            <Icon
                ref={icon}
                icon={'ic:baseline-settings'}
                width={70}
                height={70}
                x={350}
                y={-505}
                rotation={30}
            />
            <Txt
                ref={text}
                x={-100}
                y={-500}
                fontSize={100}
                fontWeight={800}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >Ph0nsy Talks</Txt>
            <Txt
                ref={text}
                x={0}
                y={-150}
                fontSize={70}
                fontWeight={500}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >What is a Multiplexer?</Txt>
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

    view.add(
        <Img
            ref={image}
            x={0}
            y={320}
            width={400}
            src={mltpx_pic}
            clip
    />);
// --- Background ---

    yield* all(
        icon().rotation(0,0).to(720,3),
        image().alpha(0,0).to(1,3)
    );

});