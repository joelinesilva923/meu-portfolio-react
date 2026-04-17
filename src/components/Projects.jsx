import ProjectCard from './ProjectCard';
import { meusProjetos } from './ProjectsData';

export default function Projects() {
    return (
        <section className="projects" id="projetos">
            <h2>Meus Projetos</h2>
            <div id="projects-grid" className="projects-grid">
                {meusProjetos.map((projeto) => (
                    <ProjectCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}