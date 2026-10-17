import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { useLanguage } from '../context/useLanguage';

function ProjectModal({ project, ui, onClose, triggerRef }) {
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef(null);
  const image = project.images[activeImage];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        setActiveImage((current) => (current - 1 + project.images.length) % project.images.length);
      } else if (event.key === 'ArrowRight') {
        setActiveImage((current) => (current + 1) % project.images.length);
      } else if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerElement?.focus();
    };
  }, [onClose, project.images.length, triggerRef]);

  function changeImage(direction) {
    setActiveImage((current) => (
      (current + direction + project.images.length) % project.images.length
    ));
  }

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="project-modal"
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <button
          aria-label={ui.closeProject}
          className="project-modal-close"
          onClick={onClose}
          type="button"
        >
          <Icon name="close" size={21} />
        </button>

        <div className="project-carousel">
          <img className="project-carousel-image" src={image} alt={`${project.title} - ${ui.showScreenshot} ${activeImage + 1}`} />
          {project.images.length > 1 && (
            <>
              <button
                aria-label={ui.previousScreenshot}
                className="carousel-arrow carousel-arrow-left"
                onClick={() => changeImage(-1)}
                type="button"
              >
                <Icon name="chevron-left" />
              </button>
              <button
                aria-label={ui.nextScreenshot}
                className="carousel-arrow carousel-arrow-right"
                onClick={() => changeImage(1)}
                type="button"
              >
                <Icon name="chevron-right" />
              </button>
              <div aria-label={ui.chooseScreenshot} className="carousel-dots">
                {project.images.map((screenshot, index) => (
                  <button
                    aria-current={index === activeImage ? 'true' : undefined}
                    aria-label={`${ui.showScreenshot} ${index + 1}`}
                    className={`carousel-dot${index === activeImage ? ' carousel-dot-active' : ''}`}
                    key={screenshot}
                    onClick={() => setActiveImage(index)}
                    type="button"
                  />
                ))}
              </div>
            </>
          )}
          <span className="carousel-counter">{activeImage + 1} / {project.images.length}</span>
        </div>

        <div className="project-modal-content">
          <p className="eyebrow">{ui.projectDetails}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project-modal-description">{project.description}</p>

          <div className="project-detail-block">
            <h3>{ui.roleContribution}</h3>
            <p><strong>{project.role}</strong>{ui.roleContributionSeparator}{project.contribution}</p>
          </div>

          <div className="project-detail-block">
            <h3>{ui.keyFeatures}</h3>
            <ul className="project-feature-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>

          <div className="project-detail-block">
            <h3>{ui.techStack}</h3>
            <div className="tag-list">
              {project.techStack.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const { language } = useLanguage();
  const { projects, projectsSection, ui } = portfolioData[language];
  const triggerRef = useRef(null);
  const closeModal = () => setActiveProjectIndex(null);

  function openProject(project, event) {
    triggerRef.current = event.currentTarget;
    setActiveProjectIndex(projects.indexOf(project));
  }

  return (
    <section className="section section-tinted" id="projects">
      <div className="content-width">
        <div className="section-heading">
          <p className="eyebrow">{projectsSection.heading}</p>
          <h2>{projectsSection.title}<span className="brand-period">.</span></h2>
          <p className="section-intro">
            {projectsSection.intro}
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              aria-haspopup="dialog"
              className="project-card project-card-button panel"
              key={project.title}
              onClick={(event) => openProject(project, event)}
              type="button"
            >
              <span className="project-number">0{index + 1}</span>
              <span className="project-card-title">{project.title}</span>
              <span className="project-card-description">{project.description}</span>
              <span className="tag-list">
                {project.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </span>
              <span className="project-link">
                {projectsSection.viewDetails} <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {activeProjectIndex !== null && (
        <ProjectModal
          key={projects[activeProjectIndex].title}
          onClose={closeModal}
          project={projects[activeProjectIndex]}
          triggerRef={triggerRef}
          ui={ui}
        />
      )}
    </section>
  );
}

export default Projects;
