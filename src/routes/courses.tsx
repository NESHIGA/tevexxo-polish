import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/pages/CoursesPage";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "TITLE" },
      { name: "description", content: "DESC" },
      { property: "og:title", content: "TITLE" },
      { property: "og:description", content: "DESC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
