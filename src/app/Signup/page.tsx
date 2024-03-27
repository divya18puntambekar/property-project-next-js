import { SignupPage } from "@/component/SignupPage";
import SignupSidebar from "@/component/SignupSidebar";
const page = () => {
  return (
    <>
      <section className="bg-blue-50 flex flex-wrap p-6">
        <div className="bg-black">
          <SignupSidebar />
          <SignupPage />
        </div>
      </section>
    </>
  );
};

export default page;
