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
      <TreeContextProvider>
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
                <li>hello</li>
                <li>hello</li>
                <li>
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
                          <li>
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
                          </li>
                        </ul>
                      </>
                    )}
                  </Accordian>
                </li>
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
    <TreeContextProvider>
      <Accordian>
        {() => (
          <>
            <AccordianTitle showArrow>2020</AccordianTitle>
            <AccordianContent>
              <li>1월</li>
              <li>1월</li>
              <li>1월</li>
              <li>1월</li>
              <li>1월</li>
              <li>
                <Accordian>
                  {() => (
                    <>
                      <AccordianTitle showArrow>4월</AccordianTitle>
                      <AccordianContent>
                        <li>1월</li>
                        <li>1월</li>
                        <li>1월</li>
                        <li>1월</li>
                        <li>
                          <Accordian>
                            {() => (
                              <>
                                <AccordianTitle showArrow>4월</AccordianTitle>
                                <AccordianContent>
                                  <li>1월</li>
                                  <li>1월</li>
                                  <li>1월</li>
                                  <li>1월</li>
                                  <li>1월</li>
                                </AccordianContent>
                              </>
                            )}
                          </Accordian>
                        </li>
                      </AccordianContent>
                    </>
                  )}
                </Accordian>
              </li>
            </AccordianContent>
          </>
        )}
      </Accordian>
    </TreeContextProvider>
  );
};

export default function () {
  return (
    <div style={{ width: "15%" }}>
      <BasicUsage />
      <DefaultSubComponents />
    </div>
  );
}
