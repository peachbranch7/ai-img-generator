/**
 * NOTE: Supabase Client
 * @ref https://supabase.com/docs/guides/auth/auth-helpers/nextjs-server-components
 */
import { headers, cookies } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./database.type"

export const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
