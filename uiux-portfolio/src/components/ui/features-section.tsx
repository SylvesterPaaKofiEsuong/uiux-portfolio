import React from "react";
import { cn } from "@/app/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "5+ Years of Design Excellence",
      description:
        "Experienced Graphic and UI/UX Designer with expertise in delivering creative and user-centered design solutions across various industries.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Professional Certifications",
      description:
        "Google UX Design Professional Certificate, Adobe Certified Professional in Graphic Design & Illustration, and Figma Advanced Design & Prototyping Certification.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Portfolio & Work Samples",
      description:
        "Explore my design portfolio showcasing 20+ mobile and web applications, branding projects, and digital marketing solutions that increased client conversion rates by 30%.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Technical Expertise",
      description:
        "Proficient in Figma, Adobe Creative Suite, Sketch, HTML/CSS, WordPress, and motion graphics. Specialized in user research, prototyping, and usability testing.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-5xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
         About Me
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          A highly experienced Graphic and UI/UX Designer with 5 years of expertise in delivering creative and user-centered design solutions. 
          Passionate about innovative design, enhancing user experience, and improving business processes through visually compelling digital solutions.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* Personal photo or about image */}
          <img
            src="/About_me.png"
            alt="about me"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  // Certificates or badges
  const certs = [
    { src: "/Google UX Design Cert.png", alt: "Google UX Certificate" },
    { src: "/Adobe_Certified_Professional_Adobe_Illustrator.png", alt: "Adobe Certified" },
    { src: "/Figma Cert sample.jpg", alt: "Figma Advanced" },
  ];
  return (
    <div className="relative flex flex-col items-center p-8 gap-4 h-full overflow-hidden">
      <div className="flex flex-col items-center gap-4 w-full">
        {certs.map((cert, idx) => (
          <img
            key={idx}
            src={cert.src}
            alt={cert.alt}
            width="160"
            height="160"
            className="rounded-lg h-32 w-32 object-contain border shadow"
            style={{ background: '#fff' }}
          />
        ))}
      </div>
      <div className="text-xs text-neutral-400 mt-2 text-center"> certificate images</div>
    </div>
  );
};

export const SkeletonThree = () => {
  // Portfolio preview or project screenshots
  const projects = [
    {
      src: "/Food_Ordering_App.png",
      alt: "Food Ordering App",
      link: "https://www.figma.com/proto/VdC5XbWs9x0WT0vbKnvZag/Food-ordering-app?node-id=2-5"
    },
    {
      src: "/GTI_Project.png",
      alt: "Helped in Building the mobile UI GTI Project",
      link: "https://www.figma.com/proto/mrXiX1zgx7oMA0F8NmXL0K/GTI-PROJECT?node-id=80-90&starting-point-node-id=80%3A159"
    },
    {
      src: "/Family_Bank_Project.png",
      alt: "Helped in building the mobile UI for Family Bank",
      link: "https://www.figma.com/proto/2uMLu70Jc3ZmtC7Fn5BswL/Family-Bank---Internet-Banking-Solution?node-id=2019-16977&starting-point-node-id=83%3A23"
    },
    {
      src: "/Graphics.png",
      alt: "Graphics",
      link: "https://www.figma.com/proto/AGF9ql819xzoDv54T1ybns/TECHVISTA?node-id=32-2&p=f&t=2ROxZTpyq3LZiUSB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
    },
    {
      src: "/freestyle 1.png",
      alt: "Freestyle Prototype",
      link: "https://www.figma.com/proto/naBs8twmg4ETExaORswQNB/Untitled--Copy-?node-id=19-87&p=f&t=J3wZVs3J7ZUOKXDz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A87&show-proto-sidebar=1"
    }
  ];
  return (
    <div className="flex flex-row gap-6 justify-center items-center w-full">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          <img
            src={project.src}
            alt={project.alt}
            className="rounded-lg h-32 w-32 object-cover border shadow group-hover:opacity-80 transition"
          />
          <div className="text-xs text-center mt-2 text-neutral-600 dark:text-neutral-300">{project.alt}</div>
        </a>
      ))}
    </div>
  );
};


export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
