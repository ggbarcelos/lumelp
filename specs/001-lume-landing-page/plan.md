# Implementation Plan: Lume Landing Page para Pitch

**Branch**: `001-create-feature-branch` | **Date**: 2026-05-01 | **Spec**: `/Users/banana/Documents/Projetos/GotoMobi/LumeLp/specs/001-lume-landing-page/spec.md`
**Input**: Feature specification from `/specs/001-lume-landing-page/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Criar um site estatico de pitch para Lume e Lume Force com foco em narrativa clara, impacto social e credibilidade de execucao. A abordagem tecnica sera front-end puro (HTML, CSS e JS) com Bootstrap 5 para layout responsivo, CSS customizado para identidade visual, interacoes leves em JavaScript (scroll suave, destaque de secao ativa e animacoes simples) e uso de ativos locais em `img/`.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: HTML5, CSS3, JavaScript ES2020  
**Primary Dependencies**: Bootstrap 5 (CDN), Bootstrap Icons (CDN, opcional)  
**Storage**: N/A (conteudo estatico em arquivos)  
**Testing**: Validacao manual guiada por cenarios do spec + checklist responsivo + medicao com Lighthouse (mobile e desktop)  
**Target Platform**: Navegadores modernos (Chrome, Edge, Safari, Firefox) em desktop e mobile
**Project Type**: Aplicacao web estatica (single-page landing page)  
**Performance Goals**: LCP < 2.5s e TTI < 3.0s em perfil mobile 4G (Lighthouse, media de 3 execucoes)  
**Constraints**: Mobile-first; linguagem pt-BR; sem backend; dependencias minimas; clareza visual para conteudo denso  
**Scale/Scope**: 1 pagina com 8 secoes principais + navbar ancora + ativos locais (`img/logo`, `img/referencia`, `img/screen`, `img/equipe`), com compatibilidade de leitura para `img/logos` quando existir legado

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Gate 1 - Constituicao definida: **WARNING**. O arquivo `/Users/banana/Documents/Projetos/GotoMobi/LumeLp/.specify/memory/constitution.md` esta em formato template e sem principios normativos preenchidos.
- Gate 2 - Conformidade verificavel: **PASS**. O plano segue requisitos explicitos da spec e restricoes do pedido do usuario (stack estatico, responsividade, secoes obrigatorias, linguagem pt-BR).
- Gate 3 - Necessidade de excecao: **PASS**. Nenhuma violacao identificada que exija justificativa de complexidade.
- Decisao para seguir: **PASS CONDICIONAL**. Prosseguir com base na spec vigente; recomenda-se formalizar a constituicao do projeto antes de iniciativas maiores.

## Project Structure

## Sequencia de Execucao e Dependencias

1. Curadoria de conteudo: consolidar textos finais e evidencias com fonte/ano antes de iniciar implementacao visual.
2. Validacao de ativos: confirmar existencia de imagens nos caminhos canonicos e registrar fallback para ausencias.
3. Estrutura HTML semantica: montar secoes e ancoras conforme contrato de navegacao.
4. Estilo e responsividade: aplicar Bootstrap + CSS customizado mobile-first.
5. Interacoes JavaScript: scroll suave, estado ativo da navbar e animacoes leves.
6. Acessibilidade: foco visivel, ordem de tab, skip link, atributos ARIA e contraste minimo.
7. Validacao final: checklist funcional + Lighthouse (3 rodadas mobile/desktop) + regressao visual.

Dependencias criticas:
- Estilo e JS dependem de IDs/estrutura HTML final.
- Validacao de performance depende de conteudo real (textos e imagens finais).
- Validacao de acessibilidade depende de componentes interativos finalizados.

### Documentation (this feature)

```text
specs/001-lume-landing-page/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
img/
├── equipe/
├── logo/
├── referencia/
└── screen/

index.html
assets/
├── css/
│   └── styles.css
└── js/
  └── main.js

specs/
└── 001-lume-landing-page/
  ├── plan.md
  ├── research.md
  ├── data-model.md
  ├── quickstart.md
  └── contracts/
    └── landing-page-contract.md
```

**Structure Decision**: Projeto de pagina estatica no root, com `index.html` como entrada unica e pasta `assets/` para CSS/JS customizados. A pasta `img/` existente permanece como fonte de midia. O contrato funcional da interface ficara em `specs/001-lume-landing-page/contracts/landing-page-contract.md`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Nenhuma | N/A | N/A |

## Post-Design Constitution Check

- Gate 1 - Rastreabilidade spec -> design: **PASS**. Todos os FR-001..FR-013 estao cobertos por componentes e contratos definidos.
- Gate 2 - Complexidade minima: **PASS**. Solucao permanece estatica, sem backend ou camadas desnecessarias.
- Gate 3 - Clarificacoes pendentes: **PASS**. Nenhum item `NEEDS CLARIFICATION` remanescente nos artefatos de pesquisa e design.
- Resultado final: **PASS CONDICIONAL** (mesma ressalva sobre constituicao template).
