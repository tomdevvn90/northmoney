/**
 * Script
 */

import './scss/main.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
;( function( w, $ ){
  'use strict'
      // run animate
      $(window).on('load',function(){
           AOS.init();
      });

} )( window, jQuery )
