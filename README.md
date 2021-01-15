# react-nested-accordian

Created with CodeSandbox

https://codesandbox.io/s/jovial-brown-382kb

Usage

### 1. basic accordian (중첩x)

```js
import Accordian from "...";

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
      </ul>
    </>
  )}
</Accordian>;
```

### 2. nested accordian (중첩)

최상단 accordian 밖에서 TreeContextProvider 사용

```js
const ulStyle = (active, height) => ({
  maxHeight: active.on ? height : 0,
  transition: "max-height 1s",
  overflow: "hidden"
});

import Accordian, { TreeContextProvider } from "...";

<TreeContextProvider>
  <Accordian>
    {({ contentRef, active, height, onToggle }) => (
      <>
        <button onClick={onToggle}>click</button>
        <ul ref={contentRef} style={ulStyle}>
          <li>hello</li>
          <li>hello</li>
          <li>
            <Accordian>
              {({ contentRef, active, height, onToggle }) => (
                <>
                  <button onClick={onToggle}>click</button>
                  <ul ref={contentRef} style={ulStyle}>
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
</TreeContextProvider>;
```

### 3. hooks (custom subComponent)

```js
// 컴포넌트 스타일링
const Title = styled.button`
  & svg {
    ${({ active }) => `
      transform: rotate(${active.on ? 180 : 0}deg);
      transition: transform 0.2s;
    `};
  }
`;

const Content = styled.ul`
  overflow: hidden;
  border: none;
  max-height: ${(props) => (props.active.on ? props.height + "px" : 0)};
  transition: max-height 1s;
`;

// hooks를 이용해 accordian sub컴포넌트 생성

import { useTitle, useContent } from "...";

export const AccordianTitle = (props) => {
  const { onToggle, active } = useTitle();

  return (
    <StyledTitle onClick={onToggle} active={active} {...props}>
      {props.children}
      {props.showArrow ? <ArrowDropDownIcon /> : null}
    </StyledTitle>
  );
};

export const AccordianContent = (props) => {
  const { contentRef, height, active } = useContent();

  return (
    <StyledContent ref={contentRef} active={active} height={height}>
      {props.children}
    </StyledContent>
  );
};
```

### 4. hooks (default subcomponent)

```js
import Accordian, {
  AccordianContent,
  AccordianTitle,
  TreeContextProvider
} from "....";

<TreeContextProvider>
  <Accordian>
    {() => (
      <>
        <AccordianTitle showArrow>2020</AccordianTitle>
        <AccordianContent>
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
                  </AccordianContent>
                </>
              )}
            </Accordian>
          </li>
        </AccordianContent>
      </>
    )}
  </Accordian>
</TreeContextProvider>;
```
