# Quickstart: Implementacao da Lume Landing Page

## Objetivo
Implementar a landing page estatica de pitch do Lume/Lume Force com Bootstrap, estilo customizado e interacoes leves, atendendo integralmente os requisitos da spec.

## 1) Preparacao
1. Confirmar estrutura esperada:
   - `index.html`
   - `assets/css/styles.css`
   - `assets/js/main.js`
   - `img/logo`, `img/referencia`, `img/screen`, `img/equipe`
2. Garantir que os textos finais estejam em pt-BR.
3. Consolidar evidencias (Problema, Impacto e Mercado) com fonte e ano antes de iniciar HTML/CSS.
4. Validar paths de ativos e registrar fallback para arquivos ausentes.

## 2) Estrutura base (HTML)
1. Criar `index.html` com:
   - Navbar fixa com 8 itens de ancora.
   - Secoes: Problema, Impacto, Mercado, Concorrencia, Receita, Equipe, Proximos Passos, Final Feliz.
2. Em cada secao, incluir:
   - titulo
   - texto principal
   - evidencia/indicador quando aplicavel
   - imagem/ativo relevante quando aplicavel

## 3) Estilo (CSS)
1. Importar Bootstrap 5 via CDN.
2. Adicionar `assets/css/styles.css` para:
   - identidade visual (cores, tipografia, espacos)
   - componentes de destaque (cards, metricas, timeline)
   - ajustes de responsividade mobile-first
3. Validar legibilidade em breakpoints principais.

## 4) Interacoes (JS)
1. Em `assets/js/main.js`, implementar:
   - scroll suave para ancoras
   - destaque de item ativo na navbar com base na secao visivel
   - animacoes leves de entrada (IntersectionObserver)
2. Garantir degradacao graciosa sem JS critico.

## 5) Acessibilidade (implementacao)
1. Implementar skip link para o conteudo principal.
2. Garantir foco visivel em links, botoes e toggle da navbar.
3. Garantir ordem logica de tabulacao e navegação por teclado em menu desktop/mobile.
4. Aplicar atributos ARIA necessarios na navbar e controles interativos.
5. Validar contraste minimo AA para texto e elementos de interface.

## 6) Validacao funcional e performance
1. Verificar FR-001..FR-013 contra `spec.md`.
2. Testar navegacao completa por teclado e clique/touch.
3. Testar mobile e desktop sem overflow horizontal.
4. Confirmar que imagens quebradas nao destroem o layout.
5. Rodar Lighthouse (3x mobile, 3x desktop) e registrar medias de LCP e TTI.
6. Aprovar somente se LCP < 2.5s e TTI < 3.0s no perfil mobile 4G.

## 7) Entrega
1. Revisar clareza narrativa de pitch ponta a ponta.
2. Registrar evidencias visuais (screenshots) para revisao do time.
3. Seguir para `/speckit.tasks` para gerar backlog de implementacao.
