import Navbar from './Navbar';
export default function HeroSection() {
  return (
    <section className="relative min-w-full m-0 min-h-screen overflow-hidden">
      <div className="absolute inset-0">

        {/* Background video placeholder */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/dashboardImage.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <Navbar />
        <div className="lg:px-6 md:px-6 sm-px-6 px-2">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 max-w-2xl text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to SIH 25100 Portal
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            This platform provides real-time insights, analytics, and mapping solutions to
            address the problem statement 25100 with data visualization, realistic road
            digital-twins, and hyper-local traffic simulation toolchains.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}