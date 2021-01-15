import React from "react";
import Accordian, {
  AccordianTitle,
  AccordianContent,
  TreeContextProvider
} from "./Accordian";

const BasicUsage = () => {
  return (
    <>
      <h1>BasicUsage</h1>
      <TreeContextProvider value={[]}>
        <Accordian>
          {({ contentRef, active, height, onToggle }) => (
            <>
              <button onClick={onToggle}>click</button>
              <ul
                ref={contentRef}
                style={{
                  maxHeight: active.on ? height : 0,
                  transition: "max-height 1s",
                  overflow: "hidden"
                }}
              >
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <Accordian>
                  {({ contentRef, active, height, onToggle }) => (
                    <>
                      <button onClick={onToggle}>click</button>
                      <ul
                        ref={contentRef}
                        style={{
                          maxHeight: active.on ? height : 0,
                          transition: "max-height 1s",
                          overflow: "hidden"
                        }}
                      >
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                      </ul>
                    </>
                  )}
                </Accordian>
                <li>hello</li>
                <li>hello</li>
              </ul>
            </>
          )}
        </Accordian>
      </TreeContextProvider>
    </>
  );
};

const DefaultSubComponents = () => {
  return (
    <TreeContextProvider value={[]}>
      <Accordian>
        {() => (
          <>
            <AccordianTitle showArrow>2020</AccordianTitle>
            <AccordianContent>1월</AccordianContent>
            <AccordianContent>1월</AccordianContent>
            <AccordianContent>1월</AccordianContent>
            <AccordianContent>
              <Accordian>
                {() => (
                  <>
                    <AccordianTitle showArrow>4월</AccordianTitle>
                    <AccordianContent>1월</AccordianContent>
                    <AccordianContent>1월</AccordianContent>
                    <AccordianContent>1월</AccordianContent>
                  </>
                )}
              </Accordian>
            </AccordianContent>
          </>
        )}
      </Accordian>
    </TreeContextProvider>
  );
};

export default function () {
  return (
    <>
      <BasicUsage />
      <DefaultSubComponents />
    </>
  );
}
