# Research: Lume Landing Page para Pitch

## Decisao 1: Base tecnologica da landing page
- Decision: Usar HTML5 + CSS3 + JavaScript vanilla com Bootstrap 5 via CDN.
- Rationale: Atende ao requisito de site estatico, acelera construcao responsiva, reduz complexidade e facilita manutencao.
- Alternatives considered:
  - React/Vite: descartado por adicionar build tooling desnecessario para escopo estatico.
  - Tailwind sem Bootstrap: descartado por desalinhamento com requisito explicito de Bootstrap.

## Decisao 2: Estrategia de UX/UI para pitch
- Decision: Estrutura narrativa em secoes sequenciais com navbar fixa por ancora, progressao visual e hierarquia forte de titulos/dados.
- Rationale: Facilita consumo rapido por decisores e reforca storytelling de problema -> impacto -> viabilidade -> confianca.
- Alternatives considered:
  - Pagina longa sem ancoras: descartada por pior navegabilidade e orientacao em mobile.
  - Slides/carrossel para todas as secoes: descartado por reduzir escaneabilidade e prejudicar comparacao entre blocos.

## Decisao 3: Interacoes front-end
- Decision: Implementar scroll suave, destaque de secao ativa na navbar e animacoes leves on-scroll sem bibliotecas extras.
- Rationale: Entrega dinamismo com baixo custo de performance e sem dependencias adicionais.
- Alternatives considered:
  - AOS/GSAP: descartado para manter bundle enxuto e menor risco de regressao visual.
  - Sem interacoes: descartado por perda de refinamento na experiencia de pitch.

## Decisao 4: Organizacao de ativos
- Decision: Consumir ativos locais a partir de `img/logo`, `img/referencia`, `img/screen` e `img/equipe`, com fallback textual quando arquivo estiver ausente.
- Rationale: Reaproveita estrutura existente do repositorio e reduz risco operacional na implementacao.
- Alternatives considered:
  - Mover todos ativos para `assets/images`: descartado para evitar refatoracao de estrutura ja existente.
  - CDN externo de imagens: descartado por dependencia de terceiros e risco de indisponibilidade.

## Decisao 5: Qualidade e validacao
- Decision: Validar por checklist funcional e responsivo baseado nos cenarios de aceitacao do spec, incluindo testes manuais em breakpoints principais.
- Rationale: Projeto estatico sem pipeline de testes automatizados se beneficia de roteiro de validacao objetivo e reproduzivel.
- Alternatives considered:
  - Cypress/Playwright imediato: adiado para fase futura por custo de setup versus escopo atual.
  - Validacao ad-hoc sem checklist: descartada por risco de cobertura incompleta.

## Clarificacoes resolvidas
- Framework visual confirmado: Bootstrap.
- Tipo de projeto confirmado: estatico, sem backend.
- Responsividade confirmada: mobile-first obrigatoria.
- Estrutura de secoes confirmada: Problema, Impacto, Mercado, Concorrencia, Receita, Equipe, Proximos Passos, Final Feliz.
- Origem de ativos confirmada: diretorios locais em `img/`.
