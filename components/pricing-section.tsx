import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const freePlan: string[] = [
  '1 language of choice',
  '1,000 lessons',
  'Up to 1 device',
]

const proPlan: string[] = [
  'No Ads',
  '14 languages',
  '10,000+ lessons',
  'Learn with YouTube feature',
  'Custom Learning Report',
  'Email Support',
]

const familyPlan: string[] = [
  'Everything in Pro',
  'Up to 6 devices',
  'Family control',
  'Individual Learning Report',
]

export function PricingSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Select the plan that fits your needs and start your language learning journey with Worldpro. Flexible options designed to give you the best value and results.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">
                Try for 2 weeks!
              </CardTitle>
              <span className="mt-3 block text-2xl font-semibold">
                $0 / mo
              </span>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {freePlan.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-semibold text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Popular
            </span>

            <div className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle className="font-medium">
                  Pro
                </CardTitle>
                <span className="mt-3 block text-2xl font-semibold">
                  $9.99 / mo
                </span>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {proPlan.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">
                Family
              </CardTitle>
              <span className="mt-3 block text-2xl font-semibold">
                $19.99 / mo
              </span>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {familyPlan.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
