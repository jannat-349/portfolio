import React from 'react';
import '../styles/Researches.css';

const Researches = () => {
    const researchPapers = [
        {
            title: "Research Paper Title 1",
            authors: "Jannat, Teammate A, Teammate B",
            area: "Research Area 1",
            date: "Jan 2023 - Jun 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-1.pdf",
            codeUrl: "link-to-code-1"
        },
        {
            title: "Research Paper Title 2",
            authors: "Jannat",
            area: "Research Area 2",
            date: "Jul 2023 - Dec 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-2.pdf",
            codeUrl: "link-to-code-2"
        },
        {
            title: "Research Paper Title 2",
            authors: "Jannat",
            area: "Research Area 2",
            date: "Jul 2023 - Dec 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-2.pdf",
            codeUrl: "link-to-code-2"
        },{
            title: "Research Paper Title 2",
            authors: "Jannat",
            area: "Research Area 2",
            date: "Jul 2023 - Dec 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-2.pdf",
            codeUrl: "link-to-code-2"
        },{
            title: "Research Paper Title 2",
            authors: "Jannat",
            area: "Research Area 2",
            date: "Jul 2023 - Dec 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-2.pdf",
            codeUrl: "link-to-code-2"
        },{
            title: "Research Paper Title 2",
            authors: "Jannat",
            area: "Research Area 2",
            date: "Jul 2023 - Dec 2023",
            status: "Not Published Yet",
            description: "Brief description of the research paper. This could include the objectives, methods, and key findings.",
            pdfUrl: "link-to-pdf-2.pdf",
            codeUrl: "link-to-code-2"
        },
    ];

    return (
        <div className="researches-container">
            <section>
                <h2>Researches</h2>
                <div className="research-grid">
                    {researchPapers.map((paper, index) => (
                        <div className="research-item" key={index}>
                            <div className="research-content">
                                <h3>{paper.title}</h3>
                                <div className="research-meta">
                                    <p><strong>Authors:</strong> {paper.authors}</p>
                                    <p><strong>Research Area:</strong> {paper.area}</p>
                                    <p><strong>Date:</strong> {paper.date}</p>
                                    <p><strong>Status:</strong> {paper.status}</p>
                                    <p><strong>Description:</strong> {paper.description}</p>
                                </div>
                                <div className="research-actions">
                                    <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn">Download PDF</a>
                                    {paper.codeUrl && <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer" className="btn">See Code</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Researches;
