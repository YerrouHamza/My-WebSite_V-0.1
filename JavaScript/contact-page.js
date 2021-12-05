
/* creat Cookies */


// document.cookie = "page=active; SameSite=None; Secure; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

/* Selected Elements */

    /* // Get After load // */
    const headAfterLoad = document.querySelector('.after-load'); // Get head After load.



//--------------------------------------------------------------------------------//
    /******** Javascript for Befor load  **********/ // + // /******** Javascript for After load  **********/




    /* Add Event Listener */

    /*-- creat " after load click and on load page "" realted */
    headAfterLoad.classList.add('active'),

    // set time out for desbled after load page
    setTimeout(() => {
        headAfterLoad.classList.add('desbled');
    }, 3000); // 3000
    
    
    // // get cookies value after active page
    // setTimeout(() => {
    //     document.cookie = `page=active; SameSite=None; Secure; ${new Date} ; path=/`;
    // }, 20000);  // 20000.