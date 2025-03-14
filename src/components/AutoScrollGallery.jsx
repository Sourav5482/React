import { useEffect, useRef } from "react";

const images = [
    "https://t4.ftcdn.net/jpg/03/02/39/97/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg",
    "https://react.dev/images/home/community/react_india_sunil.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToypAc4_8mKHGsIpV7DOW4HsLuTOVy4LKspQ&s",
    "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaQaSogZt9WMIeJYRv4mxS2rfR8RqBnspHw&s",
];

const AutoScrollGallery = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 1.5; // Adjust for smoothness (higher = faster)
        const delay = 20; // Delay in ms

        const scrollImages = () => {
            if (scrollContainer) {
                scrollAmount += scrollStep;
                scrollContainer.scrollLeft = scrollAmount;

                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0; // Reset scroll to loop infinitely
                }
            }
        };

        const interval = setInterval(scrollImages, delay);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div
            ref={scrollRef}
            className="w-full mt-5 flex items-center overflow-x-auto flex-nowrap scroll-smooth hide-scrollbar"
        >
            {images.concat(images).map((src, i) => (
                <div
                    key={i}
                    className="flex-shrink-0 mx-3 rounded-lg overflow-hidden"
                    style={{
                        width: "20vw",
                        height: "80%",
                        transform: `rotate(${i % 2 === 0 ? "2deg" : "-2deg"})`,
                    }}
                >
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={src}
                        alt={`Gallery ${i}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default AutoScrollGallery;
