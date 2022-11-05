import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1023px)" });
  let isTablet = false;
  if (!isMobile && !isDesktop) {
    isTablet = true;
  }

  return { isMobile, isDesktop, isTablet };
};

export default useMedia;
