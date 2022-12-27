import React from "react";
import Accordion from "./faq/Accordion";

const FAQ = () => {
  return (
    <div className="faq-wrapper">
      <div>
        <h1 className="heading">FAQs</h1>
        <div>
          <Accordion
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <Accordion
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of t"
          />
          <Accordion
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;