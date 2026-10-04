"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './RegisterPage.module.scss';

export default function RegisterPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    gender: 'Male',
    dateOfBirth: '',
    mobileNumber: '',
    emailAddress: '',
    currentCity: '',
    nativePlace: '',

    // Family Details
    fatherName: '',
    motherName: '',
    siblings: '',
    familyDetails: '',

    // Education & Profession
    education: '',
    occupation: '',
    company: '',
    incomeRange: '',

    // Lifestyle
    height: '',
    maritalStatus: 'Never Married',
    diet: 'Vegetarian',
    lifestyle: '',
    hobbies: '',

    // Partner Preferences
    preferredAgeRange: '',
    preferredHeightRange: '',
    educationPreference: '',
    professionPreference: '',
    preferredLocation: '',
    maritalStatusPreference: 'Never Married',
    lifestylePreference: '',
    otherExpectations: '',

    // Additional Information
    aboutYourself: '',
    aboutFamily: '',
    additionalExpectations: '',

    // Contact Preference
    preferredContactMethod: 'WhatsApp',

    // Consent
    consentAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      alert("Please agree to the matchmaking consent checkbox before submitting.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <main className={styles.registerPage}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumbs}>
          <Link href="/">{t('about_breadcrumb_home')}</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{t('nav_register')}</span>
        </div>

        {submitted ? (
          <motion.div 
            className={styles.successBox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.successIcon}>
              <CheckCircle2 size={56} />
            </div>
            <h2>{t('reg_success_title')}</h2>
            <p>{t('reg_success_msg')}</p>
            <Link href="/" className={styles.homeBtn}>
              {t('reg_go_home')}
            </Link>
          </motion.div>
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <span className={styles.badge}>
                <ShieldCheck size={16} /> Confidential & Human-Assisted
              </span>
              <h1 className={styles.title}>{t('reg_page_title')}</h1>
              <p className={styles.subtitle}>{t('reg_page_sub')}</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.registerForm}>

              {/* 1. PERSONAL DETAILS */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_personal')}</h2>
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName">{t('field_fullname')} *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Ramesh Ahir"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="gender">{t('field_gender')} *</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth">{t('field_dob')} *</label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mobileNumber">{t('field_mobile')} *</label>
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="emailAddress">{t('field_email')}</label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="currentCity">{t('field_city')} *</label>
                    <input
                      id="currentCity"
                      name="currentCity"
                      type="text"
                      placeholder="e.g. Rajkot / Ahmedabad"
                      value={formData.currentCity}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="nativePlace">{t('field_native')}</label>
                    <input
                      id="nativePlace"
                      name="nativePlace"
                      type="text"
                      placeholder="e.g. Junagadh / Kutch / Dwarka"
                      value={formData.nativePlace}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 2. FAMILY DETAILS */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_family')}</h2>
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fatherName">{t('field_father_name')}</label>
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      placeholder="Father's full name & profession"
                      value={formData.fatherName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="motherName">{t('field_mother_name')}</label>
                    <input
                      id="motherName"
                      name="motherName"
                      type="text"
                      placeholder="Mother's name"
                      value={formData.motherName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="siblings">{t('field_siblings')}</label>
                    <input
                      id="siblings"
                      name="siblings"
                      type="text"
                      placeholder="e.g. 1 Elder Brother (Married), 1 Sister"
                      value={formData.siblings}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="familyDetails">{t('field_family_details')}</label>
                    <textarea
                      id="familyDetails"
                      name="familyDetails"
                      rows={3}
                      placeholder="Brief details about your family, lineage, joint/nuclear family background..."
                      value={formData.familyDetails}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 3. EDUCATION & PROFESSION */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_edu_prof')}</h2>
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="education">{t('field_education')} *</label>
                    <input
                      id="education"
                      name="education"
                      type="text"
                      placeholder="e.g. B.Tech / M.Com / Doctor / CA"
                      value={formData.education}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="occupation">{t('field_occupation')} *</label>
                    <input
                      id="occupation"
                      name="occupation"
                      type="text"
                      placeholder="e.g. Software Engineer / Govt Officer / Business"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">{t('field_company')}</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name or business description"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="incomeRange">{t('field_income')}</label>
                    <select
                      id="incomeRange"
                      name="incomeRange"
                      value={formData.incomeRange}
                      onChange={handleChange}
                    >
                      <option value="">Select Annual Income</option>
                      <option value="Under 3 LPA">Under 3 LPA</option>
                      <option value="3 to 6 LPA">3 to 6 LPA</option>
                      <option value="6 to 10 LPA">6 to 10 LPA</option>
                      <option value="10 to 18 LPA">10 to 18 LPA</option>
                      <option value="18 LPA+">18 LPA+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. LIFESTYLE */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_lifestyle')}</h2>
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="height">{t('field_height')}</label>
                    <select
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                    >
                      <option value="">Select Height</option>
                      <option value="5'0&quot; (152 cm)">5&apos;0&quot; (152 cm)</option>
                      <option value="5'2&quot; (157 cm)">5&apos;2&quot; (157 cm)</option>
                      <option value="5'4&quot; (163 cm)">5&apos;4&quot; (163 cm)</option>
                      <option value="5'6&quot; (168 cm)">5&apos;6&quot; (168 cm)</option>
                      <option value="5'8&quot; (173 cm)">5&apos;8&quot; (173 cm)</option>
                      <option value="5'10&quot; (178 cm)">5&apos;10&quot; (178 cm)</option>
                      <option value="6'0&quot; (183 cm)">6&apos;0&quot; (183 cm)</option>
                      <option value="6'2&quot;+ (188 cm+)">6&apos;2&quot;+ (188 cm+)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="maritalStatus">{t('field_marital')} *</label>
                    <select
                      id="maritalStatus"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="Never Married">Never Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Awaiting Divorce">Awaiting Divorce</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="diet">{t('field_diet')}</label>
                    <select
                      id="diet"
                      name="diet"
                      value={formData.diet}
                      onChange={handleChange}
                    >
                      <option value="Vegetarian">Pure Vegetarian</option>
                      <option value="Eggetarian">Eggetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hobbies">{t('field_hobbies')}</label>
                    <input
                      id="hobbies"
                      name="hobbies"
                      type="text"
                      placeholder="Reading, traveling, music, sports..."
                      value={formData.hobbies}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 5. PARTNER PREFERENCES */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_pref')}</h2>
                <div className={styles.gridTwo}>
                  <div className={styles.formGroup}>
                    <label htmlFor="preferredAgeRange">{t('field_pref_age')}</label>
                    <input
                      id="preferredAgeRange"
                      name="preferredAgeRange"
                      type="text"
                      placeholder="e.g. 23 to 27 years"
                      value={formData.preferredAgeRange}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredHeightRange">{t('field_pref_height')}</label>
                    <input
                      id="preferredHeightRange"
                      name="preferredHeightRange"
                      type="text"
                      placeholder="e.g. 5'2&quot; to 5'7&quot;"
                      value={formData.preferredHeightRange}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="educationPreference">{t('field_pref_education')}</label>
                    <input
                      id="educationPreference"
                      name="educationPreference"
                      type="text"
                      placeholder="e.g. Graduate or Post Graduate"
                      value={formData.educationPreference}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="professionPreference">{t('field_pref_occupation')}</label>
                    <input
                      id="professionPreference"
                      name="professionPreference"
                      type="text"
                      placeholder="e.g. Govt Job, Doctor, Engineer, Corporate..."
                      value={formData.professionPreference}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="preferredLocation">{t('field_pref_location')}</label>
                    <input
                      id="preferredLocation"
                      name="preferredLocation"
                      type="text"
                      placeholder="e.g. Gujarat / Saurashtra / Ahmedabad"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="maritalStatusPreference">{t('field_pref_marital')}</label>
                    <select
                      id="maritalStatusPreference"
                      name="maritalStatusPreference"
                      value={formData.maritalStatusPreference}
                      onChange={handleChange}
                    >
                      <option value="Never Married">Never Married Only</option>
                      <option value="Any">No Preference</option>
                    </select>
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="otherExpectations">{t('field_pref_other')}</label>
                    <textarea
                      id="otherExpectations"
                      name="otherExpectations"
                      rows={3}
                      placeholder="Describe what qualities you expect in your life partner..."
                      value={formData.otherExpectations}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 6. ADDITIONAL INFORMATION */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_add_info')}</h2>
                <div className={styles.gridTwo}>
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="aboutYourself">{t('field_about_self')}</label>
                    <textarea
                      id="aboutYourself"
                      name="aboutYourself"
                      rows={3}
                      placeholder="Write a brief overview about your personality, values, and lifestyle..."
                      value={formData.aboutYourself}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="aboutFamily">{t('field_about_family')}</label>
                    <textarea
                      id="aboutFamily"
                      name="aboutFamily"
                      rows={3}
                      placeholder="Write a brief description of your family environment..."
                      value={formData.aboutFamily}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* 7. CONTACT PREFERENCE */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>{t('reg_sec_contact_pref')}</h2>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredContactMethod">{t('field_contact_method')} *</label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              {/* CONSENT CHECKBOX */}
              <div className={styles.consentBlock}>
                <label htmlFor="consentAgreed" className={styles.checkboxLabel}>
                  <input
                    id="consentAgreed"
                    name="consentAgreed"
                    type="checkbox"
                    checked={formData.consentAgreed}
                    onChange={handleChange}
                    required
                  />
                  <span>{t('reg_consent_label')}</span>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div className={styles.submitWrapper}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={submitting}
                >
                  {submitting ? t('reg_submitting') : t('reg_submit_btn')}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </main>
  );
}
