import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var rioSuave;
var insecto;
var cuack;
var grillos;
var click;
var pajaros;
var suspense;
var pisadas;
Template.main.onCreated(function(){
    insecto = new Audio('insecto.mp3')
    cuack = new Audio('cuack.mp3')
    grillos = new Audio('grillos.mp3')
        insecto.volume = 0.6;
        cuack.volume = 0.6;
        grillos.volume = 0.6;
    insectoCall()
    cuackCall()
    grillosCall()
    Meteor.setInterval(function(){
        if(window.scrollY < 200){
            if(rioSuave){
                rioSuave.pause()
                rioSuave = undefined;
            }
            if(pajaros){
                pajaros.pause()
                pajaros = undefined;
            }

        }
        else if((window.scrollY >= 200 && window.scrollY < 2600)||(window.scrollY >= 13200)){
            if(!rioSuave) {
                rioSuave = new Audio('rioSuave.mp3');
                rioSuave.loop = true;
                rioSuave.play();
                Meteor.setInterval(function(){
                    rioSuave.volume = 0.4;
                },0)
            }
            if(pajaros){
                pajaros.pause()
                pajaros = undefined;
            }
            if(suspense){
                suspense.pause()
                suspense = undefined;
            }
            if(pisadas){
                pisadas.pause()
                pisadas = undefined;
            }

        }
        else if(window.scrollY >= 5150 && window.scrollY<= 5300){
            if(!click) {
                click = new Audio('click.m4a');
                click.play();
            }
            if(suspense){
                suspense.pause()
                suspense = undefined;
            }
        }
        else if(window.scrollY >= 8000 && window.scrollY<= 9000){
            if(!rioSuave) {
                rioSuave = new Audio('rioSuave.mp3');
                rioSuave.loop = true;
                rioSuave.play();
            }
            if(click) {
                click = undefined;
            }
        }
        else if(window.scrollY >= 8900 && window.scrollY<= 9300){
            if(!suspense) {
                suspense = new Audio('suspense.mp3');
                suspense.play();
                Meteor.setInterval(function(){
                    suspense.volume = 0.4;
                },0)
            }
            if(pisadas){
                pisadas.pause()
                pisadas = undefined;
            }
        }
        else if(window.scrollY >= 9300 && window.scrollY<= 13200){
            if(!pisadas) {
                pisadas = new Audio('pisadas.mp3');
                pisadas.loop = true;
                pisadas.play();
                Meteor.setInterval(function(){
                    pisadas.volume = 0.3;
                },0)
            }
            if(rioSuave){
                rioSuave.pause()
                rioSuave = undefined;
            }
        }
        else if(window.scrollY >= 2600){
            if(rioSuave){
                rioSuave.pause()
                rioSuave = undefined;
            }

            if(!pajaros) {
                pajaros = new Audio('pajaros.mp3');
                pajaros.loop = true;
                pajaros.play();
                // Meteor.setInterval(function(){
                    pajaros.volume = 0.2;
                // },0)

            }
            if(click) {
                click = undefined;
            }

            }

    },300)

})

var grillosCall = function(){
    Meteor.setTimeout(function(){
        grillos.play();
        grillosCall();
    },Math.random()*20000)
}
var cuackCall = function(){
    Meteor.setTimeout(function(){
        cuack.play();
        cuackCall();
    },Math.random()*100000)
}
var insectoCall = function(){
    Meteor.setTimeout(function(){
        insecto.play();
        insectoCall();
    },Math.random()*20000)
}

Template.main.helpers({
    ismobile:function() {
        if (window.screen.availWidth < 1024) {
            return true;
        }
        else{
            return false;
        }
    }
})