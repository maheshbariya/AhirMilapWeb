"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  const { t } = useLanguage();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    setIsSending(true);

    // Simulate server response delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className={styles.contactPage}>
      <div className="container">
        
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href="/">{t('about_breadcrumb_home')}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{t('nav_contact')}</span>
        </div>

        {/* Page Header */}
        <div className={styles.headerArea}>
          <h1 className={styles.title}>{t('contact_title')}</h1>
          <p className={styles.subtitle}>{t('contact_subtitle')}</p>
        </div>

        {/* Layout Grid */}
        <div className={styles.layoutGrid}>
          
          {/* Left Column: Premium Contact Information Cards */}
          <div className={styles.infoSection}>
            
            {/* Phone Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.cardContent}>
                <h4>{t('contact_info_phone_lbl')}</h4>
                <p>
                  <a href="tel:+918140210371" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>
                    +91 81402 10371
                  </a>
                </p>
                <p style={{ fontSize: '0.8125rem', color: '#888', marginTop: '0.25rem' }}>
                  Available for calls & WhatsApp queries
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.cardContent}>
                <h4>{t('contact_info_email_lbl')}</h4>
                <p>
                  <a href="mailto:mdahir8140@gmail.com" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>
                    mdahir8140@gmail.com
                  </a>
                </p>
                <p style={{ fontSize: '0.8125rem', color: '#888', marginTop: '0.25rem' }}>
                  Send your matchmaking queries anytime
                </p>
              </div>
            </div>

            {/* Office Card (Ahmedabad) */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.cardContent}>
                <h4>{t('contact_info_office_lbl')}</h4>
                <p style={{ fontWeight: 700, color: '#7E1D2B', marginBottom: '0.25rem' }}>
                  {t('contact_address_ahmedabad')}
                </p>
                <p>{t('contact_address_ahmedabad_val')}</p>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Clock size={24} />
              </div>
              <div className={styles.cardContent}>
                <h4>{t('contact_hours_lbl')}</h4>
                <p>{t('contact_hours_val')}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className={styles.formSection}>
            {!isSent ? (
              <form onSubmit={handleSubmit}>
                <h3>{t('contact_form_title')}</h3>
                <p className={styles.formSubtitle}>{t('contact_form_subtitle')}</p>

                {/* Name Input */}
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t('contact_field_name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact_field_name_placeholder')}
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t('contact_field_phone')} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact_field_phone_placeholder')}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t('contact_field_email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact_field_email_placeholder')}
                  />
                </div>

                {/* Message Textarea */}
                <div className={styles.formGroup}>
                  <label htmlFor="message">{t('contact_field_message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact_field_message_placeholder')}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSending}
                >
                  <Send size={18} />
                  {isSending ? t('contact_btn_sending') : t('contact_btn_submit')}
                </button>
              </form>
            ) : (
              // Success State
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <Check size={36} />
                </div>
                <h3>{t('contact_success_title')}</h3>
                <p>{t('contact_success_desc')}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
