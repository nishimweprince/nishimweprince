'use client';

import { useId, useRef } from 'react';
import type { MouseEvent } from 'react';

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  credential?: string | null;
  skills?: string[];
}

export default function CertificationItem({
  title,
  issuer,
  date,
  credential,
  skills = [],
}: CertificationItemProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const remainingSkills = skills.slice(3);
  const titleContent = credential ? (
    <a href={credential} target="_blank" rel="noopener noreferrer">{title} <span aria-hidden="true">↗</span></a>
  ) : title;

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <article className="credential-row">
      <div>
        <h3>{titleContent}</h3>
        <p>{issuer}</p>
      </div>
      <div className="credential-skills" aria-label="Skills">
        {skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
        {remainingSkills.length > 0 && (
          <button
            type="button"
            className="credential-skill-count"
            onClick={() => dialogRef.current?.showModal()}
            aria-haspopup="dialog"
            aria-label={`Show ${remainingSkills.length} more skills for ${title}`}
          >
            +{remainingSkills.length}
          </button>
        )}
      </div>
      <time>{date}</time>

      {remainingSkills.length > 0 && (
        <dialog
          ref={dialogRef}
          className="skills-dialog"
          aria-labelledby={titleId}
          onClick={closeOnBackdrop}
        >
          <div className="skills-dialog__panel">
            <div className="skills-dialog__header">
              <div>
                <p className="eyebrow">Credential dossier</p>
                <h3 id={titleId}>{title}</h3>
                <p>{issuer}</p>
              </div>
              <button
                type="button"
                className="skills-dialog__close"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close skills dialog"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <p className="skills-dialog__label">Other skills attained</p>
            <ul>
              {remainingSkills.map((skill, index) => (
                <li key={skill}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </dialog>
      )}
    </article>
  );
}
