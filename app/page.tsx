import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Book } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-white">
      <header className="w-full border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(13)-BuFwFB9t6u1eefz3vSyEoMBmC66LrU.png"
              alt="Bailey Bot Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold text-gray-800">Bailey Bot</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800" href="/docs">
              Documentation
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                  Enhance Your Discord Server
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Boost your community with our powerful and easy-to-use Discord bot.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="https://discord.gg/bailey">Add to Discord</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs" className="text-gray-800">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full">
                  <Zap className="h-10 w-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Speed</h3>
                <p className="text-gray-600">
                  Lightning-fast response times for all your bot commands.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full">
                  <Shield className="h-10 w-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">100% Customizable</h3>
                <p className="text-gray-600">
                  Completely customizable so you can make it your own.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full">
                  <Book className="h-10 w-10 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Never lose your rep</h3>
                <p className="text-gray-600">
                  All vouches are saved to your personal bot so that you never lose them, even if you get termed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              See It In Action
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col space-y-4">
                <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lookupexample2-j9B3Q5K75H7wJFtt2V27He1RwlegVy.png"
                    alt="Lookup Command Example"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">Easy Lookup</h3>
                  <p className="text-gray-600">View all vouches for any user with a simple command</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/configureexample-IUtYtFBTtOKZhEdPb9gvxkSjk4nh4m.png"
                    alt="Configuration Example"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">Simple Configuration</h3>
                  <p className="text-gray-600">Set up your bot with just a few clicks</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vouchexample-8d6UaPkSG8OGEczGYwusXp9uA8zFNI.png"
                    alt="Vouch Example"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">Beautiful Vouches</h3>
                  <p className="text-gray-600">Customizable vouch messages with star ratings</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="add-bot" className="w-full py-12 md:py-24 lg:py-32 bg-gray-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
                Ready to Enhance Your Server?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Add our bot to your Discord server and start enjoying all the features today!
              </p>
              <Button size="lg" asChild>
                <Link href="https://discord.gg/bailey">
                  Add to Discord
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">
            © 2024 Baileybot.xyz. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="/privacy">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

