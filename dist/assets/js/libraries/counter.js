"use strict";

let elm = $("#getting-started"),
    options = {
        until: new Date(moment("2018-03-01T10:00:00Z")),
        format: 'dhMS',
        compact: false,
        layout:  '<div id="getting-started" class="anim-go-left dsCountDown ds-custome">'+
            '<div class="timer days">'+
                '<div class="value ds-days">{dn}</div>'+
                '<div class="title">{dl}</div>'+
            '</div>'+
            '<div class="timer hours">'+
                '<div class="value ds-hours">{hn}</div>'+
                '<div class="title">{hl}</div>'+
            '</div>'+
            '<div class="timer minutes">'+
                '<div class="value ds-minutes">{mnn}</div>'+
                '<div class="title">{ml}</div>'+
            '</div>'+
            '<div class="timer seconds">'+
                '<div class="value ds-seconds">{snn}</div>'+
                '<div class="title">{sl}</div>'+
            '</div>'+
        '</div>'
    },
    opts;
    opts = options;
elm.countdown(opts);
