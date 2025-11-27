const express = require('express');
const app = express();

app.use(express.json());  // leer JSON
app.use(express.urlencoded({ extended: true })); // leer x-www-form-urlencoded

// "DB" en memoria (array de tareas)
let tasks = [
    { id: 1, title: 'Estudiar Node.js', done: false },
    { id: 2, title: 'Preparar exposición', done: false }
];

// Funcion que genera IDs incrementales
let nextId = 3;

// Lista todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Obtiene una tarea específica por ID
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json(task);
});

// Crea una nueva tarea
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;  
    if (!title) {
        return res.status(400).json({ message: 'El título es obligatorio' });
    }

    const newTask = {
        id: nextId++,
        title: title,
        done: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// Actualiza una tarea existente
app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, done } = req.body;

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    if (title !== undefined) {
        task.title = title;
    }
    if (done !== undefined) {
        task.done = done;
    }

    res.json(task);
});

// Elimina una tarea por ID
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const deleted = tasks.splice(index, 1);

    res.json({ message: 'Tarea eliminada', task: deleted[0] });
});

// Levanta el servidor
app.listen(3000, () => {
    console.log('Servidor de tareas escuchando en http://localhost:3000');
});
