"use client";

import { Photo } from "@/components/photo";
import { Stats } from "@/components/stats";
import { DownloadIcon } from "lucide-react";

import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const HomeSection = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/davi-mateus.pdf";
    link.download = "CV_Davi_Mateus.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return toast({
      variant: "success",
      title: "Download iniciado",
      description: "O currículo está sendo baixado.",
    });
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Engenheiro de Software</span>
            <h1 className="h1 mb-6 max-w-xl">
              Olá, eu sou <span className="text-accent">Davi Mateus</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80">
              Sou desenvolvedor com paixão por tecnologia e inovação,
              especializado em web e mobile. Bacharel em Ciência da Computação
              (UNICAP) e pós-graduando em Engenharia de Software (USP/Esalq).
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownload}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <DownloadIcon className="w-6 h-6" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
