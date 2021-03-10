const tasks = [
    {
        id: 1,
        text: 'A',
        day: 1,
        reminder: true,
    },
    {
        id: 2,
        text: 'B',
        day: 2,
        reminder: false,
    },
    {
        id: 3,
        text: 'C',
        day: 3,
        reminder: true,
    },
];

const Tasks = () => {
    console.table(tasks);
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
