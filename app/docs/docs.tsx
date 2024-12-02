import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
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
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800" href="/">
              Home
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-gray-200">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800">
                Documentation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Learn how to use and configure our Discord bot for your server.
              </p>
            </div>
            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Getting Started</h2>
                <p className="text-gray-600">
                  To create your bot, first you need to obtain a key, while our bot is still in beta development it is currently application only keys, join the discord.gg/bailey discord and open a support ticket to apply.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Commands</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>/configure - This is the feature you can use to setup your bot, and change your embeds.</li>
                  <li>/lookup - This feature allows anyone to lookup my user mention and see how many vouches someone has.</li>
                  <li>/vouch - This feature is the most self-explanatory it allows people to vouch for you.</li> 
                  <li>/restore - This feature allows you to restore your vouches in case your server gets deleted or you get termed.</li>
                  <li>/restart - This is a dev only command that allows us to update your bot remotely.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Creating your discord bot</h2>
                <p className="text-gray-600">
                  To start setting up your bot after you obtain your key, go to the discord server and use the /redeem command. This command allows you to redeem your key. 
                  Next you will need to make your own discord bot by going to https://discord.com/developers/applications and hitting the new application button. 
                  Now that you have your application you will need to go to the bot tab and enable all "Privileged Gateway Intents"
                  Next you can hit reset my bot token, once you have reset your bot's token make sure to save that somewhere safe and do not share that.
                  Now you can go back to the discord server and do the /create command. you can input your bot's token that you saved and get your discord id by right clicking on your profile (hint: to get your discord id you need developer mode turned on, it's in settings under advanced)
                  Now once you have done that your bot is almost finished, go back to the developer portal and use the OAuth2 tab to invite your bot to your server with bot and admin selected.
                  Congrats! you have now setup the bot and invited it to your server, now you can follow the rest of the tutorial to
                </p>
                <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Configuring your bot</h2>
                <p className="text-gray-600">
                  Nice job! you finished making your bot, now let's get the vouches rolling in. First you will have to use the /configure command, and set your vouches channel, and your customer role. This command is pretty self-explanatory but don't worry if you need any help, please open a support ticket in our discord server.
                  Once you have set that up you are all done, but let's have some fun configuring this thing! The biggest thing you can do is change your bot's pfp and name by going to the developer portal and just changing the pfp and name! Next you can change your embeds however you want, use the /configure command then hit edit embed, then you can edit the Title, the Description, and the Color all through this one command. If you would like it to say something like this is vouch number 31, you can hit edit description and use the vouch_count variable. I will list all the variables below.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Variable list</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>user - The user being vouched for.</li>
                  <li>voucher - The user who is giving the vouch.</li>
                  <li>message - The message content of the vouch.</li>
                  <li>stars - The star rating. </li> 
                  <li>vouch_count - The total number of vouches for the user.</li>
                </ul>
                <p className="text-gray-600 mt-4">For all of these make sure to surround the variable name with curly brackets.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Support</h2>
                <p className="text-gray-600">
                  If you need help or have any questions, join our support server discord.gg/bailey and open a ticket, our fine staff would love to help you.
                </p>
              </div>
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

