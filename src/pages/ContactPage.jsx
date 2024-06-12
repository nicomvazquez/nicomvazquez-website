import React from "react";

import { contactTags } from "../constants";

import { ContactTags } from "../components";

function ContactPage() {
  return (
    <section className="text-white py-24 md:py-32">
      <h1 className="text-5xl md:text-7xl font-semibold">Trabajemos juntos.</h1>
      <div className="grid md:grid-cols-3 gap-28 my-16">
        {contactTags.map((i) => (
          <ContactTags
            key={i.name}
            title={i.title}
            description={i.description}
            icon={i.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ContactPage;
