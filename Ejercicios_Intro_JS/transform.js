/*
Ejercicio 4 Transformaciones con map y filter
Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente información. 

El listado de los desarrolladores que tengan como habilidad “JavaScript” y el listado de los proyectos en el que sus desarrolladores trabajan. 

Hay que crear un archivo transform.js con la solución. Este archivo tiene que tener 2 funciones que nos retornen los valores correctos. 

NO USAR FOR NI WHILE. Se trata de un ejercicio para practicar el uso de map y filter.
*/

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, 
             nombre: 'Proyecto 5' 
            },
            
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
    ];


const getDevelopers = (getDevelopers) => {

    let developers =[];
    developers = getDevelopers.filter(developers => {
        if (developers.habilidades.includes('JavaScript')){
            return{...developers};
        }
    });
    return developers;

}    

const getProjects = (getProjects) => {

    let projectsListFinal =[];
    projects = getProjects.filter(proyectos =>{ proyectos.proyectos.filter( projects => {
        projectsListFinal = [...projectsListFinal, projects.nombre];
    })
}); 
    return projectsListFinal;
}


console.log("El listado de los desarrolladores que tengan como habilidad JavaScript", getDevelopers(datos));
console.log("listado de los proyectos en el que sus desarrolladores trabajan", getProjects(datos));