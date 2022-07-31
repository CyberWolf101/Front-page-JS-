// for mission, vision & about


var texts = {    //check out lorem ipsum it generates texts from practice purpose

    'Vision': 'BE THE GREATEST AND MOST TRUSTED BUSSINESS ADMINISTRATION AND GAINING TRUST OF OUR CLIENTS WITHOUT ANY FORM OF COMPLICATIONS BE REST ASSURED YOU TOKENS ARE SAFE WITH US PROVIDED YOU MEET SYSTEM POLICIES AND CARRY OUT YOUR OWN SIDE OF THE BARGAIN EFFECTIVELY WITHOUT EXCUSES OR COMPICATIONS. THANK YOU.<br> <br> <br> <br>',

    'About': 'Established in 1948, the Kayode Olaleye University, KOU as it is fondly referred to, is the first University in Nigeria. Until 1962 when it became a full-fledged independent University, it was a College of the University of London in a special relationship scheme.<p> The University, which took off with academic programmes in Arts, Science and Medicine.is now a comprehensive citadel of learning with academic programmes in sixteen Faculties namely, Arts, Science, Basic Medical Sciences, Clinical Sciences, Agriculture, the Social Sciences, Education, Veterinary Medicine, Pharmacy, Technology.',

    'Mission': 'WE HOPE WE CAN  <ol> <li>  HELP YOU GET TO WGERE YOU WANT TO BE </li> <li> HELP YOU GROW</li> <li> GAIN YOUR TRUST</li> </ol>'

}
var selectedColor = "#2c3347";
var unselected = "grey";
var textBlack = "black";
var tabs = document.getElementsByClassName('tablinks');


for (var a = 0; a < tabs.length; a++) {
    tabs[a].onclick = function () {
        clickedVal = this.innerHTML
        //console.log(texts[clickedVal] );
        document.getElementById('word').innerHTML = texts[clickedVal];

        for (var b = 0; b < tabs.length; b++) {      //start another loop bcause we need to run through the elements again
            tabs[b].style.backgroundColor = unselected;
            tabs[b].style["font-weight"] = 'normal';                  //another way of writing if you want to use ' - '
            tabs[b].style.color = 'black';

        }
        this.style.backgroundColor = selectedColor;
        this.style["font-weight"] = 'bold';
        this.style.color = 'white';

    }

}

// for side nav


document.getElementById('openNav').onclick = function () {
    document.getElementById("main").style.marginRight = "250px";  //  margin from right
    document.getElementById("mySidebar").style.width = '250px';    // cus the width is set to 0 in the css
    document.getElementById("tabs").style.marginRight = "250px";
}

document.getElementById('closeNav').onclick = function () {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("tabs").style.marginRight = "0";
}


// for slideshow with texts

var services = [
    {
        'highlight': 'BACK LIFT',
        'slidetext': 'more in that I believe you had liked me for my own sake and for nothing else is what we stand for s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.',
    },

    {
        'highlight': 'Investments',
        'slidetext': '1914 translation by H. Rackham"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequence',

    },

    {
        'highlight': 'Colaboration$',
        'slidetext': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through'

    },
    {
        'highlight': '$AVINGS',
        'slidetext': 'BE THE GREATEST AND MOST TRUSTED BUSSINESS ADMINISTRATION AND GAINING TRUST OF OUR CLIENTS WITHOUT ANY FORM OF COMPLICATIONS BE REST ASSURED YOU TOKENS ARE SAFE WITH US PROVIDED YOU MEET SYSTEM POLICIES AND CARRY OUT YOUR OWN SIDE OF THE BARGAIN EFFECTIVELY WITHOUT EXCUSES OR COMPICATIONS. THANK YOU.',
    }
];

var prevArrow = document.getElementById('prev');
var nextArrow = document.getElementById('next');
var serviceHighlight = document.getElementById('highlight');
var serviceText = document.getElementById('slidetext');


var currentSlide = 0;

nextArrow.onclick = function () {
    if (currentSlide == (services.length - 1)) {                              //if it reaches it's last array(i.e lenth - 1)
        currentSlide = 0                                        //it will go back to 0 
    } else {
        currentSlide += 1;
    }

    var highlight = services[currentSlide].highlight;
    var slidetext = services[currentSlide].slidetext;

    serviceHighlight.innerHTML = highlight;
    serviceText.innerHTML = slidetext;
}

//Prev. arrow

prevArrow.onclick = function () {
    if (currentSlide == 0) {                            //if 0 we just have to set it to last element of the slide
        currentSlide = services.length - 1;
    } else {
        currentSlide -= 1;
    }

    var highlight = services[currentSlide].highlight;
    var slidetext = services[currentSlide].slidetext;

    serviceHighlight.innerHTML = highlight;
    serviceText.innerHTML = slidetext;
}

document.getElementById('date').innerHTML = new Date().getFullYear(); // to dynamically update year


