import React, { FC } from "react"

const PageAccord: FC = () => {
  return (
    <div className="accordion" id="accordionExample5">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header text-center mb-0" id="headingOne5">
          <button
            className="
                accordion-button
                flex
                w-full
                py-4
                px-5
                text-base text-gray-800
                text-center
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne5"
            aria-expanded="true"
            aria-controls="collapseOne5"
          >
            Информационные системы
          </button>
        </h2>
        <div
          id="collapseOne5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne5"
        >
          <div className="accordion-body py-4 px-5 text-center">
            <a href="/calendar">
              <span className="text-neutral-700 hover:text-white hover:bg-red-900  font-bold rounded-full py-2 px-4">
                График ВКС
              </span>
            </a>
            <a href="/systems">
              <span className="text-neutral-700 hover:text-white hover:bg-red-900  font-bold rounded-full py-2 px-4">
                Шаблоны форм статической отчетности
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Контроль распоряжений
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Военн-научная работа
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Сводки МЧС ЮФО
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo5">
          <button
            className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo5"
            aria-expanded="false"
            aria-controls="collapseTwo5"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo5"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo5"
        >
          <div className="accordion-body py-4 px-5">
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Контроль распоряжений
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Военн-научная работа
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Сводки МЧС ЮФО
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree5">
          <button
            className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree5"
            aria-expanded="false"
            aria-controls="collapseThree5"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree5"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree5"
        >
          <div className="accordion-body py-4 px-5"></div>
        </div>
      </div>
    </div>
  )
}

export default PageAccord
