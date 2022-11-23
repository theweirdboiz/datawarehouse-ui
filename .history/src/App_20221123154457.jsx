import { useState } from "react";
function App() {
  return (
    <div className="container mx-auto">
      <div className="">
        <section className="content">
          <div className="mt-[20px] flex">
            <div className="flex-col">
              <div className="font-semibold text-lg">January 2022</div>
              <div className="text-sm">Thursday, Jan 4, 2022</div>
            </div>
            <div className="content__search p-4">
              search
              <input
                className="ml-2"
                type="text"
                placeholder="Search location here"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
