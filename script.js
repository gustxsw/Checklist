const tasks = [
  {
    date: "26/03",
    text: "Definir os 8 sites e funcionalidades",
    priority: "urgent",
  },
  {
    date: "27/03",
    text: "Estruturar design e layout geral",
    priority: "urgent",
  },
  {
    date: "28/03",
    text: "Criar cronograma de desenvolvimento e gravações",
    priority: "urgent",
  },
  {
    date: "29/03",
    text: "Criar sites básicos (HTML, CSS, JS) - Parte 1 (4 sites)",
    priority: "important",
  },
  {
    date: "30/03",
    text: "Criar sites básicos (HTML, CSS, JS) - Parte 2 (4 sites)",
    priority: "important",
  },
  {
    date: "31/03",
    text: "Testar responsividade e corrigir pequenos bugs",
    priority: "low",
  },
  {
    date: "01/04",
    text: "Gravar áudios para a Estação de Rádio - Parte 1",
    priority: "important",
  },
  {
    date: "02/04",
    text: "Gravar áudios para a Estação de Rádio - Parte 2",
    priority: "important",
  },
  {
    date: "03/04",
    text: "Gravar vlogs e editar os vídeos - Parte 1",
    priority: "important",
  },
  {
    date: "04/04",
    text: "Gravar vlogs e editar os vídeos - Parte 2",
    priority: "important",
  },
  {
    date: "05/04",
    text: "Implementar interações e animações nos sites",
    priority: "important",
  },
  {
    date: "06/04",
    text: "Testar efeitos e performance nos sites",
    priority: "low",
  },
  {
    date: "07/04",
    text: "Finalizar ajustes nos conteúdos gravados",
    priority: "low",
  },
  {
    date: "08/04",
    text: "Pesquisar como funciona o WebAR",
    priority: "urgent",
  },
  {
    date: "09/04",
    text: "Criar conteúdo do holograma para WebAR",
    priority: "urgent",
  },
  {
    date: "10/04",
    text: "Testar o modelo de holograma e validar funcionalidade",
    priority: "urgent",
  },
  { date: "11/04", text: "Integrar o WebAR no site", priority: "important" },
  {
    date: "12/04",
    text: "Fazer ajustes finais no WebAR e validar compatibilidade",
    priority: "important",
  },
  {
    date: "13/04",
    text: "Correções gerais e refinamento de código",
    priority: "low",
  },
  {
    date: "14/04",
    text: "Testar a experiência completa e corrigir erros finais",
    priority: "low",
  },
  {
    date: "15/04",
    text: "Testar os links NFC e validar funcionamento",
    priority: "urgent",
  },
  {
    date: "16/04",
    text: "Criar os envelopes personalizados",
    priority: "important",
  },
  {
    date: "17/04",
    text: "Revisão final e entrega do presente! 🎁",
    priority: "low",
  },
];

const checklist = document.getElementById("checklist");

tasks.forEach((task) => {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("span");
  label.textContent = `${task.date} - ${task.text}`;

  const priorityTag = document.createElement("span");
  priorityTag.textContent =
    task.priority === "urgent"
      ? "🔥 Urgente"
      : task.priority === "important"
      ? "⚡ Importante"
      : "✅ Menos Crítico";
  priorityTag.classList.add("priority", task.priority);

  checkbox.addEventListener("change", () => {
    label.classList.toggle("completed", checkbox.checked);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(priorityTag);
  checklist.appendChild(taskItem);
});
