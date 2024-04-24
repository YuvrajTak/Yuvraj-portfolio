import React, {
  useCallback,
  useRef,
} from 'react';
import './styles.css'
import LinkButton from './LinkButton'
import { PageFlip } from 'page-flip';
import HTMLFlipBook from "react-pageflip";
import { arrow, demo, project, candyLogo, subway } from "../assets/icons";
import { Link } from "react-router-dom";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className={props?.pos=="top"  && "page page-cover page-cover-" + props.pos}
      ref={ref}
      data-density="hard"
    >
      <div className="page-content flex content-center">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page stf__item --soft --left"
      style={{
        // position: 'absolute',
        // display: 'block',
        // height: '739.664px',
        // left: '0px',
        // top: '0.168182px',
        // width: '555px',
        // zIndex: '1',
      }}
      ref={ref} data-density={props.density | "soft"}>
      <div className="page-content">
        {/* <h1 className="page-header font-bold"> {props.header}</h1> */}
        <h1 className='head-text'>

          <span className='blue-gradient_text drop-shadow font-semibold'>
            {props.header}
          </span>
        </h1>
        <div
          className="page-image"
          style={{ backgroundImage: "url(" + props.image + ")", width: '100%' }}
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


  // mx-auto sm:pl-4 md:pl-4 lg:pl-28 
  return (
    <>
      <div className='mx-auto sm:pl-4 md:pl-4 lg:pl-28'>
        <HTMLFlipBook
          ref={book}
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          // showCover={true}
          //   flippingTime={1000}
          style={{ margin: "0 auto" }}
          //maxShadowOpacity={1}
          className="album-web"

        >
          <PageCover image={demo} key={0} pos="top" number="1"></PageCover>
          <Page image={project} key={1} number={1} header='...'>
            <h1 className='head-text ml-12'>
              My
              <span> </span>
              <span className='blue-gradient_text drop-shadow font-semibold'>
                 Projects List
              </span>
            </h1>

          </Page>
          <Page image={demo} number={2} header='Nu-Life'>

            <p className='m-4 leading-relaxed rainbow-text'>
              It is an application in the healthcare domain. It digitizes nursing home operations and eases access to
              customer-focused medical products globally.
              In this project, my responsibilities included the development of the Frontend architecture with React Js, collaborating
              with other team members, implementing backend APIs using Express Js Framework and server side rendering using Template Engine
              Handlbar and troubleshooting system issues, and staying up-to-date with the
              latest technologies and industry trends. Also, deployed the code on the server using some AWS services.
            </p>
          </Page>
          <Page image={subway} number={5} header='Subway Runner'>
            <div className='flex  justify-center'>
              <Link to="/runnergame" className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-l">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 0 1 .174 2.495M17 16a4 4 0 0 1 2.495 .174M17 8a4 4 0 0 1-.174 2.495M7 8a4 4 0 0 1-2.495-.174"></path></svg>
                Live WEB Magic Demo
              </Link>
            </div>
           
            <p className='m-4 leading-relaxed rainbow-text'>
              - It is a Gaming application publish on Google Play Store.<br/>
              - It uses Endless Subway Runner concept game on Stunning UI.<br/>
              - Utilized C# programming to create the core game logic and functionalities.<br/>
              
            </p>
          </Page>
         
          <Page  image={demo} number={4} header='Rc-Childcare'>
  
           
            <p className='m-4 leading-relaxed rainbow-text'>
              -Developed a multilingual childcare application targeting parents in Irish, English, and Arbic language.<br/>
              -Integrated Google Language API to enable real-time translation of service descriptions into Irish, English (UK dialect), and Arabic for the targeted regions.<br/>
              -Implemented an interactive text editor for creating childcare service descriptions.
            </p>
          
          </Page>
          <Page image={candyLogo} number={3} header='Angry Birds Blast'>
            <div className='flex  justify-center'>
              <Link to="/candygame" className="px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-l">
                <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 0 1 .174 2.495M17 16a4 4 0 0 1 2.495 .174M17 8a4 4 0 0 1-.174 2.495M7 8a4 4 0 0 1-2.495-.174"></path></svg>
                Live Magic Demo
              </Link>
            </div>
           
            <p className='m-4 leading-relaxed rainbow-text'>
              - It is a Gaming application publish on Google Play Store.<br/>
              - It digitizes Match 3 concept of puzzle game on Stunning UI.<br/>
              - Utilized C# programming to create the core game logic and functionalities.<br/>
              - Implemented level data storage using a lightweight JSON file format for efficient level management and scalability.
            </p>
          </Page>
          <PageCover key={100} pos="bottom" number={6} header='Portfolio Website'>
          Portfolio Website
           </PageCover>
          <PageCover key={101} pos="top" number={7}></PageCover>
        </HTMLFlipBook>
      </div>



      <div className='flex justify-center m-8'>
        <button className="btn bg-indigo-500 text-white font-bold py-2 px-4 mr-4 rounded-full hover:bg-indigo-700 shadow-sm"
          onClick={() => {
            console.log(book.current.pageFlip())
            book.current.pageFlip().flipPrev()
          }}>
          <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 0 1 .174 2.495M17 16a4 4 0 0 1 2.495 .174M17 8a4 4 0 0 1-.174 2.495M7 8a4 4 0 0 1-2.495-.174"></path></svg>
          Last Page
        </button>
        <button className="btn bg-indigo-500 text-white font-bold py-2 px-4 ml-4 rounded-full hover:bg-indigo-700 shadow-sm"
          onClick={() => { book.current.pageFlip().flipNext() }}>
          <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 0 1 .174 2.495M17 16a4 4 0 0 1 2.495 .174M17 8a4 4 0 0 1-.174 2.495M7 8a4 4 0 0 1-2.495-.174"></path></svg>
          Next Page
        </button>

      </div>

    </>
  );
}
export { DemoBook }