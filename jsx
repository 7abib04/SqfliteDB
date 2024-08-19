/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CQPZs73Yi88
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b shadow-sm sticky top-0 z-20">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <FlagIcon className="w-6 h-6" />
            <span>Forum</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Categories
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Popular
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Recent
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Create Post
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to our Forum</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Engage in discussions, share knowledge, and connect with like-minded individuals on our vibrant forum
                platform.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width={800}
              height={400}
              alt="Forum"
              className="aspect-[2/1] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <main className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
          <div className="bg-background rounded-lg shadow-lg border border-muted overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                <Link href="#" className="hover:underline" prefetch={false}>
                  How to build a React app from scratch
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    John Doe
                  </Link>
                </div>
                <div>·</div>
                <div>2 hours ago</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  href="#"
                  className="text-primary-foreground bg-primary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  React
                </Link>
                <Link
                  href="#"
                  className="text-secondary-foreground bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  Tutorial
                </Link>
              </div>
            </div>
            <div className="p-4 border-t">
              <p>
                In this tutorial, we'll walk through the steps to build a React app from the ground up. We'll cover
                setting up a development environment, creating components, managing state, and more.
              </p>
            </div>
            <div className="p-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-5 h-5" />
                  <span className="sr-only">Like</span>
                </Button>
                <span className="text-sm text-muted-foreground">123</span>
                <Button variant="ghost" size="icon">
                  <ThumbsDownIcon className="w-5 h-5" />
                  <span className="sr-only">Dislike</span>
                </Button>
                <span className="text-sm text-muted-foreground">45</span>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span className="sr-only">Comment</span>
                </Button>
                <span className="text-sm text-muted-foreground">12</span>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg border border-muted overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                <Link href="#" className="hover:underline" prefetch={false}>
                  The benefits of using TypeScript in your React projects
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    Jane Smith
                  </Link>
                </div>
                <div>·</div>
                <div>1 day ago</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  href="#"
                  className="text-primary-foreground bg-primary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  React
                </Link>
                <Link
                  href="#"
                  className="text-secondary-foreground bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  TypeScript
                </Link>
              </div>
            </div>
            <div className="p-4 border-t">
              <p>
                TypeScript can bring a lot of benefits to your React projects, including improved code quality, better
                tooling, and more robust type checking. In this post, we'll explore some of the key advantages of using
                TypeScript with React.
              </p>
            </div>
            <div className="p-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-5 h-5" />
                  <span className="sr-only">Like</span>
                </Button>
                <span className="text-sm text-muted-foreground">78</span>
                <Button variant="ghost" size="icon">
                  <ThumbsDownIcon className="w-5 h-5" />
                  <span className="sr-only">Dislike</span>
                </Button>
                <span className="text-sm text-muted-foreground">23</span>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span className="sr-only">Comment</span>
                </Button>
                <span className="text-sm text-muted-foreground">8</span>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg border border-muted overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                <Link href="#" className="hover:underline" prefetch={false}>
                  Mastering CSS Grid: A comprehensive guide
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    Sarah Lee
                  </Link>
                </div>
                <div>·</div>
                <div>3 days ago</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  href="#"
                  className="text-primary-foreground bg-primary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  CSS
                </Link>
                <Link
                  href="#"
                  className="text-secondary-foreground bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  Grid
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground bg-muted px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  Tutorial
                </Link>
              </div>
            </div>
            <div className="p-4 border-t">
              <p>
                CSS Grid is a powerful layout system that can help you create complex and responsive designs with ease.
                In this guide, we'll cover everything you need to know to master CSS Grid, from basic concepts to
                advanced techniques.
              </p>
            </div>
            <div className="p-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-5 h-5" />
                  <span className="sr-only">Like</span>
                </Button>
                <span className="text-sm text-muted-foreground">92</span>
                <Button variant="ghost" size="icon">
                  <ThumbsDownIcon className="w-5 h-5" />
                  <span className="sr-only">Dislike</span>
                </Button>
                <span className="text-sm text-muted-foreground">17</span>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span className="sr-only">Comment</span>
                </Button>
                <span className="text-sm text-muted-foreground">24</span>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg border border-muted overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                <Link href="#" className="hover:underline" prefetch={false}>
                  Optimizing React performance with memoization
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    Michael Johnson
                  </Link>
                </div>
                <div>·</div>
                <div>1 week ago</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  href="#"
                  className="text-primary-foreground bg-primary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  React
                </Link>
                <Link
                  href="#"
                  className="text-secondary-foreground bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                  prefetch={false}
                >
                  Performance
                </Link>
              </div>
            </div>
            <div className="p-4 border-t">
              <p>
                Memoization is a powerful technique for optimizing the performance of your React applications. In this
                post, we'll explore how to use memoization to improve the rendering performance of your components and
                prevent unnecessary re-renders.
              </p>
            </div>
            <div className="p-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-5 h-5" />
                  <span className="sr-only">Like</span>
                </Button>
                <span className="text-sm text-muted-foreground">65</span>
                <Button variant="ghost" size="icon">
                  <ThumbsDownIcon className="w-5 h-5" />
                  <span className="sr-only">Dislike</span>
                </Button>
                <span className="text-sm text-muted-foreground">11</span>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span className="sr-only">Comment</span>
                </Button>
                <span className="text-sm text-muted-foreground">19</span>
              </div>
            </div>
          </div>
        </main>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 w-full shrink-0">
        <div className="container flex flex-col sm:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; 2024 Forum. All rights reserved.</p>
          <nav className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
