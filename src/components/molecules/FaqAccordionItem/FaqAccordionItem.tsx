import type { FaqItem } from '@/data/faq'
import styles from './FaqAccordionItem.module.css'

interface FaqAccordionItemProps {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function FaqAccordionItem({ item, index, isOpen, onToggle }: FaqAccordionItemProps) {
  const questionId = `faq-question-${index}`
  const answerId = `faq-answer-${index}`

  return (
    <div className={[styles.item, isOpen ? styles.open : ''].filter(Boolean).join(' ')}>
      <button
        id={questionId}
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        type="button"
      >
        <span className={styles.questionText}>{item.question}</span>
        <span className={styles.chevron} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={styles.answerWrapper}
        hidden={!isOpen}
      >
        <p className={styles.answer}>{item.answer}</p>
      </div>
    </div>
  )
}
