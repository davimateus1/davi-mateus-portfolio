"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 4,
    label: "Anos de experiência",
  },
  {
    value: 49,
    label: "Projetos concluídos",
  },
  {
    value: 12,
    label: "Tecnologias dominadas",
  },
  {
    value: 3235,
    label: "Contribuições em projetos",
  },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ value, label }, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                delay={2}
                end={value}
                duration={5}
                separator="."
                prefix={label.includes("projetos") ? "+" : ""}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  label.length < 15 ? "max-w-[100px]" : "max-w-[160px]"
                }leading-snug text-white/80`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
41;
