import { Puzzle } from "@/types/puzzle";
import PuzzleCard from "@/components/PuzzleCard";

export default function PuzzleCardList({
  puzzles,
}: Readonly<{ puzzles: Puzzle[] }>) {
  return (
    <>
      {puzzles.map((puzzle) => (
        <PuzzleCard key={puzzle.id} puzzle={puzzle} />
      ))}
    </>
  );
}
