import { useActionState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Container from "./ui/Container";
import Button from "./ui/Button";

async function submitForm(prevState, formData) {
  try {
    const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) {
      return {
        status: "success",
        message:
          "Thank you for your message. I’ll get back to you within 1–2 business days.",
      };
    }

    return {
      status: "error",
      message: "Something went wrong. Please try again or email me directly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or email me directly.",
    };
  }
}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    status: "idle",
    message: "",
  });

  return (
    <section id="contact" className="py-16 md:py-24 bg-bg">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="contact"
            title="Let’s connect"
            subtext="I’m open to junior software development opportunities and project collaborations."
          />

          <form action={formAction} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm text-ink bg-bg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm text-ink bg-bg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-mono text-xs uppercase tracking-widest text-muted mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="_subject"
                type="text"
                required
                placeholder="Software Developer Opportunity"
                className="w-full border border-border rounded-md px-4 py-3 font-body text-sm text-ink bg-bg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-widest text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role, team, or project you’d like to discuss."
                className="w-full border border-border rounded-md px-4 py-3 font-body text-sm text-ink bg-bg placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <Button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send message"}
            </Button>

            {state.status === "success" && (
              <p className="font-body text-sm text-accent">{state.message}</p>
            )}
            {state.status === "error" && (
              <p className="font-body text-sm text-red-600">{state.message}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
