import { createFileRoute } from "@tanstack/react-router";
import { ProgramsPage } from "@/components/pages/ProgramsPage";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
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
