'use client'
import React from 'react';
import { ReactTyped } from "react-typed";


const TITLES = ['Full-stack Engineer', 'Creative Director', 'Copy writer', 'Graphic Designer', 'Animator']

// TODO: When not in scroll view, pause loop.
export const TypingHeader = () => {
    return (
        <>
            <h2>
                I'm a {" "}
                <ReactTyped
                    strings={TITLES}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                />
                with a passion for bringing pixels to life.
            </h2>
        </>
    )
}