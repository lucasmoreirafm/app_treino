const treino = {
  "Segunda": [
    {"nome": "Supino reto barra (6x4-8 pesado + 1 backoff até falha)", "musculo": "Peito", "series": 7, "descanso": "02:30"},
    {"nome": "Supino inclinado halteres (última série drop)", "musculo": "Peito", "series": 4, "descanso": "02:00"},
    {"nome": "Crucifixo máquina (drop duplo + isometria final)", "musculo": "Peito", "series": 4, "descanso": "01:30"},
    {"nome": "Paralelas com peso (falha total + parcial)", "musculo": "Peito/Tríceps", "series": 4, "descanso": "02:00"},
    {"nome": "Tríceps francês pesado (rest-pause)", "musculo": "Tríceps", "series": 5, "descanso": "01:30"},
    {"nome": "Tríceps corda (drop triplo)", "musculo": "Tríceps", "series": 4, "descanso": "01:00"},
    {"nome": "Elevação lateral (drop)", "musculo": "Ombro", "series": 4, "descanso": "01:00"},
    {"nome": "Abdominal infra (elevação de pernas)", "musculo": "Core", "series": 4, "descanso": "01:00"}
  ],

  "Terça": [
    {"nome": "Barra fixa com peso (falha)", "musculo": "Costas", "series": 5, "descanso": "02:30"},
    {"nome": "Remada curvada barra (pesado)", "musculo": "Costas", "series": 5, "descanso": "02:00"},
    {"nome": "Pulldown (drop duplo)", "musculo": "Costas", "series": 4, "descanso": "01:30"},
    {"nome": "Remada máquina (contração máxima)", "musculo": "Costas", "series": 4, "descanso": "01:30"},
    {"nome": "Encolhimento barra (segurar 3s topo)", "musculo": "Trapézio", "series": 6, "descanso": "01:30"},
    {"nome": "Rosca direta barra (rest-pause pesado)", "musculo": "Bíceps", "series": 5, "descanso": "01:30"},
    {"nome": "Rosca martelo pesada", "musculo": "Bíceps/Braquial", "series": 4, "descanso": "01:30"},
    {"nome": "Rosca inversa barra", "musculo": "Antebraço", "series": 4, "descanso": "01:00"},
    {"nome": "Abdominal oblíquo (cabo ou lateral)", "musculo": "Core", "series": 3, "descanso": "01:00"}
  ],

  "Quarta": [
    {"nome": "Levantamento terra (5x3-6 muito pesado)", "musculo": "Posterior", "series": 5, "descanso": "02:30"},
    {"nome": "Agachamento livre (pesado)", "musculo": "Quadríceps", "series": 5, "descanso": "02:30"},
    {"nome": "Leg press (falha total)", "musculo": "Quadríceps", "series": 4, "descanso": "02:00"},
    {"nome": "Stiff barra", "musculo": "Posterior", "series": 4, "descanso": "02:00"},
    {"nome": "Mesa flexora (drop duplo)", "musculo": "Posterior", "series": 4, "descanso": "01:30"},
    {"nome": "Crucifixo inverso", "musculo": "Ombro posterior", "series": 4, "descanso": "01:00"},
    {"nome": "Panturrilha em pé (rest-pause)", "musculo": "Panturrilha", "series": 6, "descanso": "01:00"},
    {"nome": "Abdominal prancha (peso se possível)", "musculo": "Core", "series": 3, "descanso": "01:00"}
  ],

  "Quinta": [
    {"nome": "Supino inclinado barra (pesado + rest-pause final)", "musculo": "Peito", "series": 5, "descanso": "02:00"},
    {"nome": "Crossover polia (drop duplo + contração máxima)", "musculo": "Peito", "series": 4, "descanso": "01:30"},
    {"nome": "Desenvolvimento halteres (pesado)", "musculo": "Ombro", "series": 5, "descanso": "02:00"},
    {"nome": "Elevação lateral (drop)", "musculo": "Ombro", "series": 4, "descanso": "01:00"},
    {"nome": "Elevação frontal", "musculo": "Ombro anterior", "series": 4, "descanso": "01:00"},
    {"nome": "Tríceps pulley barra", "musculo": "Tríceps", "series": 4, "descanso": "01:00"},
    {"nome": "Tríceps francês unilateral (falha)", "musculo": "Tríceps", "series": 4, "descanso": "01:30"},
    {"nome": "Rosca Scott (rest-pause)", "musculo": "Bíceps", "series": 5, "descanso": "01:30"},
    {"nome": "Rosca inclinada (falha lenta)", "musculo": "Bíceps", "series": 4, "descanso": "01:30"},
    {"nome": "Abdominal infra máquina", "musculo": "Core", "series": 3, "descanso": "01:00"}
  ],

  "Sexta": [
    {"nome": "Remada máquina pesada", "musculo": "Costas", "series": 5, "descanso": "01:30"},
    {"nome": "Pulldown pesado (falha)", "musculo": "Costas", "series": 4, "descanso": "01:30"},
    {"nome": "Face pull", "musculo": "Ombro posterior", "series": 4, "descanso": "01:00"},
    {"nome": "Crucifixo inverso (drop)", "musculo": "Ombro posterior", "series": 4, "descanso": "01:00"},
    {"nome": "High pull barra pesado", "musculo": "Trapézio", "series": 5, "descanso": "01:30"},
    {"nome": "Barbell hold (máximo tempo)", "musculo": "Trapézio/Antebraço", "series": 5, "descanso": "01:30"},
    {"nome": "Rosca concentrada", "musculo": "Bíceps", "series": 4, "descanso": "01:30"},
    {"nome": "Rosca inversa", "musculo": "Antebraço", "series": 4, "descanso": "01:00"},
    {"nome": "Wrist curl", "musculo": "Antebraço", "series": 4, "descanso": "01:00"}
  ],

  "Sábado": [
    {"nome": "Agachamento frontal", "musculo": "Quadríceps", "series": 5, "descanso": "02:00"},
    {"nome": "Stiff halteres (falha)", "musculo": "Posterior", "series": 4, "descanso": "02:00"},
    {"nome": "Mesa flexora unilateral (drop)", "musculo": "Posterior", "series": 4, "descanso": "01:30"},
    {"nome": "Passada andando (falha)", "musculo": "Pernas", "series": 4, "descanso": "01:30"},
    {"nome": "Panturrilha sentado (rest-pause)", "musculo": "Panturrilha", "series": 6, "descanso": "01:00"},
    {"nome": "Abdominal supra", "musculo": "Core", "series": 3, "descanso": "01:00"}
  ],

  "Domingo": []
}
