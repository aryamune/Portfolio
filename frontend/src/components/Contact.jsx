import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://portfolio-fbk7.onrender.com/api/contact",
        form
      );

      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-8 py-28"
    >
      <h2 className="text-5xl font-bold mb-12">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          required
        />

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;