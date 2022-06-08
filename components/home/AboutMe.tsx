import Image from "next/image";

export default function AboutMe() {
  const SKILLS = [
    "React",
    "NextJs",
    "React Native",
    "Responsive Design",
    "HTML",
    "CSS",
    "Photoshop",
  ];
  return (
    <section className="w-full mt-28 lg:mt-36">
      <h2>About</h2>
      <div className="flex justify-between mt-10 flex-wrap gap-7">
        <h2 className="about-heading">Hi!</h2>
        <div className="flex flex-col">
          <span className="about-heading">I’m Amir Asadi,</span>
          <span className="about-heading">a Frontend developer</span>
          <span className="about-heading text-right">in Thehran, Iran.</span>
        </div>
      </div>
      <div className="flex-col-reverse md:flex-row flex justify-between flex-wrap gap-7">
        <p className="max-w-xs text-justify">
          Elegance, precision and refinement are what represents me. I began to
          approach the world of 3D and graphic design, fascinated by the works
          of the great motion designers of the time. These interests led me to
          develop a personal aesthetic and introduced me to the world of
          Creative and Interactive Development.
        </p>
        <Image
          src="/who-am-i.jpg"
          width={397}
          height={413}
          alt="about me Image"
        ></Image>
        <div className="max-w-xs mt-8  md:mt-32 flex flex-wrap h-fit">
          <h3 className="border-[1px] border-white p-[17px] bg-white text-black font-bold">
            Skills:
          </h3>
          {SKILLS.map((skill, index) => (
            <span key={index} className="border-[1px] border-white p-[17px]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
