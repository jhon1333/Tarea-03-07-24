function mostarpag(pageid){
    const pages = document.querySelector(".pag");
    for(let i = 0; i< pages.length; i++){
        const page=pages[i];
        if (page.id ===pageid){
            page.classList.add('active');
        }
    }
}