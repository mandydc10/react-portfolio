import "./HeroSection.css";
import marbleImage from "../assets/images/pic_marble.jpg";
import butterflyImage from "../assets/images/pic_butterfly.jpg";
import deerImage from "../assets/images/pic_deer.jpg";
import { allImages } from "../imagesData";

function ImagesSection() {
    const images = [marbleImage, butterflyImage, deerImage];

    return (
        <div className="background-image">
            {
                allImages.map((image, i) => {
                    return <div key={`i_${i}`}>
                        {/* <Image
                            src={image.location}
                            alt={image.alt}
                            fill
                        /> */}
                    </div>
                })
            }
            <h1> HERO SECTION </h1>
            <img src={marbleImage} className="picture-1" />
            {
                allImages.map((image, i) => {
                    return <div key={`i_${i}`}>
                        {allImages[i].image} image by <a href={allImages[i].artist_href}>{allImages[i].artist}</a> from <a href={allImages[i].img_href}>Pixabay</a>
                    </div>
                })
            }
        </ div >
    );
}

export default ImagesSection;