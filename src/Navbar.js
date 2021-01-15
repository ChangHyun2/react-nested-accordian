import styled from "styled-components";
import React from "react";
import Accordian, { AccordianTitle, AccordianContent } from "./Accordian";

const Navbar = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export default function () {
  return (
    <Navbar>
      <Accordian>
        {() => (
          <>
            <AccordianTitle showArrow>2018</AccordianTitle>
            <AccordianContent>
              <li>
                <Accordian>
                  {() => (
                    <>
                      <AccordianTitle>인턴십</AccordianTitle>
                      <AccordianContent>
                        <li>뉴스 클러스터링</li>
                        <li>프렌즈 4블록</li>
                        <li>파일명 정렬</li>
                        <li>방금 그 곡</li>
                      </AccordianContent>
                    </>
                  )}
                </Accordian>
              </li>
              <li>
                <Accordian>
                  {() => (
                    <>
                      <AccordianTitle>블라인드</AccordianTitle>
                      <AccordianContent>
                        <li>뉴스 클러스터링</li>
                        <li>프렌즈 4블록</li>
                        <li>파일명 정렬</li>
                        <li>방금 그 곡</li>
                      </AccordianContent>
                    </>
                  )}
                </Accordian>
              </li>
            </AccordianContent>
          </>
        )}
      </Accordian>
      <Accordian>
        {() => (
          <>
            <AccordianTitle showArrow>2019</AccordianTitle>
            <AccordianContent>
              <li>뉴스 클러스터링</li>
              <li>프렌즈 4블록</li>
              <li>파일명 정렬</li>
              <li>방금 그 곡</li>
            </AccordianContent>
          </>
        )}
      </Accordian>
      <Accordian>
        {() => (
          <>
            <AccordianTitle showArrow>2020</AccordianTitle>
            <AccordianContent>
              <li>뉴스 클러스터링</li>
              <li>프렌즈 4블록</li>
              <li>파일명 정렬</li>
              <li>방금 그 곡</li>
            </AccordianContent>
          </>
        )}
      </Accordian>
    </Navbar>
  );
}
