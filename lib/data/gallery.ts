export type GalleryCategory = "puppies" | "adults" | "family";

export type GalleryItem = {
  id: string;
  cat: GalleryCategory;
  bg: string;
  label: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", cat: "puppies", bg: "linear-gradient(135deg, #F5E6A3, #D4A85A)", label: "🐶" },
  { id: "g2", cat: "adults", bg: "linear-gradient(135deg, #E8D5B8, #C9B897)", label: "🐕" },
  { id: "g3", cat: "family", bg: "linear-gradient(135deg, #D4C4A8, #B8A580)", label: "👨‍👩‍👧" },
  { id: "g4", cat: "puppies", bg: "linear-gradient(135deg, #F0DFC0, #D4C4A8)", label: "🐶" },
  { id: "g5", cat: "adults", bg: "linear-gradient(135deg, #3D3D3D, #1A1A1A)", label: "🐕‍🦺" },
  { id: "g6", cat: "family", bg: "linear-gradient(135deg, #C9B897, #A89470)", label: "❤️" },
  { id: "g7", cat: "puppies", bg: "linear-gradient(135deg, #E8D5B8, #D4A85A)", label: "🐶" },
  { id: "g8", cat: "adults", bg: "linear-gradient(135deg, #8B6B4A, #5C3D2E)", label: "🐕" },
  { id: "g9", cat: "puppies", bg: "linear-gradient(135deg, #F5E6A3, #C9B897)", label: "🐾" },
  { id: "g10", cat: "family", bg: "linear-gradient(135deg, #D4C4A8, #C4B498)", label: "🏡" },
  { id: "g11", cat: "adults", bg: "linear-gradient(135deg, #E8D5B8, #C9B897)", label: "🐕" },
  { id: "g12", cat: "puppies", bg: "linear-gradient(135deg, #F0DFC0, #E8D5B8)", label: "🐶" },
];
