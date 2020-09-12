var propMenuMobile = {
    btn_burger: document.getElementById('extend-mm'),
    menu_despegable: document.getElementById('menuDespegable'),
    btn_cerrar: document.getElementById('cerrar'),
    elementos: document.querySelectorAll('.menu-desplegable .menu-principal a')
}

var metMenuMobile = {
    inicio: function(){
        propMenuMobile.btn_burger.addEventListener('click',metMenuMobile.desplegar);
        propMenuMobile.btn_cerrar.addEventListener('click',metMenuMobile.cerrar);
        
        for (let i = 0; i < propMenuMobile.elementos.length; i++) {
            propMenuMobile.elementos[i].addEventListener('click',metMenuMobile.cerrarPorElementos);
        }
    },
    desplegar: function(e){
        e.preventDefault();
        propMenuMobile.menu_despegable.style.right = '0';
    },
    cerrar: function(e){
        e.preventDefault();
        propMenuMobile.menu_despegable.style.right = '-100%';
    },
    cerrarPorElementos: function(e){
        e.preventDefault();
        propMenuMobile.menu_despegable.style.right = '-100%';
    }
}

metMenuMobile.inicio();