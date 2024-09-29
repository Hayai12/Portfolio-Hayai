const Contact = () => {
  return (
    <section id="contact" className=" pb-12 pt-4 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-gray-800">
          If you're interested in working with me, feel free to reach out!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
