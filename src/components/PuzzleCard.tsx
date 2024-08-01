import Link from "next/link";
import { PuzzleCardData } from "@/types/puzzleCardTypes";

export default function PuzzleCard({
  data,
}: Readonly<{ data: PuzzleCardData }>) {
  const { id, image, title, size } = data;
  const [width, height] = size;

  return (
    <Link href={`/puzzles/${id}`}>
      <div>{image}</div>
      <h3>{title}</h3>
      <div>
        {width}x{height}
      </div>
    </Link>
  );
}
