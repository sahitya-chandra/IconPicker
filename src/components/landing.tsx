import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagesIcon as Icons } from 'lucide-react'
import { Dialog, DialogTrigger } from "./ui/dialog"
import Iconsdialog from "./Iconsdialog"
import * as IIcons from "react-feather";
import { useState } from "react"

export default function Home() {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleIconSelect = (iconName: any) => {
        setSelectedIcon(iconName);
        setIsOpen(false)
    };

    const SelectedIconComponent = selectedIcon ? (IIcons[selectedIcon as keyof typeof IIcons] as React.ElementType) : null;

    return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Icons className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">IconPicker</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="flex items-center gap-2 text-md font-medium hover:underline underline-offset-4" href="https://github.com/sahitya-chandra/IconPicker">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Github
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Choose Icons with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Simplify your design process with our intuitive icon picker. Find the perfect icon for your project in seconds.
                </p>
              </div>
              <Dialog onOpenChange={setIsOpen} open={isOpen}>
                <DialogTrigger asChild>
                    <Button className="w-[100px] h-[100px] text-lg" onClick={()=>setIsOpen(true)}>
                        {SelectedIconComponent ? <SelectedIconComponent className="!h-16 !w-16" /> : "Try Now"}
                    </Button>
                </DialogTrigger>
                <Iconsdialog onSelectIcon={handleIconSelect}/>
              </Dialog>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Vast Library</CardTitle>
                </CardHeader>
                <CardContent>Access thousands of high-quality icons from various popular icon sets.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Search</CardTitle>
                </CardHeader>
                <CardContent>Find the perfect icon in seconds with our powerful search functionality.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Easy Export</CardTitle>
                </CardHeader>
                <CardContent>Download icons in multiple formats, including SVG, PNG, and icon font.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Picking Icons Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of designers and developers who trust our icon picker for their projects.
                </p>
              </div>
              {/* <Button className="w-[200px]" size="lg">
                Get Started
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">Designed & Developed by:- Sahitya Chandra</p>
      </footer>
    </div>
  )
}