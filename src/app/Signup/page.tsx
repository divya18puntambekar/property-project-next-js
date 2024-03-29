import { SignupPage } from "@/component/SignupPage";
import SignupSidebar from "@/component/SignupSidebar";
const page = () => {
  return (
    <>
      <section className="bg-blue-50 flex flex-wrap">
        <div className="grid grid-cols-2 w-full">
          <div className="signup_page_left_panel">
            <SignupSidebar />
          </div>
          <div className="signup_page_right_panel bg-blue-100">
            <SignupPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
