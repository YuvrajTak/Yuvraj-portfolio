import React, {
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './styles.css'
import { PageFlip } from 'page-flip';
import HTMLFlipBook from "react-pageflip";

import { HTMLFlipBooks } from "./BookMain"

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className={"page page-cover page-cover-" + props.pos}
      ref={ref}
      data-density="hard"
    >
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref} data-density={props.density | "soft"}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});


function DemoBook(props) {
  const book = useRef();
  const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
  }, []);



  return (
    <>
    <div classname="bg-red-400">
      <HTMLFlipBook className="bg-red-400" width={400} height={600} onFlip={onFlip} ref={book}>
        <PageCover key={0} pos="top" number="1">HTMLFlipBooks text0000000000000</PageCover>
        <Page number="2">HTMLFlipBooks text0000000000000</Page>
        <Page number="3">HTMLFlipBooks text1111111111111111</Page>
        <Page number="4">HTMLFlipBooks text333333333333333333</Page>
        <Page number="5">HTMLFlipBooks text444444444444444</Page>
        <Page number="6">HTMLFlipBooks text222222222222222222222</Page>
        <PageCover key={100} pos="bottom" number="7">HTMLFlipBooks text0000000000000</PageCover>
        <PageCover key={101} pos="bottom" number="8">HTMLFlipBooks text0000000000000</PageCover>
      </HTMLFlipBook>

      <button className="bg-red-300" onClick={() =>
        book.current.pageFlip().flipNext()}>
        Next page</button>
        </div>
    </>
  );
}
export { DemoBook }