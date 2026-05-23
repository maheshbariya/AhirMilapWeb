"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Eye,
  EyeOff,
  HeartHandshake,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserPlus,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    identity: '',
    password: '',
    remember: true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    setStatus('idle');
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');

    window.setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const highlights = [
    t('login_highlight_verified'),
    t('login_highlight_private'),
    t('login_highlight_family'),
  ];

  return (
    <main className={styles.loginPage}>
      <div className="container">
        <div className={styles.breadcrumbs}>
          <Link href="/">{t('about_breadcrumb_home')}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{t('login_breadcrumb')}</span>
        </div>

        <div className={styles.loginShell}>
          <section className={styles.brandPanel} aria-labelledby="login-heading">
            <span className={styles.eyebrow}>{t('login_eyebrow')}</span>
            <h1 id="login-heading" className={styles.title}>{t('login_title')}</h1>
            <p className={styles.subtitle}>{t('login_subtitle')}</p>

            <div className={styles.highlights}>
              {highlights.map((highlight) => (
                <div className={styles.highlight} key={highlight}>
                  <CheckCircle2 size={18} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <strong>{t('login_trust_title')}</strong>
                <p>{t('login_trust_desc')}</p>
              </div>
            </div>
          </section>

          <section className={styles.formPanel} aria-label={t('login_form_title')}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>
                <HeartHandshake size={24} />
              </div>
              <div>
                <h2>{t('login_form_title')}</h2>
                <p>{t('login_form_subtitle')}</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="identity">{t('login_identity_label')}</label>
                <div className={styles.inputWrap}>
                  <Mail size={18} />
                  <input
                    id="identity"
                    name="identity"
                    type="text"
                    value={formData.identity}
                    onChange={handleInputChange}
                    placeholder={t('login_identity_placeholder')}
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="password">{t('login_password_label')}</label>
                  <Link href="/contact">{t('login_forgot')}</Link>
                </div>
                <div className={styles.inputWrap}>
                  <LockKeyhole size={18} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={t('login_password_placeholder')}
                    autoComplete="current-password"
                    minLength={6}
                    required
                  />
                  <button
                    className={styles.passwordToggle}
                    type="button"
                    aria-label={showPassword ? t('login_hide_password') : t('login_show_password')}
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <label className={styles.rememberRow}>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                <span>{t('login_remember')}</span>
              </label>

              <button className={styles.submitButton} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? t('login_signing_in') : t('login_submit')}
              </button>

              {status === 'success' && (
                <p className={styles.successMessage} role="status">
                  <CheckCircle2 size={18} />
                  {t('login_success')}
                </p>
              )}
            </form>

            <div className={styles.divider}>
              <span>{t('login_or')}</span>
            </div>

            <Link href="/contact" className={styles.createLink}>
              <UserPlus size={18} />
              <span>{t('login_create_profile')}</span>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
