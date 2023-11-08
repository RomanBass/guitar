export type Composition = {
  id: number;
  rating: number;
  author: string;
  composition: string;
  genre: string;
  record: string;
  poster: string;
  date: {dateForHuman: string; dateForSorting: number};
  duration: string;
}

export type Compositions = Composition[];
