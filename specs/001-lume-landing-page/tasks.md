# Tasks: Lume Landing Page para Pitch

**Input**: Design documents from `/specs/001-lume-landing-page/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Nao foram criadas tarefas de testes automatizados porque a especificacao nao exige TDD nem suite automatizada nesta fase.

**Organization**: Tarefas agrupadas por user story para permitir implementacao e validacao independente.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicializacao dos arquivos base da landing page estatica.

- [ ] T001 Criar estrutura inicial da pagina em index.html
- [ ] T002 [P] Criar scaffold de estilos customizados em assets/css/styles.css
- [ ] T003 [P] Criar scaffold de interacoes em assets/js/main.js
- [ ] T004 [P] Criar outline consolidavel de conteudo em specs/001-lume-landing-page/content-outline.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base obrigatoria que bloqueia a implementacao de qualquer user story.

**⚠️ CRITICAL**: Nenhuma user story comeca antes desta fase.

- [ ] T005 Consolidar narrativa final e evidencias com fonte/ano em specs/001-lume-landing-page/content-outline.md
- [ ] T006 Implementar navbar canonica e ancoras de todas as secoes em index.html
- [ ] T007 [P] Definir tokens visuais globais (tipografia, cores, espacamento e foco) em assets/css/styles.css
- [ ] T008 [P] Implementar utilitarios JS globais (scroll suave, secao ativa e fallback de imagem) em assets/js/main.js
- [ ] T009 Implementar baseline de acessibilidade (skip link, landmarks, ARIA inicial e foco visivel) em index.html
- [ ] T010 Validar e registrar mapeamento de paths de ativos canonico/legado em specs/001-lume-landing-page/asset-inventory.md

**Checkpoint**: Fundacao concluida, user stories podem iniciar.

---

## Phase 3: User Story 1 - Entender proposta de valor rapidamente (Priority: P1) 🎯 MVP

**Goal**: Entregar narrativa clara de Problema, Impacto e Mercado para decisao inicial do stakeholder.

**Independent Test**: Abrir a pagina e navegar apenas por Problema, Impacto e Mercado, confirmando clareza de proposta de valor sem apoio externo.

### Implementation for User Story 1

- [ ] T011 [US1] Implementar secao Problema com dados e fonte em index.html
- [ ] T012 [US1] Implementar secao Impacto com metricas mensuraveis em index.html
- [ ] T013 [US1] Implementar secao Mercado com publico-alvo e expansao em index.html
- [ ] T014 [P] [US1] Implementar estilos dedicados para blocos de Problema/Impacto/Mercado em assets/css/styles.css
- [ ] T015 [US1] Ajustar comportamento de navegacao ativa e offsets das ancoras US1 em assets/js/main.js
- [ ] T016 [US1] Executar validacao independente da US1 e registrar resultados em specs/001-lume-landing-page/validation-us1.md

**Checkpoint**: US1 funcional e validada de forma independente.

---

## Phase 4: User Story 2 - Avaliar viabilidade de negocio e diferenciacao (Priority: P2)

**Goal**: Entregar analise de concorrencia e modelo de receita para suportar avaliacao de viabilidade.

**Independent Test**: Navegar apenas por Concorrencia e Receita e verificar se os diferenciais e monetizacao permitem decisao de continuidade.

### Implementation for User Story 2

- [ ] T017 [US2] Implementar secao Concorrencia com comparativo e diferencial Lume em index.html
- [ ] T018 [US2] Implementar secao Receita com narrativa de parcerias e plano premium em index.html
- [ ] T019 [P] [US2] Implementar estilos dos componentes de comparativo e monetizacao em assets/css/styles.css
- [ ] T020 [US2] Ajustar animacoes e estados de navegacao para secoes US2 em assets/js/main.js
- [ ] T021 [US2] Executar validacao independente da US2 e registrar resultados em specs/001-lume-landing-page/validation-us2.md

**Checkpoint**: US2 funcional e validada sem dependencia de US1.

---

## Phase 5: User Story 3 - Construir confianca na execucao e proximos marcos (Priority: P3)

**Goal**: Entregar credibilidade de execucao com Equipe, Proximos Passos e Final Feliz.

**Independent Test**: Navegar por Equipe, Proximos Passos e Final Feliz e confirmar percepcao de confianca, direcao e impacto final.

### Implementation for User Story 3

- [ ] T022 [US3] Implementar secao Equipe com membros-chave e funcoes em index.html
- [ ] T023 [US3] Implementar secao Proximos Passos com cronograma curto/medio/longo em index.html
- [ ] T024 [US3] Implementar secao Final Feliz com mensagem de impacto social em index.html
- [ ] T025 [P] [US3] Implementar estilos para grade da equipe, timeline e bloco final em assets/css/styles.css
- [ ] T026 [US3] Refinar navegacao por teclado no menu e secoes finais em assets/js/main.js
- [ ] T027 [US3] Executar validacao independente da US3 e registrar resultados em specs/001-lume-landing-page/validation-us3.md

**Checkpoint**: US3 funcional e validada de forma independente.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Ajustes globais de qualidade, performance e readiness.

- [ ] T028 [P] Otimizar entrega de imagens (loading, decoding, dimensoes e prioridade) em index.html
- [ ] T029 Consolidar ajustes finais de acessibilidade (ARIA, foco, contraste) em index.html
- [ ] T030 Medir performance com Lighthouse (3x mobile e 3x desktop) e registrar medias em specs/001-lume-landing-page/performance-report.md
- [ ] T031 Executar checklist completo de validacao do quickstart e registrar prontidao em specs/001-lume-landing-page/release-readiness.md
- [ ] T032 [P] Atualizar notas finais de implementacao e decisoes em specs/001-lume-landing-page/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: inicia imediatamente.
- **Phase 2 (Foundational)**: depende da Phase 1 e bloqueia todas as user stories.
- **Phase 3, 4, 5 (User Stories)**: dependem da conclusao da Phase 2.
- **Phase 6 (Polish)**: depende das user stories que entrarem no escopo da release.

### User Story Dependencies

- **US1 (P1)**: comeca apos Foundational, sem dependencia funcional de outras stories.
- **US2 (P2)**: comeca apos Foundational, independente de US1 para validacao.
- **US3 (P3)**: comeca apos Foundational, independente de US1/US2 para validacao.

### Within Each User Story

- Conteudo e markup da secao antes de refinamentos JS.
- Estilos especificos da story podem rodar em paralelo quando marcados [P].
- Validacao independente da story fecha o checkpoint antes de seguir.

### Parallel Opportunities

- **Setup**: T002, T003 e T004 em paralelo apos T001.
- **Foundational**: T007 e T008 em paralelo apos T006.
- **US1**: T014 em paralelo com ajustes finais de conteudo de T011-T013.
- **US2**: T019 em paralelo com conclusao de markup T017-T018.
- **US3**: T025 em paralelo com conclusao de markup T022-T024.
- **Polish**: T028 e T032 podem rodar em paralelo.

---

## Parallel Example: User Story 1

```bash
Task: "T011 [US1] Implementar secao Problema com dados e fonte em index.html"
Task: "T012 [US1] Implementar secao Impacto com metricas mensuraveis em index.html"
Task: "T013 [US1] Implementar secao Mercado com publico-alvo e expansao em index.html"
Task: "T014 [P] [US1] Implementar estilos dedicados para blocos de Problema/Impacto/Mercado em assets/css/styles.css"
```

## Parallel Example: User Story 2

```bash
Task: "T017 [US2] Implementar secao Concorrencia com comparativo e diferencial Lume em index.html"
Task: "T018 [US2] Implementar secao Receita com narrativa de parcerias e plano premium em index.html"
Task: "T019 [P] [US2] Implementar estilos dos componentes de comparativo e monetizacao em assets/css/styles.css"
```

## Parallel Example: User Story 3

```bash
Task: "T022 [US3] Implementar secao Equipe com membros-chave e funcoes em index.html"
Task: "T023 [US3] Implementar secao Proximos Passos com cronograma curto/medio/longo em index.html"
Task: "T024 [US3] Implementar secao Final Feliz com mensagem de impacto social em index.html"
Task: "T025 [P] [US3] Implementar estilos para grade da equipe, timeline e bloco final em assets/css/styles.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Concluir Phase 1 (Setup).
2. Concluir Phase 2 (Foundational).
3. Concluir Phase 3 (US1).
4. Validar somente a jornada de US1 em specs/001-lume-landing-page/validation-us1.md.
5. Demonstrar MVP para feedback rapido.

### Incremental Delivery

1. Setup + Foundational.
2. Entregar US1 e validar de forma independente.
3. Entregar US2 e validar de forma independente.
4. Entregar US3 e validar de forma independente.
5. Fechar com Polish e relatorio de performance/acessibilidade.

### Parallel Team Strategy

1. Time A: markup e conteudo das secoes.
2. Time B: estilos e responsividade.
3. Time C: interacoes JS, acessibilidade e validacoes.
4. Integracao final na Phase 6 com checklist unico de readiness.

---

## Notes

- Formato de checklist seguido em 100% das tarefas.
- IDs sequenciais de T001 a T032.
- Labels [US1], [US2], [US3] aplicadas somente em fases de user story.
- Tarefas [P] marcadas apenas quando ha baixo acoplamento entre arquivos.
