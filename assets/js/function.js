function imgMouseOver() {
    //Button color
    this.children[0].classList.add('linkButtonOn');
    this.children[0].classList.remove('linkButton');
    this.children[0].classList.remove('imgButtonOut');

    //Img brightness
    this.children[1].classList.add('imgOn');
    this.children[1].classList.remove('imgOut');

    //legend color
    this.children[2].classList.add('legendOn');
    this.children[2].classList.remove('legendOut');
};
function imgMouseOut() {
    this.children[0].classList.add('linkButton');
    this.children[0].classList.remove('linkButtonOn');
    this.children[0].classList.add('imgButtonOut');

    this.children[1].classList.add('imgOut');
    this.children[1].classList.remove('imgOn');

    this.children[2].classList.add('legendOut');
    this.children[2].classList.remove('legendOn');
};
function imgMouseOver1() {
    this.children[0].classList.add('linkButtonOn');
    this.children[0].classList.remove('imgButtonOut');
    this.children[0].classList.remove('linkButton');

    this.children[1].classList.add('imgOn');
    this.children[1].classList.remove('imgOut');

    this.children[2].classList.add('legendOn');
    this.children[2].classList.remove('legendOut');

    lineUpRoom1.classList.add("lineColored");
    lineUpRoom1.classList.remove("lineWhite");
};
function imgMouseOut1() {
    this.children[0].classList.add('linkButton');
    this.children[0].classList.add('imgButtonOut');
    this.children[0].classList.remove('linkButtonOn');
    
    this.children[1].classList.add('imgOut');
    this.children[1].classList.remove('imgOn');

    this.children[2].classList.add('legendOut');
    this.children[2].classList.remove('legendOn');
    
    lineUpRoom1.classList.remove("lineColored");
    lineUpRoom1.classList.add("lineWhite");
};
function imgMouseOver2() {
    this.classList.add('imgOn');
    this.classList.remove('imgOut');
};
function imgMouseOut2() {
    this.classList.add('imgOut');
    this.classList.remove('imgOn');
};


