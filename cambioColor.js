let $textos = document.querySelectorAll(".textos");
let $botonesNormales = document.querySelectorAll(".botones_normales");
let $botonesSmooth = document.querySelectorAll(".botones_smooth");
let $sections = document.querySelectorAll(".section");
let $svgs = document.querySelectorAll(".svg");
let $svgIntercambio = document.querySelector(".contenido_intercambio_svg");

let clases = {
    blue: {
        boton_color: "boton_color_blue",
        boton_color_smooth: "boton_color_bluesmooth",
        texto_color: "texto_color_blue",
        section_color: "section_color_blue",
        svg_fill: "svg_fill_blue"
    },
    red: {
        boton_color: "boton_color_red",
        boton_color_smooth: "boton_color_redsmooth",
        texto_color: "texto_color_red",
        section_color: "section_color_red",
        svg_fill: "svg_fill_red"
    },
    green: {
        boton_color: "boton_color_green",
        boton_color_smooth: "boton_color_greensmooth",
        texto_color: "texto_color_green",
        section_color: "section_color_green",
        svg_fill: "svg_fill_green"
    }
};

function eliminarClases(elemento, index = 2) {
    elemento.classList.forEach((clase, i) => {
        if (i>=index) {
            elemento.classList.remove(clase);
            return;
        }
    });
}

function añadirClases(elemento, clase) {
    elemento.classList.add(clase);
}


export function cambiarColor(color){
    let clasesColor = clases[color];

    $textos.forEach(texto => {
        eliminarClases(texto);
        añadirClases(texto, clasesColor.texto_color);
    });

    $botonesNormales.forEach(boton => {
        eliminarClases(boton);
        añadirClases(boton, clasesColor.boton_color);
    });

    $botonesSmooth.forEach(boton => {
        eliminarClases(boton);
        añadirClases(boton, clasesColor.boton_color_smooth);
    });

    $sections.forEach(section => {
        eliminarClases(section);
        añadirClases(section, clasesColor.section_color);
    });


    $svgs.forEach(svg => {
        eliminarClases(svg);
        añadirClases(svg, clasesColor.svg_fill);
    });


    if(!$svgIntercambio.classList.contains("svg_inactivo")){
        eliminarClases($svgIntercambio, 1);
        añadirClases($svgIntercambio, clasesColor.svg_fill);
    }
}


export function cambiarColorModalValidacion(color){
    let clasesColor = clases[color];

    let templateDialogoValidacionInput = 
    `
        <svg viewBox="0 0 1280 1126"  class="contenido_dialogo_svg svg ${clasesColor.svg_fill}" fill="#000000">
                    <g transform="translate(0.000000,1126.000000) scale(0.100000,-0.100000)">
                        <path d="M6201 11240 c-41 -10 -113 -37 -160 -61 -70 -35 -105 -62 -187 -144
                                -61 -60 -124 -134 -157 -185 -85 -132 -681 -1182 -2962 -5215 -793 -1402
                                -1714 -3032 -2047 -3620 -333 -589 -617 -1098 -631 -1131 -79 -187 -72 -394
                                19 -559 15 -28 64 -86 108 -130 91 -90 177 -139 306 -175 l76 -20 5879 2 5880
                                3 81 27 c363 124 494 499 304 878 -21 43 -899 1580 -1951 3417 -1052 1836
                                -2308 4029 -2791 4873 -484 844 -909 1580 -946 1635 -118 177 -268 311 -419
                                373 -125 52 -272 64 -402 32z m1607 -3410 c793 -1383 2019 -3523 2724 -4755
                                l1283 -2240 -2712 -3 c-1492 -1 -3934 -1 -5427 0 l-2715 3 1666 2945 c3188
                                5637 3725 6583 3734 6572 4 -4 655 -1139 1447 -2522z" />
                        <path d="M6290 7874 c-14 -3 -61 -14 -104 -25 -390 -98 -706 -474 -706 -837 0
                                -46 22 -254 50 -461 27 -207 113 -857 190 -1446 201 -1535 199 -1517 216
                                -1581 42 -165 141 -297 271 -361 67 -33 86 -38 168 -41 152 -7 246 30 348 136
                                99 105 144 224 176 464 11 84 61 462 111 841 49 378 131 996 180 1375 50 378
                                100 756 111 840 24 182 25 305 4 387 -82 323 -360 599 -693 686 -75 20 -266
                                33 -322 23z" />
                        <path d="M6322 2739 c-345 -44 -594 -371 -552 -726 20 -166 86 -301 204 -410
                                114 -107 237 -160 391 -170 187 -11 336 47 475 187 134 134 192 273 193 465 1
                                116 -13 183 -58 280 -120 261 -379 409 -653 374z" />
                    </g>
        </svg>
        <p class="contenido_dialogo_texto textos ${clasesColor.texto_color}">¡Recuerdaa! El texto no puede estar vacio. Tampoco contener números, mayúsculas o caracteres especiales</p>
        <button class="contenido_dialogo_boton botones_smooth ${clasesColor.boton_color_smooth}" onclick="this.parentElement.close()">Cerrar</button>
    `

    return templateDialogoValidacionInput;
}

export function cambiarColorModalCopiar(color){
    let clasesColor = clases[color];

    let templateDialogoCopiar = 
`
    <svg viewBox="0 0 699.428 699.428"  class="contenido_dialogo_svg svg ${clasesColor.svg_fill}" fill="#000000">
    <g>
    	<g >
    		<g>
    			<path d="M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59
    				c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428
    				h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715
    				V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286
    				C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428
    				c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975
    				c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981
    				c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835
    				c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835
    				C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834
    				c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57
    				z"/>
    		</g>
    	</g>
    </g>
    </svg>
     <p class="contenido_dialogo_texto textos ${clasesColor.texto_color}">¡Lo siento! No hay texto encriptado para copiar</p>
     <button class="contenido_dialogo_boton  botones_smooth ${clasesColor.boton_color_smooth}" onclick="this.parentElement.close()">Cerrar</button>
`
return templateDialogoCopiar;
}


export function cambiarColorSvgIntercambio(color, colorInactivo){
    let clasesColor = clases[color];

    if(colorInactivo){
        $svgIntercambio.classList.remove(clasesColor.svg_fill);
        $svgIntercambio.classList.add("svg_inactivo");
        return;
    }

    $svgIntercambio.classList.remove("svg_inactivo");
    $svgIntercambio.classList.add(clasesColor.svg_fill);
}
