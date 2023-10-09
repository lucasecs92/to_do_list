import { useState } from "react";

export function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        // ADICIONAR TODO
        addTodo(value, category);
        // LIMPAR OS CAMPOS DO FORMULÁRIO
        setValue("");
        setCategory("");

        // console.log(value, category)
    }

    return (
    <section className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
                <select className="todo-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </section>
    )
}

// if (!value || !category) return;    na criação de tarefas se tiver valor nulo (campo vazio), vai dar problema então essa é uma validação de tarefa criada c dados nulos