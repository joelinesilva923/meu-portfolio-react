export default function ProjectCard({ projeto }) {
    return (
        <div className="project-card">
            <img src={projeto.imagem} alt={projeto.nome} />
            <h3>{projeto.nome}</h3>
            <div className="tech-tags">
                {projeto.techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            <a href={projeto.repo} className="btn-repo" target="_blank" rel="noopener noreferrer">
                Repositório
            </a>
        </div>
    );
}