import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useRef,
  useCallback
} from "react";
import styled from "styled-components";
import useToggle from "./useToggle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const TreeContext = createContext();
const useTreeContext = () => useContext(TreeContext);
export const TreeContextProvider = (props) => (
  <TreeContext.Provider value={props.value}>
    {props.children}
  </TreeContext.Provider>
);

const AccordianContext = createContext();
const useAccordianContext = () => useContext(AccordianContext);

export const useContent = () => {
  const { contentRef, height, active } = useAccordianContext();
  return { contentRef, height, active };
};

export const useTitle = () => {
  const { onToggle, active } = useAccordianContext();
  return { onToggle, active };
};

export default function (props) {
  const treeContext = useTreeContext();
  const active = useToggle();
  const contentRef = useRef();
  const idRef = useRef();
  const [height, setHeight] = useState();

  const onToggle = useCallback(() => {
    active.toggle();
  }, [active]);

  useEffect(() => {
    if (!idRef.current) {
      idRef.current = Math.random();

      treeContext.push({
        id: idRef.current,
        contentRef,
        rerenderFunc: () => {
          const nodeIndex = treeContext.findIndex(
            (node) => node.id === idRef.current
          );

          let height = 0;
          for (let i = 0; i <= nodeIndex; i++) {
            const node = treeContext[i];
            height += node.contentRef.current.scrollHeight;
          }

          setHeight(height);
        }
      });
    }
  }, [treeContext]);

  useEffect(() => {
    const nodeIndex = treeContext.findIndex(
      (node) => node.id === idRef.current
    );

    for (let i = 0; i <= nodeIndex; i++) {
      const node = treeContext[i];
      node.rerenderFunc();
    }
  }, [treeContext, active.on]);

  const getPropsAndHelpers = () => ({ height, active, onToggle, contentRef });

  return (
    <AccordianContext.Provider
      value={{
        onToggle,
        height,
        contentRef,
        active
      }}
    >
      {props.children(getPropsAndHelpers())}
    </AccordianContext.Provider>
  );
}

// usage
// Accordian render props 안에서 사용

const Title = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: none;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 5px;

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

// hooks를 이용해 컴포넌트 생성
export const AccordianTitle = (props) => {
  const { onToggle, active } = useTitle();

  return (
    <Title onClick={onToggle} active={active} {...props}>
      {props.children}
      {props.showArrow ? <ArrowDropDownIcon /> : null}
    </Title>
  );
};

export const AccordianContent = (props) => {
  const { contentRef, height, active } = useContent();

  return (
    <Content ref={contentRef} active={active} height={height}>
      {props.children}
    </Content>
  );
};
