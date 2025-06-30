'use client'
import { RenderImageContext,RenderImageProps,RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import {photos} from "@/app/lib/photos"
import { useState } from "react";

function renderNextImage( { alt = "", title, sizes }: RenderImageProps, { photo, width, height }: RenderImageContext) {
    return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>);
}
export default function PhotoGallery(){
    const [index,setIndex] = useState(-1);
    return(<div className="p-4">
    <RowsPhotoAlbum
      photos={photos}
      render={{ image: renderNextImage }}
      defaultContainerWidth={1200}
      onClick={({ index: current }) => setIndex(current)}
      sizes={{
        size: "1168px",
        sizes: [
          { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
        ],
      }}
    />
    <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
);
}