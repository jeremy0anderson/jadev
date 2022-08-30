import * as React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
};

const tagMap = {
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
};

const AnimatedText = (props) => {
    const item = {
        hidden: {
            y: "200%",
            color: "#000",
            transition: {
                type:'spring', bounce:0.6,
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 }
        },
        visible: {
            y: 0,
            color: props.color,
            transition: {
                type:'spring', bounce:props.bounce, bounceDamping:0, bounceStiffness:0,
                ease: [0, 0.37, 0.715, 1], duration: props.duration }
        }
    };

    const splitWords = props.text.split(" ");

    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    const Tag = tagMap[props.type];
    let fontSize;
    switch(props.type){
        case "h1":fontSize=50; break;
        case "h2":fontSize=40; break;
        case "h3":fontSize=30; break;
        case "h4":fontSize=25; break;
        case "h5":fontSize=20; break;
        case "h6":fontSize=18; break;
        case "p":fontSize=12; break;
        default: fontSize=12; break;
    }
    return (
        <Tag>
            {words.map((word, index) => {
                return (
                    <Wrapper key={word+index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        fontSize,
                                        overflow: "hidden",
                                        display: "inline-block"
                                    }}
                                    key={index}>
                                    <motion.span
                                          style={{ display: "inline-block"}}
                                          variants={item}>
                                            {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

function MotionText(props) {
    const container = {
        hidden: {

        },
        visible:(stagger)=> {
            return {
                transition: {
                    staggerChildren:stagger,
                    type: 'spring', bounce: 0.3, duration: 0.5
                }
            }
        }
    };
    return (
        <motion.div
            className="App"
            initial="hidden"
            animate={props.visible ? "visible" : "hidden"}
            variants={container}
            custom={props.custom}
        >
            <div className="container">
                {props.textItems.map((item, index) => {
                    return <AnimatedText bounce={props.bounce} color={props.color} duration={props.duration}  {...item} key={index} />;
                })}
            </div>

        </motion.div>
    );
}

export default MotionText;