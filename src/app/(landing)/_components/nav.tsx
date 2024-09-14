import {
  BookCheck,
  FileStack,
  Goal,
  ScrollText,
  SquarePen,
} from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="mx-auto w-full  px-2.5 lg:px-20 relative">
        <div className="flex h-14 items-center justify-between">
          <a className="grow basis-0" href="/">
            <div className="max-w-fit">
              <span className="inline-flex gap-1 font-extrabold font-default">
                <FileStack size={32} color="#000000" strokeWidth={1.25} />
              </span>
            </div>
          </a>
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative hidden lg:block"
          >
            <div className="relative">
              <ul
                data-orientation="horizontal"
                className="relative flex flex-row gap-2 px-2 py-0.5"
                dir="ltr"
              >
                <div className="absolute inset-0 -z-[1]">
                  <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 drop-shadow-sm transition-all dark:border-white/10 bg-white/75 backdrop-blur-lg dark:bg-black/75"></div>
                </div>
                <li>
                  <button
                    className="inline-flex gap-1 rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 dark:text-white/70 dark:hover:text-white transition-colors ease-out"
                    id="radix-:R59rja:-trigger-radix-:Rct9rja:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:R59rja:-content-radix-:Rct9rja:"
                    data-radix-collection-item=""
                  >
                    <Goal
                      size={16}
                      color="#000000"
                      strokeWidth={1.25}
                      className="my-auto"
                    />{" "}
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="inline-flex gap-1 rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 dark:text-white/70 dark:hover:text-white transition-colors ease-out"
                    id="radix-:R59rja:-trigger-radix-:Rkt9rja:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:R59rja:-content-radix-:Rkt9rja:"
                    data-radix-collection-item=""
                  >
                    <ScrollText
                      size={16}
                      color="#000000"
                      strokeWidth={1.25}
                      className="my-auto"
                    />{" "}
                    docs
                  </button>
                </li>
                <li>
                  <a
                    id="nav-/customers"
                    className="inline-flex gap-1 rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 dark:text-white/70 dark:hover:text-white transition-colors ease-out"
                    href="/customers"
                  >
                    <BookCheck
                      size={16}
                      color="#000000"
                      strokeWidth={1.25}
                      className="my-auto"
                    />{" "}
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    id="nav-/pricing"
                    className="inline-flex gap-1 rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 dark:text-white/70 dark:hover:text-white transition-colors ease-out"
                    href="/pricing"
                  >
                    {" "}
                    <SquarePen
                      size={16}
                      color="#000000"
                      strokeWidth={1.25}
                      className="my-auto"
                    />
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2"></div>
          </nav>
          <div className="hidden grow basis-0 justify-end lg:flex">
            <a
              className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 dark:border-white dark:bg-white dark:text-gray-600 dark:hover:bg-white dark:hover:text-gray-800 dark:hover:hover:shadow-[0_0_25px_5px_rgba(256,256,256,0.2)] dark:hover:ring-0"
              href="https://app.dub.co/register"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
