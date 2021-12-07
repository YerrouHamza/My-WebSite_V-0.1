
/* Cookies */


    // get cookies .
    const cookies = document.cookie
                .split(';')
                .map(Cookie => Cookie.split('='))
                .reduce((accumulator, [key, value]) => ({ 
                    ...accumulator, [key.trim()]: decodeURIComponent(value)
                }), {});


    console.log(cookies.value);

    // get Clear Cookies From sitweb.
    const clearCookies = document.querySelector('#clear-cookies');

/* Selected Elements */

        /* // Get Header NavBar. // */
            //--- Get Header NavBar.
    const HeaderNav = document.querySelector('#navbar'); // home Header
            //--- Get head nav.
    const navHead = document.querySelector('#navbar .head-nav');
            //--- Get Header Logo.
    const logo = document.querySelector('#navbar .head-nav .logo');
            //--- Get header Muno Links.
    const munoLinks = document.querySelector('.muno');
            //---- get about me bottun from mune.
        const navAboutMe = document.querySelector('#navbar .head-nav .muno .about-me');
            //---- get home logo link from muno
            const navHomeLogo = document.querySelector('#logo-nav-link');
            //---- get home link from muno
            const navHome = document.querySelector('#home-nav-link');
            //---- get services link from muno
            const navServices = document.querySelector('#services-nav-link');
            //---- get skills link from muno
            const navSkills = document.querySelector('#skills-nav-link');

            //--- Get Muno Button.
    const munoButton = document.querySelector('header .muno-button');
    const munoButtonI = document.querySelector('header .muno-button i');


        /* // Get After load // */
    const headAfterLoad = document.querySelector('.after-load'); // Get head After load.
    const headAfterLoadIcon = document.querySelector('.after-load .icon-click'); // Get head After load.


    /* // Get load " typeng animation " // */
    const headLoadTypeng = document.querySelector('.first-page .load-page'); // Get Home Page ( load page ).
    const headLoadInScroll = document.querySelector('.first-page .load-page .load-content'); // Get Home Page ( load page ) Haed.
    const homeButton = document.querySelector('.first-page .load-content .text-4 content-button') // Get Home Page ( load page ) Button.
    const LoadScrollDown = document.querySelector('.first-page .load-page .home-footer .scroll-down') // Get Footer Scroll Down Animation.
    const homeCallAboutB = document.getElementById('home-about-button');

        /* // Get About Section. // */
    const aboutSection = document.querySelector('.main-about'); // Get About Section.
    const closeAboutIcon = document.getElementById('about-me-close-icon'); // Get about close icon 
                // get skill button from about
            const skillAboutB = document.querySelector('#skills-about-b')


        /* // Get services section // */
    const servicesSection = document.querySelector('.section-services') // Get services section.


        /* // Get skills Section. // */
    const skillsSection = document.querySelector('.section-skills'); // Get skills Section.
            // Get Html 
            let htmlNumber = document.querySelector('#html-counter');
            // Get css 
            let cssNumber = document.querySelector('#css-counter');
            // Get js 
            let jsNumber = document.querySelector('#js-counter');
            // Get react 
            let reactNumber = document.querySelector('#react-counter');
            // Get bootstrap 
            let bootstrapNumber = document.querySelector('#bootstrap-counter');
            // Get wordpress 
            let wordpressNumber = document.querySelector('#wordpress-counter');
                //------------------- spealink language.
            // Get arabic speaking 
            let arabicSPKNumber = document.querySelector('#arabic-counter');
            // Get english speaking 
            let englishSPKNumber = document.querySelector('#english-counter');
            // Get france speaking 
            let franceSPKNumber = document.querySelector('#france-counter');


//--------------------------------/* Loading Page */------------------------------------------------//

    /* Creat My Name Text for load Page Text 2 */
    const tag1MyName = document.querySelector('.load-page .text-2 .my-name #tag-1');
    const text2MyName_name = document.querySelector('.load-page .text-2 .my-name #name');
    const tag2MyName = document.querySelector('.load-page .text-2 .my-name #tag-2');
    
    tag1MyName.textContent = `<h2>`;
    text2MyName_name.textContent = `Yerrou Hamza`;
    tag2MyName.textContent = `</h2>`;
    
    
            /* Creat My Name Text for load Page Text 4 */
    const buttonTag1 = document.querySelector('#tag-b-1')
        buttonTag2 = document.querySelector('#tag-b-2'),
        buttonContent = document.querySelector('.content-button');
    
    buttonTag1.textContent = `<button>`;
    buttonContent.textContent = `About Me`;
    buttonTag2.textContent = `</button>`;



//---------------------- JavaScript Function's ------------------------//

    /* Add Event Listener & use white cookies */
    if (cookies.value == 'true') {

        // despled click icon and active page
        headAfterLoad.classList.add('active');
        headAfterLoadIcon.classList.add('desbled');
        
        // set time out for desbled after load page
        setTimeout(() => {
           headAfterLoad.classList.add('desbled');
       }, 3000); // 3000


       // clear Cookies
       clearCookies.classList.add('active');
      
       // set time out for active home page.
        headLoadTypeng.classList.remove('animtion-page'); // add class animtion-page for create animtion.
        headLoadTypeng.classList.remove('active-animtion'); // remove active animation.
        headLoadTypeng.classList.add('active-page'); // remove active animation.

        /* services page */
        HeaderNav.classList.add('active');
        
        
       // set time out for active all
        setTimeout(() => {
            /* services page */
            servicesSection.classList.remove('animtion-page'); // remove active animation.
            servicesSection.classList.add('active');
    
            /* skills page */
            skillsSection.classList.remove('animtion-page'); // remove active animation.
            skillsSection.classList.add('active');
            skillsPageActive();
        }, 3000); // 3000
 
    } else {

        /* after load */
        headLoadTypeng.classList.add('animtion-page'); // add class animtion-page for create animtion.

        /* skills page */
        skillsSection.classList.add('animtion-page'); // add class animtion-page for create animtion

        /* servicess page */
        servicesSection.classList.add('animtion-page'); // add class animtion-page for create animtion


        /*-- creat " after load click and on load page " realted */
        headAfterLoad.addEventListener('click', () => {
            headAfterLoad.classList.add('active');

            // set time out for active home page.
            setTimeout(() => {
                headLoadTypeng.classList.add('active-animtion'); // add class animtion-page for active animtion.
            }, 1800); // 1800
    
            // set time out for desbled after load page
            setTimeout(() => {
                headAfterLoad.classList.add('desbled');
            }, 3000); // 3000
    
            // Creat set time out for active all page acfter on load page finsh
            setTimeout(() => {
                HeaderNav.classList.add('active');
                servicesSection.classList.add('active');
                skillsSection.classList.add('active');

                // clear Cookies
                clearCookies.classList.add('active');
            }, 20000);  // 20000 "that time who typing animtion need to finshed".
    
            // get cookies value after active page
            setTimeout(() => {
                document.cookie = "value=true; path=/;";
            }, 20000);  // 20000.
        });

        /* skills page */
        SkillPage();
    }




//--------------------------------------------------------------------------------//

    // creat function For call and close about section
    function aboutCall() {
        navAboutMe.addEventListener('click', () => { // if click in Nav About me.
            aboutSection.classList.toggle('active');
        });
        homeCallAboutB.addEventListener("click", () => {
            aboutSection.classList.add('active');
        });
        closeAboutIcon.addEventListener('click', () => { // if click close icon About me.
            aboutSection.classList.remove('active');
        });
    }
    aboutCall();


//--------------------------------------------------------------------------------//

        //- on scroll function
    window.addEventListener('scroll', function () {

        // creat scroll function for header navBar
        if (this.scrollY > 10){
            //- if scroll Window navBar add Class Scroll.
            HeaderNav.classList.add('scroll');
            logo.setAttribute('src', '/Photos/Logo-2.png');
        } else {
            //- else this navBar Remove Class Scroll.
            HeaderNav.classList.remove('scroll');
            logo.setAttribute('src', '/Photos/Logo-1.png');
        };


        // creat scroll animetion for Services section.
        //- in scroll > 250
        if (this.scrollY > 450){
            console.log('work')
            servicesSection.classList.add('scroll');
        } else {
            null
        };

    });


//-------------------------- click in nav links to go to section --------------------//

    navHomeLogo.addEventListener('click', () => { // for home from logo nav link
        aboutSection.classList.remove('active'); // on click remove class active from about popup.
        window.scrollTo(0, 0);
    });

    navHome.addEventListener('click', () => { // for home from nav link
        aboutSection.classList.remove('active'); // on click remove class active from about popup.
        window.scrollTo(0, 0);
    });

    navServices.addEventListener('click', () => { // for srvices from nav link
        aboutSection.classList.remove('active'); // on click remove class active from about popup.
        window.scrollTo(0, 620);
    });

    navSkills.addEventListener('click', () => { // for skills from nav link
        aboutSection.classList.remove('active'); // on click remove class active from about popup.
        window.scrollTo(0, 1300);
        console.log('work skill')
    });
        
    skillAboutB.addEventListener('click', () => { // for skills from about
        aboutSection.classList.remove('active'); // on click remove class active from about popup.
        window.scrollTo(0, 1300);
        console.log('work skill')
    });
//-------------------- Clear Cookies Function ------------------//

    clearCookies.addEventListener('click', () => {
        document.cookie = "value=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        if(cookies.value == 'true'){
            alert('Done! Cookies is clear');
        } else {
            null
        }
    })



//------------------------get and creat counter number for skills section-------------------------//
    /* if cookies is true */

function SkillPage() {
    /* get and creat counter number for skills section */
                //------------------- Get programing language.
            // Get Html Counter
            let htmlCounter = 0;
                // Get css Counter
            let cssCounter = 0;
                // Get js Counter
            let jsCounter = 0;
                // Get react Counter
            let reactCounter = 0;
                // Get bootstrap Counter
            let bootstrapCounter = 0;
                // Get wordpress Counter
            let wordpressCounter = 0;
    
                    //------------------- spealink language.
                // Get arabic speaking Counter
            let arabicSPKCounter = 0;
                // Get english speaking Counter
            let englishSPKCounter = 0;
                // Get france speaking Counter
            let franceSPKCounter = 0;
    
            let interval = null; // creat clear Setintrval.
    
    // creat counter function for nskill page.
    function counterFunction() {
    //- using setInterval to creat counter number
        //--------------- Prohramming language.
        setInterval(() => {
            
            // counter for Html.
            if (htmlCounter == 75){
                window.clearInterval(interval);
            }else {
                htmlCounter += 1;
                htmlNumber.innerHTML = htmlCounter + "%";
            }    
    
            // counter for css.
            if (cssCounter == 70){
                window.clearInterval(interval);
            }else {
                cssCounter += 1;
                cssNumber.innerHTML = cssCounter + "%";
            }
    
            // counter for js.
            if (jsCounter == 65){
                window.clearInterval(interval);
            }else {
                jsCounter += 1;
                jsNumber.innerHTML = jsCounter + "%";
            }
    
            // counter for react.
            if (reactCounter == 50){
                window.clearInterval(interval);
            }else {
                reactCounter += 1;
                reactNumber.innerHTML = reactCounter + "%";
            }
    
            // counter for bootstrap.
            if (bootstrapCounter == 80){
                window.clearInterval(interval);
            }else {
                bootstrapCounter += 1;
                bootstrapNumber.innerHTML = bootstrapCounter + "%";
            }
    
            // counter for wordpress.
            if (wordpressCounter == 85){
                window.clearInterval(interval);
            }else {
                wordpressCounter += 1;
                wordpressNumber.innerHTML = wordpressCounter + "%";
            }
        }, 115);
    
    //--------------- For spealink language.
        setInterval(() => { // for arabic.
            // counter for Arabic.
            if (arabicSPKCounter == 90){
                window.clearInterval(interval);
            }else {
                arabicSPKCounter += 1;
                arabicSPKNumber.innerHTML = arabicSPKCounter + "%";
            }
        }, 120);
    
        setInterval(() => { // for english.
            // counter for English.
            if (englishSPKCounter == 55){
                window.clearInterval(interval);
            }else {
                englishSPKCounter += 1;
                englishSPKNumber.innerHTML = englishSPKCounter + "%";
            }
        }, 125);
    
        setInterval(() => { // for france.
            // counter for France.
            if (franceSPKCounter == 40){
                window.clearInterval(interval);
            }else {
                franceSPKCounter += 1;
                franceSPKNumber.innerHTML = franceSPKCounter + "%";
            }
        }, 130);
    }
    
    
    /* Creat OnScroll > 400. skille section work. */
    window.addEventListener('scroll',() => {
        
        if (scrollY > 650) {
            //- active counter white 1000 MS delay
            setTimeout(() => {
        
                // Call Counter function Out Onscroll Event.
                counterFunction();
                
                //- active Css animtion bar.
                skillsSection.classList.add('start-work');
            }, 1000);
    
        } else {
            false
        }
    });
}


    /* if cookies is false */
function skillsPageActive(){

    // counter for Html.
        htmlNumber.innerHTML = 75 + "%";
    // counter for css.
        cssNumber.innerHTML = 70 + "%";
    // counter for js.
        jsNumber.innerHTML = 65 + "%";
    // counter for react.
        reactNumber.innerHTML = 50 + "%";
    // counter for bootstrap.
        bootstrapNumber.innerHTML = 80 + "%";
    // counter for wordpress.
        wordpressNumber.innerHTML = 85 + "%";

//--------------- For spealink language.
    // counter for Arabic.
        arabicSPKNumber.innerHTML = 90 + "%";
    // counter for English.
        englishSPKNumber.innerHTML = 55 + "%";
    // counter for France.
        franceSPKNumber.innerHTML = 40 + "%";
}