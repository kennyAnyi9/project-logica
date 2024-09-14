import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center z-20 w-screen border-b ">
        <a
          className="group mx-auto flex max-w-fit items-center justify-center gap-1 overflow-hidden rounded-full border border-gray-200 px-4 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 sm:px-7"
          href="/blog/introducing-dub-integrations"
        >
          <p className="text-sm font-semibold text-gray-700 [text-wrap:balance]">
            Drop us a star on Github
          </p>
          <div className="group relative flex items-center">
            <svg
              className="absolute transition-all group-hover:translate-x-1 group-hover:opacity-0 hidden size-3.5 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
              ></path>
            </svg>
            <svg
              className="hidden size-3.5 sm:block absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </div>
        </a>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15] font-display">
          Master Coding with <br />
          <span className="bg-gradient-to-r from-pink-300 to-blue-500 bg-clip-text text-transparent">
            Challenges
          </span>
        </h1>
        <p className="max-w-lg mt-5 text-gray-600 sm:text-xl">
          Explore a diverse range of coding problems that will push your limits
          and enhance your problem-solving abilities.
        </p>

        <div className="inline-flex gap-2 mt-5 mb-5">
          <Button
            variant={"default"}
            className="rounded-full font-display bg-black"
          >
            Browse Challenges
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full font-display text-gray-600"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
