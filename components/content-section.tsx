import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import ContentImage from '@/public/exercice.webp'

export function ContentSection() {
  return (
    <section id="solution" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-balance text-4xl font-semibold lg:text-5xl">
          The Lingovo Method
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground text-pretty">
              Follow our structured method, powered by an <span className="text-accent-foreground font-bold">intelligent spaced repetition system</span>, to build vocabulary, improve comprehension, and gain confidence.
            </p>
            <p className="text-muted-foreground text-pretty">
              Stay consistent for steady progress and real results.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Fast</h3>
                </div>
                <p className="text-muted-foreground text-sm text-pretty">
                  Achieve intermediate fluency and cultural understanding in <span className="text-accent-foreground font-bold">6 months</span>.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Master the language with immersive stories for lasting retention.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px">
              <Image src={ContentImage} className="rounded-[15px] shadow" alt="payments illustration light" width={1206} height={612} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
