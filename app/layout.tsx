import "../styles/globals.css"
import Navigation from "./components/navigation"
import SupabaseProvider from "./components/supabase-provider"

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <SupabaseProvider>
          <div className='flex flex-col min-h-screen bg-[#1c1c1c]'>
            <Navigation />
            <main className='flex-1 container max-w-[512px] mx-auto px-2 py-10'>
              {children}
            </main>
            <footer className='py-5 border-t border-gray-600'>
              <div className='text-center text-sm text-white'>
                Copyright ©︎ All rights reserved | AI Image Generator
              </div>
            </footer>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout
