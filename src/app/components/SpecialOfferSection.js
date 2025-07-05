'use client';

const SpecialOfferSection = () => {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/king.webp')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}
    >
      {/* Optional: Brush effect overlays (add PNG/SVG if available) */}
      {/* <img src="/brush-top.png" className="absolute top-0 left-0 w-full" alt="" /> */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-start max-w-2xl px-8 py-12">
        <span className="text-lg italic font-light mb-2">Special Offer</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">Chicken Tikka & Lamb Seekh Kebab </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">£11 Only</h3>
        <a
          href="#book"
          className="mt-2 px-6 py-3 border border-white rounded-md text-white font-semibold hover:bg-white hover:text-primary transition-colors"
        >
          BOOK A TABLE
        </a>
      </div>
      {/* <img src="/brush-bottom.png" className="absolute bottom-0 left-0 w-full" alt="" /> */}
    </section>
  );
};

export default SpecialOfferSection; 