"use client"
import { AddProperty, AddPropertyImage } from "../../api/route/route"

const page = () => {
  return (
    <>
    <section className="bg-blue-100 flex">
      <AddProperty />
      {/* <AddPropertyImage /> */}
    </section>
    </>
  )
}

export default page