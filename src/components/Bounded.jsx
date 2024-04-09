import React,  { forwardRef } from "react";
import clsx from "clsx";



const Bounded = forwardRef(({ as: Comp = "section", className, children, ...restProps }, ref) => 
{
    console.log("as", Comp,)
    console.log(" className",  className)
    console.log("child----------Children", children)
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7x">{children}</div>
      </Comp>
    );
  })


// Set a display name for the component
//Bounded.displayName = "Bounded";

export default Bounded;
