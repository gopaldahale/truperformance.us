"use client";

import { useState } from "react";

const ZOHO_FORM_URL =
  "https://forms.zohopublic.in/taskory1/form/TaskoryLPForm/formperma/wChABRb9Fe9sVvlLstx1WPZZfBsDyty0-5E81IhySDI/htmlRecords/submit";

function validateEmail(value) {
  if (!value) return true; // optional field passes if empty
  const emailExp =
    /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
  return emailExp.test(value.trim());
}

export default function TaskoryLPForm() {
  const [fields, setFields] = useState({
    Name_First: "",
    Name_Last: "",
    Email: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!fields.Email.trim()) {
      newErrors.Email = "Email is required.";
    } else if (!validateEmail(fields.Email)) {
      newErrors.Email = "Please enter a valid email address.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("Name_First", fields.Name_First);
      formData.append("Name_Last", fields.Name_Last);
      formData.append("Email", fields.Email);
      formData.append("zf_referrer_name", "");
      formData.append("zf_redirect_url", "");
      formData.append("zc_gad", "");

      const res = await fetch(ZOHO_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Zoho doesn't support CORS; submission still goes through
      });

      // With no-cors the response is opaque, so we assume success
      setStatus("success");
      setFields({ Name_First: "", Name_Last: "", Email: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

        .tlp-bg {
          min-height: 100vh;
          background: rgba(237, 239, 244, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'DM Sans', sans-serif;
        }

        .tlp-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 0 40px 0 rgba(0,0,0,0.09);
          width: 100%;
          max-width: 520px;
          overflow: hidden;
        }

        .tlp-header {
          padding: 36px 44px 28px;
          border-bottom: 1px solid #ced3e0;
          text-align: center;
        }

        .tlp-title {
          font-family: 'DM Serif Display', serif;
          font-size: 32px;
          color: #252c3e;
          margin: 0;
          font-weight: 400;
        }

        .tlp-body {
          padding: 28px 44px 36px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .tlp-name-row {
          display: flex;
          gap: 16px;
        }

        .tlp-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .tlp-label {
          font-size: 14px;
          font-weight: 600;
          color: #252c3e;
          letter-spacing: 0.01em;
        }

        .tlp-sublabel {
          font-size: 12px;
          color: #252c3e;
          opacity: 0.6;
          margin-top: 4px;
        }

        .tlp-input {
          height: 44px;
          padding: 0 14px;
          border: 1.5px solid rgba(184, 187, 211, 1);
          border-radius: 8px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #252c3e;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }

        .tlp-input::placeholder {
          color: #9aa0b2;
        }

        .tlp-input:hover {
          border-color: #a8adc8;
        }

        .tlp-input:focus {
          border-color: #2eb79f;
          box-shadow: 0 0 0 3px rgba(46, 183, 159, 0.15);
        }

        .tlp-input.has-error {
          border-color: #f41033;
          box-shadow: 0 0 0 3px rgba(244, 16, 51, 0.1);
        }

        .tlp-error {
          font-size: 13px;
          color: #f41033;
          margin-top: 2px;
        }

        .tlp-submit {
          margin-top: 6px;
          height: 48px;
          background: red;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(46,183,159,0.3);
          letter-spacing: 0.02em;
        }

        .tlp-submit:hover:not(:disabled) {
          background: #27a690;
          box-shadow: 0 6px 20px rgba(46,183,159,0.4);
          transform: translateY(-1px);
        }

        .tlp-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .tlp-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .tlp-success {
          padding: 36px 44px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .tlp-success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(46,183,159,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2eb79f;
          font-size: 26px;
        }

        .tlp-success-title {
          font-family: 'DM Serif Display', serif;
          font-size: 24px;
          color: #252c3e;
          margin: 0;
        }

        .tlp-success-msg {
          font-size: 15px;
          color: #667291;
          margin: 0;
        }

        .tlp-net-error {
          font-size: 14px;
          color: #f41033;
          background: rgba(244,16,51,0.06);
          border-radius: 8px;
          padding: 10px 14px;
          text-align: center;
        }

        @media (max-width: 480px) {
          .tlp-header, .tlp-body, .tlp-success {
            padding-left: 24px;
            padding-right: 24px;
          }
          .tlp-name-row {
            flex-direction: column;
            gap: 22px;
          }
        }
      `}</style>

      <div className="tlp-bg">
        <div className="tlp-card">
          <div className="tlp-header">
            <h2 className="tlp-title">Taskory LP Form</h2>
          </div>

          {status === "success" ? (
            <div className="tlp-success">
              <div className="tlp-success-icon">✓</div>
              <p className="tlp-success-title">You&apos;re in!</p>
              <p className="tlp-success-msg">
                Thanks for signing up. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="tlp-body">
                {/* Name row */}
                <div>
                  <label className="tlp-label">Name</label>
                  <div className="tlp-name-row" style={{ marginTop: "8px" }}>
                    <div className="tlp-field">
                      <input
                        className="tlp-input"
                        type="text"
                        name="Name_First"
                        value={fields.Name_First}
                        onChange={handleChange}
                        placeholder="First name"
                        maxLength={255}
                        autoComplete="given-name"
                      />
                      <span className="tlp-sublabel">First Name</span>
                    </div>
                    <div className="tlp-field">
                      <input
                        className="tlp-input"
                        type="text"
                        name="Name_Last"
                        value={fields.Name_Last}
                        onChange={handleChange}
                        placeholder="Last name"
                        maxLength={255}
                        autoComplete="family-name"
                      />
                      <span className="tlp-sublabel">Last Name</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="tlp-field">
                  <label className="tlp-label" htmlFor="tlp-email">
                    Email
                  </label>
                  <input
                    id="tlp-email"
                    className={`tlp-input${errors.Email ? " has-error" : ""}`}
                    type="email"
                    name="Email"
                    value={fields.Email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    maxLength={255}
                    autoComplete="email"
                  />
                  {errors.Email && (
                    <span className="tlp-error">{errors.Email}</span>
                  )}
                </div>

                {status === "error" && (
                  <p className="tlp-net-error">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="tlp-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Submitting…" : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
