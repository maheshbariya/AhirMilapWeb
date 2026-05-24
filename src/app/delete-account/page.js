"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './DeleteAccountPage.module.scss';

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: '',
    confirm: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.reason || !formData.confirm) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className={styles.deletePage}>
      <div className="container">
        <div className={styles.pageShell}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Delete Account</span>
          </div>

          <section className={styles.heroSection}>
            <div className={styles.heroPanel}>
              <span className={styles.eyebrow}>Account Security</span>
              <h1>Delete Your Account</h1>
              <p>
                Request permanent deletion of your AhirMilap account and associated personal data.
                We handle every request carefully and respect your privacy throughout the process.
              </p>
            </div>
          </section>

          <section className={styles.gridSection}>
            <div className={styles.infoCard}>
              <h2>What to know before deleting</h2>
              <p>
                Once your account is deleted, the action cannot be undone. Please review the
                details before sending your request.
              </p>
              <ul>
                <li>Account deletion is permanent.</li>
                <li>Profile photos and personal information will be removed.</li>
                <li>
                  Some data may be retained for up to 30 days for security and legal purposes.
                </li>
              </ul>
            </div>

            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2>Request Account Deletion</h2>
                <p>Complete the details below to initiate the deletion process.</p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <h3>Request submitted</h3>
                  <p>
                    Thank you. We received your request and will process it shortly. You will be
                    notified via email once your account deletion is complete.
                  </p>
                </div>
              ) : (
                <form className={styles.deleteForm} onSubmit={handleSubmit}>
                  <label className={styles.fieldGroup} htmlFor="fullName">
                    <span>Full Name</span>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </label>

                  <label className={styles.fieldGroup} htmlFor="email">
                    <span>Email Address</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className={styles.fieldGroup} htmlFor="phone">
                    <span>Mobile Number</span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 81234 56789"
                    />
                  </label>

                  <label className={styles.fieldGroup} htmlFor="reason">
                    <span>Reason for Deletion</span>
                    <textarea
                      id="reason"
                      name="reason"
                      rows="5"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Tell us why you are leaving"
                      required
                    />
                  </label>

                  <label className={styles.checkboxGroup} htmlFor="confirm">
                    <input
                      id="confirm"
                      name="confirm"
                      type="checkbox"
                      checked={formData.confirm}
                      onChange={handleChange}
                      required
                    />
                    <span>I understand that this action is permanent.</span>
                  </label>

                  <button className={styles.submitButton} type="submit">
                    Request Account Deletion
                  </button>
                </form>
              )}
            </div>
          </section>

          <section className={styles.supportSection}>
            <div>
              <p className={styles.supportLabel}>Need help?</p>
              <p>
                Contact our support team at{' '}
                <a href="mailto:mdahir8140@gmail.com">mdahir8140@gmail.com</a>
              </p>
            </div>
          </section>

          <footer className={styles.footerNote}>
            AhirMilap respects your privacy and data security.
          </footer>
        </div>
      </div>
    </main>
  );
}
