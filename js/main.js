const apropos = "Je me nomme Myhed Ben-Rhouma je suis en seconde année de BTS SIO , avant d'intégrer ce cursus je préparais un BTS SNIR (système numérique informatique et réseau) n'ayant pas le niveau pour ce BTS venant d'un bac pro j'ai tous de suite lacher l'affaire et trouver une formation diplômante dans le domaine du web après l'obtention de mon dîplôme j'ai décidé de reprendre les études,j'avais entendu parlé du BTS SIO qui pour moi au vue des compétences que proposait celui-ci était un complément non négligeable du parcours que j'avais fait parce qu'il propose un contenu beaucoup plus global autour de l'informatique et des contraintes qu'on peut avoir face à certaines situations professionnelles."
$("document").ready(function(){
    let lead = $('.lead')
    const btnApropos = $('#apropos')
    lead.append(apropos.substr(0,161)+'...')
    btnApropos.on('click',() => {
        if(lead.text().length === apropos.length){
            lead.html(apropos.substr(0,161)+'...')
            btnApropos.html("En savoir plus");
            return;
        }
        lead.html(apropos.substr(0,apropos.length))
        btnApropos.html("En savoir moins");
    })

})