import type { Metadata } from "next"
import { Mail, Sparkles, Users, Megaphone, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sponsorships | Dr. Interested",
  description:
    "Partner with Dr. Interested to support youth healthcare education and leadership. Gain visibility across our global community of 55,000+ engaged students.",
  openGraph: {
    title: "Sponsorships | Dr. Interested",
    description:
      "Partner with Dr. Interested to support youth healthcare education and leadership. Gain visibility across our global community of 55,000+ engaged students.",
    url: "https://www.drinterested.org/sponsorships",
    siteName: "Dr. Interested",
    type: "website",
  },
}

export default function SponsorshipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f1eb]/30">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#4ecdc4]/10 text-[#405862] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Partner With Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#405862] mb-6 text-balance">Sponsorships</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Support youth healthcare education and leadership while gaining visibility across our global community of
            55,000+ engaged students.
          </p>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#405862] mb-4">Our Sponsors</h2>
            <p className="text-muted-foreground">Organizations supporting youth healthcare leadership</p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#4ecdc4]/20 p-12 md:p-16 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4ecdc4]/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-[#4ecdc4]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#405862] mb-2">Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're building partnerships with organizations that share our vision for youth healthcare education.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Us Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#f5f1eb]/30 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#405862] mb-4">Sponsor Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Partner with Dr. Interested to make a meaningful impact on the next generation of healthcare leaders
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl border border-[#4ecdc4]/20 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4ecdc4]/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#405862] mb-2">Social Media Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Your logo featured across our Instagram, LinkedIn, and other platforms reaching 55,000+ youth globally
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#4ecdc4]/20 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4ecdc4]/10 rounded-full mb-4">
                <Megaphone className="h-6 w-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#405862] mb-2">Speaking Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Get dedicated speaking time if you're sponsoring a specific event, connecting directly with our
                community
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#4ecdc4]/20 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4ecdc4]/10 rounded-full mb-4">
                <Award className="h-6 w-6 text-[#4ecdc4]" />
              </div>
              <h3 className="text-lg font-semibold text-[#405862] mb-2">Event Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Acknowledgment before events and on presentation slides, ensuring your brand is seen by our engaged
                audience
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-[#405862] to-[#334852] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Sponsoring?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-pretty">
              Reach out to our finance team to discuss sponsorship opportunities and how we can create a partnership
              that aligns with your organization's goals.
            </p>
            <Link
              href="mailto:finance@drinterested.org"
              className="inline-flex items-center gap-2 bg-[#4ecdc4] text-[#405862] hover:bg-[#4ecdc4]/90 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              finance@drinterested.org
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorship Package Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#405862] mb-4">Sponsorship Package</h2>
            <p className="text-muted-foreground">Detailed information about our sponsorship tiers and benefits</p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#4ecdc4]/20 p-12 md:p-16 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4ecdc4]/10 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-[#4ecdc4]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#405862] mb-2">Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're preparing a comprehensive sponsorship package with detailed tiers and benefits. Check back soon!
            </p>
          </div>

          {/* Placeholder for future Canva embed */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Sponsorship package details will be embedded here once available</p>
          </div>
        </div>
      </section>
    </div>
  )
}
