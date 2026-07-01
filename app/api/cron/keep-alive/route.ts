import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase-client"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  // Verify the request comes from a trusted cron caller via shared secret.
  // Set CRON_SECRET in your .env.local and in Vercel → Settings → Environment Variables.
  // Send the header "x-cron-secret: <value>" from your cron scheduler.
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret) {
    const incomingSecret = request.headers.get("x-cron-secret")
    if (incomingSecret !== cronSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  try {
    const { error } = await supabase
      .from('members')
      .select('id')
      .limit(1)

    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: "Database pinged successfully", 
      timestamp: new Date().toISOString() 
    })
  } catch (error: any) {
    console.error("Keep-alive error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
