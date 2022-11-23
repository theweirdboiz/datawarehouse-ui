import { useState } from "react";
function App() {
  return (
    <div className="container">
      <div className="">
        <section className="content">
          <div className="mt-[20px] flex-auto">
            <div className="flex-col">
              <div className="font-semibold text-lg">January 2022</div>
              <div className="text-sm">Thursday, Jan 4, 2022</div>
            </div>
            <div className="content__search p-4">
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
