'use client'
import { textsWithMainWords } from '@/src/data/typedText';
import React, { useEffect, useState } from 'react'



interface CustomWord {
    letter: string, //This should be a singl character
    mainWord: boolean
}


const generateOutputObj = (textsWithMainWords: { sentence: string; mainWords: string[] }[]): CustomWord[][] => {
    const outputObj: CustomWord[][] = [];

    textsWithMainWords.forEach(text => {
        const customWords: CustomWord[] = [];
        const words = text.sentence.split(' ');

        words.forEach((word, wordIndex) => {
            const chars = word.split('');
            chars.forEach((char, charIndex) => {
                const isMainWord = text.mainWords.includes(word);
                customWords.push({ letter: char, mainWord: isMainWord });
            });

            if (wordIndex < words.length - 1) {
                customWords.push({ letter: ' ', mainWord: false });
            }
        });

        outputObj.push(customWords);
    });

    return outputObj;
};






interface TypedTextProps {

}

const TypedText = ({ }: TypedTextProps) => {
    const [typedText, setTypedText] = useState<CustomWord[]>([]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textsToType = ['I am a Developer', 'I love coding', 'Welcome to my website']; // Add your text strings here
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const audioUrl = '/typing-audio.wav'
    const outputObj = generateOutputObj(textsWithMainWords);


    useEffect(() => {
        const audio = new Audio(audioUrl);

        // console.log("Typed teext is ", typedText)
        const currentText = outputObj[currentTextIndex];
        if (!currentText) return; // Check if currentText is defined

        const updateDisplayText = setInterval(() => {
            if (currentLetterIndex < currentText.length) {
                const currentCustomWord: CustomWord = currentText[currentLetterIndex]
                setTypedText((prevTypedText) => [...prevTypedText, currentCustomWord]); // Update state immutably

                setCurrentLetterIndex((curr) => curr + 1);
            // Play audio here
            // audio.play();
            } else {
                clearInterval(updateDisplayText);
                setTimeout(() => {
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % outputObj.length);
                    setTypedText([]); // Reset typed text for next animation

                    setCurrentLetterIndex(0);
                }, 120); // Adjust delay between texts as needed (3000 milliseconds = 3 seconds)
            }
        }, 80);

    return () => {
        // audio.pause()
        clearInterval(updateDisplayText);
    }
    }, [currentTextIndex, outputObj, currentLetterIndex]);

    return (<>
        {
            typedText && typedText.map((obj, index) => {
                return (
                    <span key={index} className= {`  ${obj.mainWord ? 'text-fontColor3' : 'text-fontColor5'}`}>{obj.letter}</span>
                );
            })
        }
    </>
    )
}

export default TypedText



