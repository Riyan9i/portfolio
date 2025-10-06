// Projects data
const projects = [
    {
        id: 1,
        title: "Customer Churn Prediction",
        description: "Machine learning model to predict customer churn using Random Forest and XGBoost with 92% accuracy.",
        image: "images/projects/churn-prediction.jpg",
        tags: ["machine-learning", "data-science"],
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/churn-prediction",
        category: "machine-learning"
    },
    {
        id: 2,
        title: "Real-time Object Detection",
        description: "YOLOv5 implementation for real-time object detection with custom dataset training.",
        image: "images/projects/object-detection.jpg",
        tags: ["ai", "image-processing"],
        technologies: ["Python", "PyTorch", "OpenCV", "YOLOv5"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/object-detection",
        category: "ai"
    },
    {
        id: 3,
        title: "Medical Image Segmentation",
        description: "U-Net architecture for segmenting medical images with 95% dice coefficient.",
        image: "images/projects/medical-segmentation.jpg",
        tags: ["ai", "image-processing"],
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/medical-segmentation",
        category: "image-processing"
    },
    {
        id: 4,
        title: "E-commerce Sales Dashboard",
        description: "Interactive dashboard for e-commerce sales analysis with real-time data visualization.",
        image: "images/projects/sales-dashboard.jpg",
        tags: ["data-science", "web-design"],
        technologies: ["Python", "Plotly", "Dash", "Pandas"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/sales-dashboard",
        category: "data-science"
    },
    {
        id: 5,
        title: "Sentiment Analysis API",
        description: "REST API for sentiment analysis using BERT model with Flask backend.",
        image: "images/projects/sentiment-api.jpg",
        tags: ["ai", "web-design"],
        technologies: ["Python", "Flask", "Transformers", "React"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/sentiment-api",
        category: "ai"
    },
    {
        id: 6,
        title: "Image Style Transfer",
        description: "Neural style transfer application using VGG19 to apply artistic styles to images.",
        image: "images/projects/style-transfer.jpg",
        tags: ["ai", "image-processing"],
        technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/style-transfer",
        category: "image-processing"
    },
    {
        id: 7,
        title: "Stock Price Prediction",
        description: "LSTM neural network for stock price prediction with technical indicators.",
        image: "images/projects/stock-prediction.jpg",
        tags: ["machine-learning", "data-science"],
        technologies: ["Python", "TensorFlow", "LSTM", "Pandas"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/stock-prediction",
        category: "machine-learning"
    },
    {
        id: 8,
        title: "Portfolio Website",
        description: "Responsive portfolio website with modern UI/UX design and smooth animations.",
        image: "images/projects/portfolio-website.jpg",
        tags: ["web-design"],
        technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
        demoLink: "#",
        codeLink: "https://github.com/yourusername/portfolio",
        category: "web-design"
    }
];

// Function to render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">
                <div style="color: #666; font-size: 3rem;">📊</div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoLink !== '#' ? `<a href="${project.demoLink}" class="project-link">Live Demo</a>` : ''}
                    <a href="${project.codeLink}" class="project-link">View Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Project filtering
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
});

// Add sample project images (you can replace these with actual images)
function createSampleImages() {
    const projectsData = [
        'churn-prediction',
        'object-detection', 
        'medical-segmentation',
        'sales-dashboard',
        'sentiment-api',
        'style-transfer',
        'stock-prediction',
        'portfolio-website'
    ];

    // This is just a placeholder - you should add actual images
    console.log('Please add project images to the images/projects/ folder');
}