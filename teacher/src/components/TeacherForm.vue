<template>
    <section>
        <h3>Añadir profesor</h3>
        <div><label>Nombre:</label><input type="text" v-model="profesor.nombreProfe" /></div>
        <div><label>Apellidos:</label><input type="text" v-model="profesor.apellidoProfe" /></div>
        <div><label>CURP:</label><input type="text" v-model="profesor.curp" /></div>
        <div><label>Materias:</label><input type="text" v-model="materia" /><button @click="handleMateria" style="margin-top: 1rem;">Añadir
                materias</button></div>
        <div>
            <ul>
                <li v-for="(mtria, index) in profesor.materias" :key="index">{{ mtria }}</li>
            </ul>
        </div>
        <div><button @click="handleAñadirProfe">Añadir</button><input type="checkbox"
                v-model="profesor.doc" />Documentación Entregada</div>
    </section>

    <section>
        <h1>Listado de profesores</h1>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>CURP</th>
            <th>Materias</th>
            <th>Documentación entregada</th>
        </tr>
        <tr v-for="(prof) in profesores" :key="prof.curp">
            <th>{{ prof.nombreProfe }}</th>
            <th>{{ prof.apellidoProfe }}</th>
            <th>{{ prof.curp }}</th>
            <th>
                <ul>
                    <li v-for="(materiaprofe, index) in prof.materias" :key="index">{{ materiaprofe }}</li>
                </ul>
            </th>

            <th v-if="prof.doc">Entregada</th>
            <th v-else>No entregada</th>
        </tr>
    </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'

// Por ahora, se generará una interface (para tipar los datos) en el componente.
interface IProfesor {
    nombreProfe: string,
    apellidoProfe: string,
    curp: string,
    materias: Array<string>,
    doc: boolean
}

let profesor: Ref<IProfesor> = ref({
    nombreProfe: '',
    apellidoProfe: '',
    curp: '',
    materias: [],
    doc: false
})

let profesores: Ref<Array<IProfesor>> = ref([

])

let materia: Ref<string> = ref('')

const handleMateria = () => {
    profesor.value.materias.push(materia.value)
}

const handleAñadirProfe = () => {
    profesores.value.push({
        //Creamos un objeto NO reactivo para evitar que se sobreescriba, que podamos almacenar la info de forma estable
        nombreProfe: profesor.value.nombreProfe,
        apellidoProfe: profesor.value.apellidoProfe,
        curp: profesor.value.curp,
        materias: profesor.value.materias,
        doc: profesor.value.doc,
    })
    profesor.value.nombreProfe = "",
        profesor.value.apellidoProfe = "",
        profesor.value.curp = "",
        profesor.value.materias = [],
        profesor.value.doc = false
}

</script>

<style scoped>
/* Estilo general del componente */
section {
    margin: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Títulos */
h1,
h3 {
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Estilo para el formulario */
div {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-right: 10px;
    display: inline-block;
    width: 100px;
}

input[type="text"] {
    padding: 8px;
    margin-top: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: calc(100% - 120px);
}

button {
    padding: 8px 12px;
    background-color: #5c6bc0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #3949ab;
}

ul {
    padding-left: 20px;
}

li {
    list-style-type: disc;
}

/* Checkbox */
input[type="checkbox"] {
    margin-left: 10px;
}

/* Tabla de listado de profesores */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}
</style>