const $ = id => document.getElementById(id);

const salvar = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const carregar = (k, p) => JSON.parse(localStorage.getItem(k)) || p;

let estado = carregar('progresso', {});
let diaAtual = 'Segunda';

// Atualiza a barra de progresso do dia
function atualizarProgresso(total, concluidos) {
  const porcentagem = total > 0 ? Math.round((concluidos / total) * 100) : 0;
  $('progressoTexto').textContent = `${concluidos} de ${total} concluídos`;
  $('progressoPorcentagem').textContent = `${porcentagem}%`;
  $('barraProgresso').style.width = `${porcentagem}%`;
}

// Renderiza a lista de exercícios do dia selecionado
function renderDia(dia) {
  diaAtual = dia;
  const container = $('exercicios');
  container.innerHTML = '';

  const exerciciosDoDia = treino[dia] || [];

  if (exerciciosDoDia.length === 0) {
    container.innerHTML = '<div class="empty-state">Dia de descanso! 😴 Rest e recuperação.</div>';
    atualizarProgresso(0, 0);
    return;
  }

  let concluidosCount = 0;

  exerciciosDoDia.forEach(ex => {
    const chave = `${dia}::${ex.nome}`;
    const marcado = estado[chave] || false;

    if (marcado) concluidosCount++;

    const card = document.createElement('div');
    card.className = `card-exercicio ${marcado ? 'concluido' : ''}`;

    // Ação ao clicar em qualquer lugar do card para marcar/desmarcar
    card.onclick = (e) => {
      // Ignora clique se for no botão do GIF
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

      const novoEstado = !estado[chave];
      estado[chave] = novoEstado;
      salvar('progresso', estado);
      renderDia(diaAtual); // Re-renderiza para atualizar contadores e estilo
    };

    // Estrutura do card
    card.innerHTML = `
      <div class="custom-checkbox"></div>
      <div class="ex-detalhes">
        <div class="ex-header">
          <span class="ex-titulo">${ex.nome}</span>
          ${ex.gif ? `<a href="${ex.gif}" target="_blank" class="ex-gif-btn">🎥 GIF</a>` : ''}
        </div>
        <div class="ex-info-tags">
          <span class="tag highlight">${ex.musculo}</span>
          <span class="tag"><strong>${ex.series}</strong> sér</span>
          ${ex.repeticoes ? `<span class="tag"><strong>${ex.repeticoes}</strong> rep</span>` : ''}
          <span class="tag">⏱️ ${ex.descanso}</span>
          ${ex.RIR ? `<span class="tag">RIR: ${ex.RIR}</span>` : ''}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  atualizarProgresso(exerciciosDoDia.length, concluidosCount);
}

// Alterna o dia ativo no menu
function mudarDia(dia) {
  const botoes = document.querySelectorAll('.tab-btn');
  botoes.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dia === dia);
  });
  renderDia(dia);
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  const dias = Object.keys(treino);
  const menu = $('menuDias');
  menu.innerHTML = '';

  dias.forEach((d, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = d;
    btn.dataset.dia = d;
    btn.onclick = () => mudarDia(d);
    menu.appendChild(btn);
  });

  if (dias.length > 0) {
    renderDia(dias[0]);
  }
});
