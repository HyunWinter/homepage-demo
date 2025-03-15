export function FAQSection() {
  return (
    <section id="faq" className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
              Questions
            </h2>
            <p>Accusantium quisquam. Illo, omnis?</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">What is Lingovo?</h3>
              <p className="text-muted-foreground mt-4">Lingovo is an innovative language learning app that uses unique cultural short stories to teach 14 different languages. It offers interactive lessons, vocabulary building tools, and premium audio to enhance your learning experience.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Is there a free trial?</h3>
              <p className="text-muted-foreground mt-4">Yes! Lingovo offers a 7-day free trial of our premium features. You'll have full access to all 14 languages and 10,000+ lessons during this period.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Why use Lingovo over other options?</h3>
              <p className="text-muted-foreground mt-4">Lingovo stands out with its focus on cultural immersion through short stories, adaptive learning for all levels, and a comprehensive approach that includes reading, listening, and vocabulary building. Our unique method helps you learn languages in context, making the process more engaging and effective.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Is Lingovo available on both iOS and Android?</h3>
              <p className="text-muted-foreground mt-4">Yes, Lingovo is available for both iOS and Android devices, allowing you to learn on your preferred platform.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">How many languages can I learn with Lingovo?</h3>
              <p className="text-muted-foreground my-4">Lingovo offers courses in 14 languages:</p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">English</li>
                <li className="text-muted-foreground">Arabic</li>
                <li className="text-muted-foreground">Cantonese</li>
                <li className="text-muted-foreground">Chinese (Mandarin)</li>
                <li className="text-muted-foreground">French</li>
                <li className="text-muted-foreground">German</li>
                <li className="text-muted-foreground">Italian</li>
                <li className="text-muted-foreground">Japanese</li>
                <li className="text-muted-foreground">Korean</li>
                <li className="text-muted-foreground">Polish</li>
                <li className="text-muted-foreground">Portuguese</li>
                <li className="text-muted-foreground">Russian</li>
                <li className="text-muted-foreground">Spanish</li>
                <li className="text-muted-foreground">Turkish</li>
              </ul>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Can I switch between languages?</h3>
              <p className="text-muted-foreground mt-4">Absolutely! You can switch between any of our 14 languages at any time, allowing you to learn multiple languages or focus on the one that interests you most.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">How does the spaced repetition system work?</h3>
              <p className="text-muted-foreground mt-4">Our spaced repetition system intelligently schedules review sessions for vocabulary you've learned, optimizing your memory retention. Words are reviewed at increasing intervals as you master them, ensuring long-term retention.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
