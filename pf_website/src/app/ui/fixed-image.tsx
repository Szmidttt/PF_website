import Link from "next/link";
type FixedImageProps = {
    path: string,
    header: string,
    content: string,
    blurPos: string,
    link: string
}
export default function FixedImage({ path, header, content, blurPos, link }: FixedImageProps) {
    return (<>
        <div className="parallax flex" style={{ backgroundImage: `url('${path}')` }}>
            <div className={`${blurPos}`}></div>
            <div className="w-1/3 bg-white/30 backdrop-blur-sm py-30 px-20 flex flex-col justify-center">
                <span className="font-bold text-3xl text-white">{header}</span>
                <span className="text-xl text-white hidden md:block">{content}</span>
                <div className="p-4 flex items-center justify-center">
                    <Link
                        className="px-4 py-2 bg-blue-100 hover:bg-blue-200"
                        href={link}>Wiecej</Link>
                </div>

            </div>
        </div>
        <div className="p-1 bg-blue100"></div>
    </>
    );
}