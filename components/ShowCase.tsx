export default function ShowCase() {
  return (
    <section className="max-w-7xl mx-auto w-screen h-screen mt-6 lg:mt-20 overflow-hidden p-3">
      <div className="flex-center-center  lg:flex-between-center">
        <h1 className="showcase-h1">Unusual guy</h1>
        <div className="w-[497px] h-[60px] md:h-[113px] overflow-hidden bg-gray-600">
          <video autoPlay loop muted className="max-w-fit">
            <source src="/showcase-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex-center-center  lg:flex-between-center">
        <h1 className="showcase-h1">in a</h1>
        <div className="max-w-[676px] h-[60px] md:h-[113px] overflow-hidden relative bg-gray-600">
          <video autoPlay loop muted className="max-w-fit">
            <source src="/showcase-bg-video.mp4" type="video/mp4" />
          </video>
          {Array(14)
            .fill(" ")
            .map((item, index) => (
              <div
                className={
                  "w-[4px] h-[60px] md:h-[113px] bg-[#0f0f0f] absolute top-0"
                }
                style={{ left: `${index * 52}px` }}
                key={index}
              ></div>
            ))}
        </div>
        <p className="max-w-xs font-thin hidden xl:block">
          Normality is the watchword of the modern world. anything that goes
          beyond is a risk. either it fascinates or frightens, and i love to
          take risks.
        </p>
      </div>
      <div className="flex-center-center  lg:flex-between-center">
        <div className="w-[257px] h-[60px] md:h-[113px] bg-gray-600 overflow-hidden hidden xl:block">
          <video autoPlay loop muted className="max-w-fit">
            <source src="/showcase-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="showcase-h1">”ordinary” world</h1>
        <p className="max-w-xs font-thin block xl:hidden">
          Normality is the watchword of the modern world. anything that goes
          beyond is a risk. either it fascinates or frightens, and i love to
          take risks.
        </p>
      </div>
    </section>
  );
}
