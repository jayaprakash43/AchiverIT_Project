const infoBtn = document.getElementById('info-btn');
const chair = document.getElementById('slider-chair')
const sofa = document.getElementById('slider-sofa')
const sectionHiddden = document.querySelector('.block-section')

function infoFunction(){
    sectionHiddden.setAttribute('class','hidding-section')
    infoBtn.style.display = 'none'
}
