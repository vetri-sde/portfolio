// src/components/ProjectsGrid.jsx
import React, { useState } from "react";
import {
  SparklesIcon,
  CodeBracketIcon,
  FolderIcon,
  UserIcon
} from "@heroicons/react/24/solid";

/**
 * Heroicon map (extend as needed)
 */
const ICON_MAP = {
  sparkles: SparklesIcon,
  code: CodeBracketIcon,
  folder: FolderIcon,
  user: UserIcon
};

/**
 * createPreview: returns a preview string that is <= charLimit and never cuts words.
 */
function createPreview(text, charLimit = 160) {
  if (!text) return "";
  if (text.length <= charLimit) return text;
  const words = text.split(/\s+/);
  let preview = "";
  for (let i = 0; i < words.length; i++) {
    const next = (preview ? preview + " " : "") + words[i];
    if (next.length > charLimit) break;
    preview = next;
  }
  // If nothing fits (rare), fall back to first charLimit characters but try not to cut a word:
  if (!preview) preview = text.slice(0, charLimit).trim();
  return preview;
}

/**
 * ProjectCard: single card with "Show more" toggle
 */
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const preview = createPreview(project.description || "", 160);

  // icon: either a mapped Heroicon or fallback to image url
  const IconComp = project.iconName ? ICON_MAP[project.iconName] : null;
  const hasImageIcon = project.iconUrl;

  return (
    <article
      className="relative group bg-[rgba(255,255,255,0.02)] border border-white/6 rounded-lg p-6 shadow-md
                 backdrop-blur-sm transition-transform transform hover:-translate-y-1 hover:shadow-2xl
                 hover:ring-1 hover:ring-violet-700/30"
      aria-label={project.title}
    >
      <div className="flex items-start gap-4">
        <div className="flex-none w-12 h-12 rounded-md flex items-center justify-center bg-white/5 border border-white/4">
          {IconComp ? (
            <IconComp className="w-6 h-6 text-violet-400" />
          ) : hasImageIcon ? (
            <img
              src={project.iconUrl}
              alt={`${project.title} icon`}
              className="w-8 h-8 object-cover rounded-sm"
            />
          ) : (
            <FolderIcon className="w-6 h-6 text-violet-400" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <div className="mt-3 text-sm text-gray-300">
            {open ? (
              <p className="whitespace-pre-wrap">{project.description}</p>
            ) : (
              <p className="whitespace-pre-wrap">
                {preview}
                {preview.length < project.description.length ? "..." : ""}
              </p>
            )}
          </div>

          {project.description && project.description.length > preview.length && (
            <button
              onClick={() => setOpen((s) => !s)}
              className="mt-3 text-sm text-violet-300 hover:text-violet-200 font-medium"
              aria-expanded={open}
            >
              {open ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * ProjectsGrid: main export
 * props:
 *  - projects: array of { id, title, description, iconName?, iconUrl? }
 *  - cols: optional override for grid columns
 */
export default function ProjectsGrid({ projects = [], cols }) {
  // columns: responsive default 1 / 2 / 3 (you can provide cols to override)
  const gridClass = cols
    ? `grid grid-cols-1 md:grid-cols-${cols}`
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="max-w-6xl mt-4 mx-auto px-6 py-4 border-gray-300 dark:border-gray-700 border-b">
      <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>

      <div className={`${gridClass} gap-6`}>
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}

