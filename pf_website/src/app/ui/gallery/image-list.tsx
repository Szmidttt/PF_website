import Image from "next/image";
const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg']
export default function ImageList(){
    return <div className="flex"> {images.map((img) => {
            return (
            <div className="">
            <Image
                className="p-4"
                src={`/gallery/${img}`}
                key={img}
                width={300}
                height={50}
                alt={`zdjęcie ${img}`}
            />
            </div>
        )})}</div>
}