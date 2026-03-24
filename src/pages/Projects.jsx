import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

// Load all project images tightly packaged into the build
// The glob path must match our exact folder structure. 
// eager: true ensures modules are imported immediately.
const imageModules = import.meta.glob('../assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Group the imported image paths by their folder (project) name
    const groupedProjects = useMemo(() => {
        const groups = {};

        Object.keys(imageModules).forEach(path => {
            // path looks like: '../assets/projects/BEECHWOOD PROJECT IBEJU LEKKI/20210127_145926.jpg'
            // We want to extract "BEECHWOOD PROJECT IBEJU LEKKI" and the image URL
            const parts = path.split('/');
            if (parts.length >= 4) {
                const folderName = parts[parts.length - 2];
                // In Vite, the resolved module default export is the URL string
                const imageUrl = imageModules[path].default;

                if (!groups[folderName]) {
                    groups[folderName] = {
                        title: folderName,
                        images: []
                    };
                }
                groups[folderName].images.push(imageUrl);
            }
        });

        // Convert grouped object to an array and establish thumbnails
        return Object.values(groups).map((project, idx) => ({
            id: idx,
            title: project.title,
            // Automatically select the first image as the thumbnail
            thumbnail: project.images[0],
            images: project.images
        }));
    }, []);

    // Open Carousel
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Close Carousel
    const closeCarousel = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Next Image
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => 
            (prev + 1) % selectedProject.images.length
        );
    };

    // Previous Image
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => 
            (prev - 1 + selectedProject.images.length) % selectedProject.images.length
        );
    };

    return (
        <div className="page-content bg-light">
            <div className="page-header custom-header">
                <div className="container text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Projects Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Explore our extensive catalog of successful construction and development projects. Select a project to view its full gallery.
                    </motion.p>
                </div>
            </div>

            <div className="container section">
                {groupedProjects.length === 0 ? (
                    <div className="text-center">
                        <h3>No projects found. Please add image folders to src/assets/projects/</h3>
                    </div>
                ) : (
                    <div className="projects-grid-page">
                        {groupedProjects.map((project, index) => (
                            <motion.div 
                                key={project.id} 
                                className="project-item glass-card-project"
                                onClick={() => handleProjectClick(project)}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="project-thumb">
                                    <img src={project.thumbnail} alt={project.title} loading="lazy" />
                                    <div className="project-hover-overlay">
                                        <span className="view-gallery-btn">View {project.images.length} Images</span>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>Gallery of {project.images.length} photos</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Full Screen Carousel Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="carousel-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCarousel}
                    >
                        {/* Close Button */}
                        <button className="carousel-close" onClick={closeCarousel}>
                            <X size={32} />
                        </button>

                        {/* Top Title Bar */}
                        <div className="carousel-header" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedProject.title}</h2>
                            <span>{currentImageIndex + 1} / {selectedProject.images.length}</span>
                        </div>

                        {/* Image Viewer */}
                        <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
                            <button className="carousel-nav nav-prev" onClick={prevImage}>
                                <ChevronLeft size={40} />
                            </button>
                            
                            <motion.img 
                                key={currentImageIndex} // Key ensures re-animation on index change
                                src={selectedProject.images[currentImageIndex]} 
                                alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                                loading="lazy"
                                className="carousel-image"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            <button className="carousel-nav nav-next" onClick={nextImage}>
                                <ChevronRight size={40} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
