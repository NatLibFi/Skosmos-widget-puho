// declaring a namespace for the plugin
var PUHO = PUHO || {};

PUHO = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['Puolustushallinnon ontologia PUHO on nyt Sotatieteen ontologia ', 'SOTO', '. Siirtymävaiheen jälkeen PUHO poistuu Fintosta.']
    },
    link: "https://finto.fi/soto/fi/",
    renderWarning: function(params) {
        $('.content').prepend(Handlebars.compile($('#puho-template').html())({
            'warning-first': this.warning[lang][0], 
            'warning-middle': this.warning[lang][1], 
            'warning-last': this.warning[lang][2],
            'warning-link': this.link
        }));
    },
};

$(function() {
    window.puhoWarning = function(params) {
        if (params.page === 'page' && vocab == 'puho' && (params.uri  || $('#vocab-info').length)) {
            PUHO.renderWarning(params);
        }
    };
});


