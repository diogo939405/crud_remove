export function ToggleP() {
    let p = document.getElementById('navbar')
    if (p.style.display === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }

    // //torna essa função imediata
    //     var CriarEstilo = 1;
    //     if (CriarEstilo === 1) {
    //         p.style.display = 'none';
    //         CriarEstilo = 0;
    //     }
}

