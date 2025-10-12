"use client"

import { useState } from "react"
import HomePage from "./home-page"
import { DomainAnnouncementPopup } from "@/components/domain-announcement-popup"

export default function ClientPage() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <>
      <HomePage />
      {showPopup && <DomainAnnouncementPopup onClose={() => setShowPopup(false)} isMainPage={true} />}
    </>
  )
}
