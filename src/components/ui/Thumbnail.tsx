import Link from "next/link";
import Image from "next/image";
import { Video } from "../../../types/custom_types";

const Thumbnail = ({ video }: { video: Video }) => {
  return (
    <Link
      href={`/watch/${video.id}`}
      className="w-[320px] mx-auto md:w-[350px] my-4"
    >
      <div className="h-52 overflow-hidden rounded-2xl bg-slate-300">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={500}
          height={500}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
        />
      </div>
    </Link>
  );
};

export default Thumbnail;
