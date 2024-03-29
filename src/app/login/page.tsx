"use client"
import LoginLeftPanel from '@/component/LoginLeftPanel';
import LoginRightPanel from '@/component/LoginRightPanel';

const page = () => {
    return (
      <section className="flex flex-wrap">
        <div className="grid grid-cols-2 w-full">
          <div className="signup_page_left_panel">
          <LoginLeftPanel />
          </div>
          <div className="signup_page_right_panel bg-blue-300">
          <LoginRightPanel />
          </div>
        </div>
      </section>
      );
}

export default page