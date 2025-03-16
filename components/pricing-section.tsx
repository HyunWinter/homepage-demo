import { Check } from 'lucide-react'

const freePlan: string[] = [
  '1 language of choice',
  '1,000 lessons',
  'Up to 1 device',
]

const proPlan: string[] = [
  'Everything in Free Plan',
  '14 languages',
  '10,000+ lessons',
  'Up to 3 devices',
  'Learn with YouTube feature',
  'Custom Learning Report Per Month',
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Choose Your Plan
          </h1>
          <p>
            Select the plan that fits your needs and start your language learning journey with Lingovo. Flexible options designed to give you the best value and results.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">2 Weeks Free!</h2>
                <span className="my-3 block text-2xl font-semibold">
                  $0 / mo
                </span>
              </div>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {freePlan.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">
                    Pro
                  </h2>
                  <span className="my-3 block text-2xl font-semibold">
                    $11.99 / mo
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Everything in free plus :
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {proPlan.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
