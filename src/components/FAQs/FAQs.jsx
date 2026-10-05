"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './FAQs.module.scss';

const FAQ_COUNT = 6;

const FAQs = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section} aria-labelledby="faqs-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <span className={styles.eyebrow}>{t('faq_eyebrow')}</span>
            <h2 className={styles.title} id="faqs-title">{t('faq_title')}</h2>
            <p className={styles.subtitle}>{t('faq_subtitle')}</p>
          </div>
          <Link href="/contact" className={styles.contactLink}>{t('faq_contact')}</Link>
        </div>

        <div className={styles.grid}>
          {Array.from({ length: FAQ_COUNT }, (_, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-question-${index + 1}`;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`} key={buttonId}>
                <h3 className={styles.questionHeading}>
                  <button
                    className={styles.question}
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{t(`faq_q${index + 1}`)}</span>
                    <span className={styles.toggleIcon} aria-hidden="true">
                      {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                    </span>
                  </button>
                </h3>
                <div
                  className={styles.answer}
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{t(`faq_a${index + 1}`)}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
