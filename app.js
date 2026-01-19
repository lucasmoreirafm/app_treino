const $ = id => document.getElementById(id);

const salvar = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const carregar = (k, p) => JSON.parse(localStorage.getItem(k)) || p;

let estado = carregar('progresso', {});
let diaAtual = 'Segunda';

// Renderiza lista de exercícios do dia
function renderDia(dia) {
  diaAtual = dia;
  const container = $('exercicios');
  container.innerHTML = '';
  treino[dia].forEach(ex => {
    const chave = `${dia}::${ex.nome}`;
    const marcado = estado[chave] || false;

    const div = document.createElement('div');
    div.className = 'exercicio';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = marcado;
    checkbox.onchange = () => {
      estado[chave] = checkbox.checked;
      salvar('progresso', estado);
    };

    const label = document.createElement('label');
    label.textContent = `${ex.nome} — ${ex.musculo} — ${ex.series} séries — Descanso ${ex.descanso}`;

    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
  });
}

// Navegação dias
function mudarDia(dia) {
  renderDia(dia);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  const dias = Object.keys(treino);
  const menu = $('menuDias');
  dias.forEach(d => {
    const btn = document.createElement('button');
    btn.textContent = d;
    btn.onclick = () => mudarDia(d);
    menu.appendChild(btn);
  });

  renderDia(dias[0]);
});
