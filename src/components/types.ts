export interface Category {
  id: string;
  label: string;
}

export interface Chapter {
  id: string;
  title: string;
}

export interface Content {
  categoryId: string;
  chapterId: string;
  title: string;
  content: string;
  image: string;
}
