interface DirectorySection {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}

interface DirectoryReducer {
  sections: DirectorySection[];
}
