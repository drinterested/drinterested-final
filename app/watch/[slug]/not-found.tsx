import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Home, ChevronRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="bg-[#1a1a1a] border-gray-800 max-w-2xl w-full">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[#4ecdc4]/20 p-6">
              <Video className="h-16 w-16 text-[#4ecdc4]" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">Webinar Not Found</h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            The webinar you're looking for doesn't exist or has been moved. Explore our other educational content and
            resources below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#4ecdc4] hover:bg-[#3db8b0] text-black" size="lg">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800 bg-transparent" size="lg">
              <Link href="/blog">
                <ChevronRight className="h-5 w-5 mr-2 rotate-180" />
                Read Our Blog
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              Looking for something specific?{" "}
              <Link href="/contact" className="text-[#4ecdc4] hover:underline">
                Contact us
              </Link>{" "}
              for help.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
