/**
 * Script
 */

import './scss/main.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
;( function( w, $ ){
  'use strict'

    function faq(){
        let isFaq = $('.section-faq .faq-item .question');

        isFaq.click(function(events){
            $(this).parent().toggleClass('active');
            $(this).parent().children('.answer').slideToggle('300');
        });
    }

     $( document ).ready(function() {
        faq();
     });
      $(window).on('load',function(){
            // load animate
           AOS.init();
      });

} )( window, jQuery )
