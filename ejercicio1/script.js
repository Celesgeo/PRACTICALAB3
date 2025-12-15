const $ = (elem) => document.getElementById(elem)
const listaInterna = []//se almacenan los tramos
const listado = $("listado")
const agregar = $("agregar")
//se renderiza dinamicamente con <li>
agregar.onclick = (e) => {
    e.preventDefault()

    const nombre = $("nombre")
    const distancia = $("distancia")
    
    if (!nombre.value || !distancia.value || distancia.value <= 0) return
    //no permite nombresz vacios
    const tramo = {
        nombre: nombre.value,
        distancia: parseFloat(distancia.value)
    }

    listaInterna.push(tramo)
    renderizarListado()
    distanciaMasLarga()
    distanciaMasCorta()
    promedioDistancia()

    nombre.value = ""
    distancia.value = ""
    //limpiar las entradas luego de agregar
    }

const renderizarListado = () => {
    if (listaInterna.length < 1) return 

    listado.innerHTML = ""
    
    for (let i = 0; i < listaInterna.length; i++) {
        const li = document.createElement("li")
        li.innerHTML = `${listaInterna[i].nombre} - ${listaInterna[i].distancia} kms.`
        listado.appendChild(li)
    }
}

const distanciaMasLarga = () => {
    if (listaInterna.length < 1) return
    
const mayorDistancia = $("mayorDistancia")

    let mayor = listaInterna[0]
    for (let i = 0; i < listaInterna.length; ++i) {
        if (listaInterna[i].distancia > mayor.distancia) {
        mayor = listaInterna[i]
        }
}

    mayorDistancia.innerText = `El tramo mas largo es: ${mayor.nombre} con ${mayor.distancia} kms. `
}

const distanciaMasCorta = () => {
    if (listaInterna.length < 1) return
    
    const menorDistancia = $("menorDistancia")

    let menor = listaInterna[0]
    for (let i = 0; i < listaInterna.length; ++i) {
        if (listaInterna[i].distancia < menor.distancia) {
        menor = listaInterna[i]
        }
    }

    menorDistancia.innerText = `El tramo mas corto es: ${menor.nombre} con ${menor.distancia} kms. `
    }

const promedioDistancia = () => {
    if (listaInterna.length < 1) return
    
    const promedioDistancia = $("promedioDistancia")

    let suma = 0
    for (let i = 0; i < listaInterna.length; ++i) {
        suma += listaInterna[i].distancia
    }
    let promedio = suma / listaInterna.length

    promedioDistancia.innerText = `El promedio de distancia de los tramos es de: ${promedio} kms. `
}