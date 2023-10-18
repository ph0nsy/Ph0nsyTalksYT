import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Node, Icon, Img, Line, Rect, Txt, Spline} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all, waitFor} from '@motion-canvas/core/lib/flow';
import {Vector2} from '@motion-canvas/core/lib/types';
import virus_pic from './assets/Virus.png'
import mitochondria_pic from './assets/clorofila_3.jpg'
import clorofila_pic from './assets/mitochondria_mammalian_lung_tem_0.jpg'
import seed_pic from './assets/100px-Bag_Miracle_Seed_SV_Sprite.png'
import cell_pic from './assets/animal_cell_t_png.jpg'


export default makeScene2D(function* (view) {
  // Create your animations here
  const background = createRef<Rect>();
  const channel = createRef<Txt>();
  const titles = createRef<Txt>();
  const bubble = createRef<Icon>();
  const icon = createRef<Icon>();
  const soil = createRef<Icon>();
  const virus_img = createRef<Img>();
  const mitochondria_img = createRef<Img>();
  const clorofila_img = createRef<Img>();
  const seed_img = createRef<Img>();
  const cell_img = createRef<Img>();
  const parts_group = createRef<Node>();
  const organelles_group = createRef<Node>();
  const seed_group1 = createRef<Node>();
  const seed_group2 = createRef<Node>();
  const icon_group1 = createRef<Node>();
  const icon_group2 = createRef<Node>();
  const icon_group3 = createRef<Node>();
  const icon_group4 = createRef<Node>();
  const virus_group = createRef<Node>();  
  const curly_braces = createRef<Spline>();
  
    
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
                icon={'mdi:virus-outline'}
                width={70}
                height={70}
                x={350}
                y={-505}
                rotation={30}
            />
            <Txt
                ref={channel}
                x={-100}
                y={-500}
                fontSize={100}
                fontWeight={800}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >Ph0nsy Talks</Txt>
            <Txt
                ref={titles}
                x={0}
                y={-150}
                fontSize={70}
                fontWeight={500}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >Are Viruses Alive?</Txt>
        </>);

    view.add(
        <Img
            ref={virus_img}
            x={15}
            y={320}
            width={600}
            src={virus_pic}
            clip
    />);
// --- Background ---

    yield* all(
        icon().size.x(50,0).to(70,1),
        icon().size.y(50,0).to(70,1),
        icon().size.x(70,1).to(50,2),
        icon().size.y(70,1).to(50,2),
        virus_img().alpha(0,0).to(1,1)
    );

    yield* all(
        icon().alpha(1,0).to(0,1),
        bubble().alpha(1,0).to(0,1),
        channel().opacity(1,0).to(0,1),
        titles().opacity(1,0).to(0,1),
        virus_img().position.y(320,0).to(150,1),
        virus_img().width(600,0).to(850,1)
    );

    view.add(
        <Node ref={parts_group} opacity={0}>
            <Line
                stroke={'#fff'}
                x={100}
                y={-200}
                lineWidth={20}
                arrowSize={25}
                rotation={-75}
                startArrow
                points={[Vector2.zero, () => Vector2.right.scale(300)]}
            />
            <Line
                stroke={'#fff'}
                x={-50}
                y={-100}
                lineWidth={20}
                rotation={75}
                points={[Vector2.right.scale(-60), () => Vector2.right.scale(-400)]}
            />
            <Line
                stroke={'#000'}
                x={-50}
                y={-100}
                lineWidth={25}
                arrowSize={30}
                rotation={75}
                startArrow
                points={[Vector2.zero, () => Vector2.right.scale(-60)]}
            />
            <Txt
                x={275}
                y={-550}
                fontSize={80}
                fontWeight={700}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >PROTEIN</Txt>
            <Txt
                x={-300}
                y={-550}
                fontSize={70}
                fontWeight={700}
                fill={'#fff'}
                width={200}
                textWrap={true}
                fontFamily={'"Monaco", monospace'}
            >NUCLEIC ACID</Txt>
        </Node>
    );

    yield* waitFor(1);

    yield* all(
        parts_group().opacity(0,0).to(1,1)
    );

    yield* waitFor(2);

    yield* all(
        parts_group().opacity(1,0).to(0,2),
        virus_img().position.y(150,0).to(350,2),
        virus_img().width(850,0).to(550,2)
    );

    view.add(
        <Node ref={organelles_group}>
            <Img
                ref={mitochondria_img}
                x={-250}
                y={-250}
                width={350}
                src={mitochondria_pic}
                clip
            />
            <Txt
                x={-250}
                y={-400}
                fontSize={40}
                fontWeight={700}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >CHLOROPLAST</Txt>
            <Img
                ref={clorofila_img}
                x={250}
                y={-250}
                width={350}
                src={clorofila_pic}
                clip
            />
            <Txt
                x={250}
                y={-400}
                fontSize={40}
                fontWeight={700}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >MITOCHONDRIA</Txt>
        </Node>
    );
    
    yield* all(
        organelles_group().opacity(0,0).to(1,2)
    );

    view.add(
        <Node ref={icon_group1}>
            <Icon
                icon={'emojione-v1:cross-mark'}
                width={350}
                x={250}
                y={-265}
            />
            <Icon
                icon={'emojione-v1:cross-mark'}
                width={350}
                x={-250}
                y={-265}
            />
        </Node>
    );

    view.add(
        <Node ref={icon_group2}>
            <Icon
                icon={'mdi:virus-outline'}
                width={300}
                x={-350}
                y={-350}
            />
            <Txt
                x={200}
                y={-325}
                fontSize={250}
                fontWeight={800}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >1000s</Txt>
        </Node>
    );

    view.add(
        <Spline
          ref={curly_braces}
          lineWidth={20}
          stroke={'lightseagreen'}
          points={[
            [-500, -100],
            [-480, -50],
            [-10, 0],
            [0, 10],
            [10, 0],
            [480, -50],
            [500, -100]]}
          end={0}
        />,
      );
    
    yield* all(
        icon_group1().opacity(0,0).to(1,1),
        icon_group2().opacity(0,0).to(0,1)
    );
    
    yield* waitFor(6);

    yield* all(
        icon_group1().opacity(1,0).to(0,1),
        organelles_group().opacity(1,0).to(0,1),
    );

    yield* waitFor(4);

    yield* all(
        curly_braces().end(1, 1),
        icon_group2().opacity(0,0).to(1,2),
    );

    view.add(
        <Node ref={icon_group3} opacity={0}>
            <Icon
                icon={'mdi:emoticon-dead'}
                width={700}
                x={-10}
                y={-290}
            />
        </Node>
    );
    yield* waitFor(1);
    yield* all(
        icon_group2().opacity(0,0),
        curly_braces().opacity(0,0),
        icon_group3().opacity(0,0),
        virus_img().opacity(1,0).to(0.2,2),
        virus_img().position.y(350,0).to(200,2),
        virus_img().width(550,0).to(2080,2),
        icon_group3().opacity(0,1).to(1,2)
    );

    
    yield* all(
        icon_group3().opacity(1,0).to(0,1),
        virus_img().opacity(0.2,0).to(1,1)
    );

    view.add(
        <Node ref={icon_group4} opacity={0}>
            <Icon
                icon={'mdi:file-document-multiple'}
                width={800}
                x={-10}
                y={-180}
                fill={'#000'}
            />
        </Node>
    );
    
    yield* waitFor(2);
    yield* all(
        icon_group4().opacity(0,0).to(1,1),
    );
    
    view.add(
        <Img
            ref={seed_img}
            x={0}
            y={0}
            width={800}
            src={seed_pic}
            clip
            opacity={0}
    />);

    yield* waitFor(2);
    
    yield* all(
        icon_group4().opacity(1,0).to(0,1),
        virus_img().opacity(1,0).to(0,1),
        seed_img().opacity(0,1).to(1,2)
    );

    yield* all(
        seed_img().position.y(0,0).to(-700,2),
        seed_img().width(800,0).to(250,2),
    );

    view.add(
        <Node ref={seed_group1} opacity={0}>
            <Icon
                icon={'ph:arrow-bend-left-down-bold'}
                width={150}
                height={150}
                x={-200}
                y={-500}
            />
            <Icon
                icon={'noto:national-park'}
                width={300}
                x={-200}
                y={-150}
            />
            <Icon
                icon={'ph:arrow-bend-right-down-bold'}
                width={150}
                height={150}
                x={200}
                y={-500}
            />
            <Icon
                icon={'openmoji:desert'}
                width={350}
                x={200}
                y={-150}
            />
        </Node>
    );
    
    view.add(
        <Node ref={seed_group2} opacity={0}>
            <Icon
                icon={'ph:arrow-down-bold'}
                width={150}
                height={150}
                x={-200}
                y={150}
            />
            <Icon
                icon={'twemoji:evergreen-tree'}
                width={300}
                x={-200}
                y={500}
            />
            <Icon
                icon={'ph:arrow-down-bold'}
                width={150}
                height={150}
                x={200}
                y={150}
            />
            <Icon
                icon={'game-icons:dead-wood'}
                width={300}
                x={200}
                y={500}
            />
        </Node>
    );

    yield* seed_group1().opacity(0,0).to(1,3);
    yield* seed_group2().opacity(0,0).to(1,3);
    
    view.add(
        <Icon
            ref={soil}
            icon={'noto:national-park'}
            width={300}
            x={-200}
            y={-150}
            opacity={0}
        />);

    view.add(
        <Img
            ref={cell_img}
            src={cell_pic}
            width={400}
            x={0}
            y={300}
            opacity={0}
            fill={'#000'}
        />);
    
    yield* all(
        seed_img().position.y(-700,0).to(-400,2),
        seed_img().width(250,0).to(400,2),
        soil().opacity(1,0),
        seed_group1().opacity(1,0).to(0,1),
        seed_group2().opacity(1,0).to(0,1),
        soil().position.y(-150,0).to(300,2),
        soil().position.x(-200,0).to(0,2),
        soil().width(300,0).to(400,2)
    );

    yield* all(
        seed_img().opacity(1,0).to(0,1),
        soil().opacity(1,0).to(0,1),
        cell_img().opacity(0,0).to(1,1),
        virus_img().width(400,0),
        virus_img().position.y(-400,0),
        virus_img().position.x(0,0),
        virus_img().opacity(0,0).to(1,1)
    );

    yield* waitFor(2);

    yield* all(
        cell_img().opacity(1,0).to(0,1),
        virus_img().width(400,0).to(500,1),
        virus_img().position.y(-400,0).to(0,1),
    );

    yield* waitFor(2);
    yield* virus_img().opacity(1,0).to(0,1);

    view.add(
        <Node ref={virus_group} opacity={1}>
            <Img
                x={125}
                y={200}
                width={300}
                src={virus_pic}
                clip
            />
            <Txt
                x={125}
                y={400}
                fontSize={50}
                fontWeight={700}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >ALIVE</Txt>
            <Line
                stroke={'#fff'}
                x={0}
                y={30}
                lineWidth={20}
                rotation={-28}
                points={[Vector2.right.scale(-300), () => Vector2.right.scale(300)]}
            />
            <Img
                x={-150}
                y={-200}
                width={300}
                src={virus_pic}
                clip
                opacity={0.2}
            />
            <Txt
                x={-150}
                y={-400}
                fontSize={55}
                fontWeight={700}
                fill={'#fff'}
                fontFamily={'"Monaco", monospace'}
            >INERT</Txt>
        </Node>
        );

    yield* virus_group().opacity(0,0).to(1,2)
    yield* waitFor(1)
});