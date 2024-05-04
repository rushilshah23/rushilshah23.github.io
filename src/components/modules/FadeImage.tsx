import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

interface FadeInImageFromBottomProps {
    src: string;
    alt: string;
    width:number;
    height:number;
}

const FadeInImageFromBottom: React.FC<FadeInImageFromBottomProps> = ({ src, alt }) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        image.style.opacity = '0';

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    image.style.transition = 'opacity 1s ease-out';
                    image.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(image);

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <div className="lg:flex-1 pt-0 mt-0 relative overflow-hidden ">

            <Image ref={imageRef} src={src} alt={alt}  width={450} height={350} />
            {/* <div className="absolute -bottom-20 left-10 w-full h-1/2 bg-gradient-to-b from-black via-black to-black"
                style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}>
            </div> */}
        </div>
                    </>
    );  
};

export default FadeInImageFromBottom;
