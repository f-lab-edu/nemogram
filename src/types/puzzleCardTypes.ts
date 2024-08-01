export type PuzzleCardData = {
  id: string;
  title: string;
  size: [number, number];
  image: string;
  completed: boolean;
};

export type PuzzleCardListData = PuzzleCardData[];
