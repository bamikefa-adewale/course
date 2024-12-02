import React from "react";
import CustomHeader from "../ui/CustomHeader";
import CustomButton from "../ui/CustomButton";

const ReactComponent = () => {
  const logo =
    "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5Ijoic2JndGtud3pjcndybTE5NThnOXZtMTEzZjFwMyIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.qQ33HbcEAIWvtxnzdmWZ1CKdZK_a8zQgILnsYcfubeE";

  return (
    <section className="my-0 mx-auto lg:max-w-screen-xl px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 py-[20px] px-[20px] items-center lg:items-start">
        <img
          src={logo}
          alt="banner"
          className="w-full  lg:max-w-[400px] rounded-xl"
        />
        <div className="my-6 text-start lg:text-left">
          <CustomHeader title="React Simplified" />
          <p className="text-[18px] sm:text-[20px] lg:text-[18px] my-4">
            Learn how to think in components and build any React project you can
            dream of by taking action instead of just following along with
            tutorials.
          </p>
          <CustomButton title="View Course" />
        </div>
      </div>
    </section>
  );
};

export default ReactComponent;
