function toggleSection(sectionId, clickedElement) {
    const container = document.getElementById('portfolio-container');
    const targetBlock = document.getElementById(sectionId + '-content');
    
    const isAlreadyActive = targetBlock.classList.contains('active');

    document.querySelectorAll('.content-block').forEach(block => {
        block.classList.remove('active');
    });
    document.querySelectorAll('.soft-glitch-link').forEach(btn => {
        btn.classList.remove('active-btn');
    });

    if (isAlreadyActive) {
        container.classList.remove('layout-split');
    } else {
        container.classList.add('layout-split');
        
        clickedElement.classList.add('active-btn');
        
        setTimeout(() => {
            targetBlock.classList.add('active');
        }, 50); 
    }
}