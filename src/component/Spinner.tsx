"use client";
import DotLoader from "react-spinners/DotLoader"
import { CSSProperties } from "react";

const override: CSSProperties = {
  // display: "block",
  margin: "0 auto",
  // minWidth: "100%",
  borderColor: "blue",
}
const Spinner = (loading: any) => {
  return (
    <div className="flex h-screen items-center">
      <DotLoader  
        color= '#36d7b7'
        loading={loading} 
        size={50}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner