import styles from "./page.module.css";
import {getVideos} from "@/app/firebase/functions";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const videos = await getVideos();

  console.log(videos);

  return (
    <div className={styles.page}>
      <main>
        {
          videos.map((video) => (
            <>
            <Link href={`/watch?v=${video.filename}`} key={video.id}>
              <Image src={'/thumbnail.png'} alt='video' width={120} height={80}
                     className={styles.thumbnail}/>
            </Link>
              <p>{video.filename? video.filename : 'nothing'}</p>
            </>

          ))
        }
      </main>
    </div>
  );
}
