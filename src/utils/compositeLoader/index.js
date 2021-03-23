import { useState, useContext, createContext, useEffect } from "react";
import { Transition } from "@headlessui/react";

const LoaderContext = createContext({});

const initialState = {
  resourceList: [],
  blobs: new Map(),
};

export const useResource = (url) => {
  const { contextValue, setContextValue } = useContext(LoaderContext);
  const [thisResourceURL, setThisResourceURL] = useState(contextValue.blobs.get(url) ?? false);

  useEffect(() => {
    if (!contextValue.resourceList.includes(url)) {
      setContextValue((e) => ({
        ...e,
        resourceList: [...new Set([...e.resourceList, url])],
      }));
      fetch(url)
        .then((e) => e.blob())
        .then((e) => {
          const blobURL = URL.createObjectURL(e);
          setContextValue((e) => {
            const blx = e.blobs;
            blx.set(url, blobURL);

            return {
              ...e,
              blobs: blx,
            };
          });
        });
    }
  }, []);

  useEffect(() => {
    if (contextValue.blobs.has(url)) {
      setThisResourceURL(contextValue.blobs.get(url));
    }
  }, [contextValue]);

  return thisResourceURL;
};

export const useLoaderStatus = () => {
  const { contextValue } = useContext(LoaderContext);
  const [hasLoaded, setLoading] = useState(false);

  useEffect(() => {
    setLoading(contextValue.resourceList.length !== 0 && contextValue.resourceList.length === contextValue.blobs.size);
    console.log(contextValue);
  }, [contextValue, contextValue.resourceList]);

  return hasLoaded;
};

export const LoaderStore = ({ children }) => {
  const [contextValue, setContextValue] = useState(initialState);

  return <LoaderContext.Provider value={{ contextValue, setContextValue }}>{children}</LoaderContext.Provider>;
};

export const Loader = () => {
  const hasLoaded = useLoaderStatus();

  return (
    <Transition
      show={!hasLoaded}
      enter="duration-0 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-500 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed z-50 bottom-0 left-0 right-0 top-0 flex items-center justify-center align-middle"
        style={{ background: "#111116" }}
      >
        <div className="w-64 max-w-full h-64 max-h-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.93 222.28" className="w-full h-full">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="-50%">
                <stop offset="0%">
                  <animate
                    attributeName="stop-color"
                    values="#706393; #587AE2; #7AC3F4; #9E87C9; #AB6CBA; #706393;"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="25%">
                  <animate
                    attributeName="stop-color"
                    values="#587AE2; #7AC3F4; #9E87C9; #AB6CBA; #706393; #587AE2;"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="50%">
                  <animate
                    attributeName="stop-color"
                    values="#7AC3F4; #9E87C9; #AB6CBA; #706393; #587AE2; #7AC3F4;"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="75%">
                  <animate
                    attributeName="stop-color"
                    values="#9E87C9; #AB6CBA; #706393; #587AE2; #7AC3F4; #9E87C9;"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="100%">
                  <animate
                    attributeName="stop-color"
                    values="#AB6CBA; #706393; #587AE2; #7AC3F4; #9E87C9; #AB6CBA;"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
            <g>
              <path
                d="M193.88,3.58,157.72,66.24,119.46,0,81.18,66.46l-35.71-63L0,83.53l79.66,138L119,153.4,158,222.28,238.93,82.12ZM79.66,201.51l-68.14-118L45.46,23.74,113.25,143.3ZM86.9,76.56,119.47,20,152,76.24l-32.9,57Zm37.87,66.79L193.85,23.63,227.39,82.1l-69.29,120Z"
                fill="url(#logo-gradient)"
              />
            </g>
          </svg>
        </div>
      </div>
    </Transition>
  );
};
