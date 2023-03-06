import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "./database.type"

export const createClient = () => createBrowserSupabaseClient<Database>()
