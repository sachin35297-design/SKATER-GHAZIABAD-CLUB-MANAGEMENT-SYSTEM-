export const categories = ["Races", "Training", "Events"] as const;

export type Category = (typeof categories)[number];

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  category: Category;
  date: string;
};

export const photos: Photo[] = [
  {
    id: "speed-race",
    src: "/gallery/speed-race.png",
    width: 1376,
    height: 768,
    title: "District Speed Finals",
    alt: "Young inline speed skaters racing around a banked outdoor track",
    category: "Races",
    date: "Aug 2026",
  },
  {
    id: "coach-session",
    src: "/gallery/coach-session.png",
    width: 768,
    height: 1376,
    title: "Gear Check",
    alt: "Coach kneeling to adjust a young skater's quad roller skates",
    category: "Training",
    date: "Jul 2026",
  },
  {
    id: "medal-podium",
    src: "/gallery/medal-podium.png",
    width: 1024,
    height: 1024,
    title: "Podium Sweep",
    alt: "Three teenage skaters on a podium wearing medals",
    category: "Events",
    date: "Sep 2026",
  },
  {
    id: "cone-drills",
    src: "/gallery/cone-drills.png",
    width: 768,
    height: 1376,
    title: "Slalom Drills",
    alt: "Boy inline skating through a line of slalom cones",
    category: "Training",
    date: "Jun 2026",
  },
  {
    id: "road-skating",
    src: "/gallery/road-skating.png",
    width: 1584,
    height: 672,
    title: "Dawn Road Marathon",
    alt: "Silhouettes of skaters on a misty city road at dawn",
    category: "Races",
    date: "Mar 2026",
  },
  {
    id: "artistic-spin",
    src: "/gallery/artistic-spin.png",
    width: 768,
    height: 1376,
    title: "Artistic Showcase",
    alt: "Teenage girl performing an artistic roller skating spin under a spotlight",
    category: "Events",
    date: "May 2026",
  },
  {
    id: "kids-training",
    src: "/gallery/kids-training.png",
    width: 1408,
    height: 768,
    title: "Beginner Batch",
    alt: "Kids in helmets and knee pads learning to skate in a line",
    category: "Training",
    date: "Apr 2026",
  },
  {
    id: "skate-closeup",
    src: "/gallery/skate-closeup.png",
    width: 768,
    height: 1376,
    title: "Wheels Down",
    alt: "Close-up of orange and black inline skate wheels on concrete",
    category: "Training",
    date: "Feb 2026",
  },
  {
    id: "team-photo",
    src: "/gallery/team-photo.png",
    width: 1376,
    height: 768,
    title: "Club Day 2026",
    alt: "Club members and coaches in orange jerseys holding a banner",
    category: "Events",
    date: "Jan 2026",
  },
  {
    id: "trophy-moment",
    src: "/gallery/trophy-moment.png",
    width: 768,
    height: 1376,
    title: "Gold in the U-12",
    alt: "Smiling boy holding a gold trophy and wearing a medal",
    category: "Races",
    date: "Sep 2026",
  },
];
