"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "76da9979-038b-4f6a-81d9-c8a55db66815";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Something went wrong on my end — mind trying again?");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong on their end — mind trying again?");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start py-1" role="status">
        <span className="form-success-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="14" fill="var(--color-mint-tint)" stroke="var(--color-mint)" strokeWidth="1.5" />
            <path
              d="M9 15.5 L13 19.5 L21 10.5"
              stroke="var(--color-mint)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl font-medium tracking-tight">Message sent!</h3>
        <p className="mt-2 max-w-xs leading-relaxed text-ink-soft">
          Thanks for reaching out — every message gets read, I&rsquo;ll get back to you soon.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New message from your portfolio" />
      <input type="hidden" name="from_name" value="Portfolio contact form" />
      {/* Honeypot — bots fill every field, humans never see this one. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

      <div className="field">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
          disabled={status === "submitting"}
          className="field-input"
        />
        <label htmlFor="name" className="field-label">
          Your name
        </label>
      </div>

      <div className="field">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder=" "
          disabled={status === "submitting"}
          className="field-input"
        />
        <label htmlFor="email" className="field-label">
          Email address
        </label>
      </div>

      <div className="field">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder=" "
          disabled={status === "submitting"}
          className="field-input"
        />
        <label htmlFor="message" className="field-label">
          What are you building?
        </label>
      </div>

      {status === "error" && (
        <p className="form-banner form-banner-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        data-cursor="Send it →"
        disabled={status === "submitting"}
        className="btn btn-solid mt-1 justify-center disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}