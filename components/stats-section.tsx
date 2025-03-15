export function StatsSection() {
  return (
    <section id="impacts" className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Discover the impact!
          </h2>
          <p>
            Explore our impressive stats, including glowing reviews, active users, and successful students, showcasing the effectiveness of our language learning method.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+600</div>
            <p>Reviews</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+2,000</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Students</p>
          </div>
        </div>
      </div>
    </section>
  )
}
