function showContent() {
    Habilidades = document.getElementById("tblhabilidades");
    HabRen = document.getElementById("tblhabren");

    Cosmo = document.getElementById("tblcosmo");
    CosRen = document.getElementById("tblcosmoren");


    check = document.getElementById("renacido");
    if (check.checked) {
        Habilidades.style.display='none';
        HabRen.style.display='table';

        Cosmo.style.display='none';
        CosRen.style.display='table';
    }
    else {
        Habilidades.style.display='table';
        HabRen.style.display='none';

        Cosmo.style.display='table';
        CosRen.style.display='none';
    }
}