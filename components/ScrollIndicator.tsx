import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    window.onscroll = function () {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      setScrollHeight(scrolled);
    };
  });

  return (
    <div className="w-full h-[2px] bg-gray-500 mb-7 sticky top-0">
      <div
        className={`absolute left-0 top-0 bg-gray-100 h-full`}
        style={{ width: `${scrollHeight}%` }}
      ></div>
    </div>
  );
}
