import type { Metadata } from "next"
import EventsClientPage from "./EventsClientPage"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals. From webinars to research competitions, find opportunities to grow.",
  keywords: [
    "healthcare events",
    "medical webinars",
    "student research competitions",
    "healthcare workshops",
    "medical education events",
    "volunteer opportunities",
  ],
  openGraph: {
    title: "Events | Dr. Interested",
    description:
      "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals.",
    url: "https://www.drinterested.org/events",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Events",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/events",
  },
}

export default function EventsPage() {
  return <EventsClientPage />
}
