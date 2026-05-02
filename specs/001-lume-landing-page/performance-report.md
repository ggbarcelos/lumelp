# Performance Report - Lume Landing Page

## Status
Concluido em 2026-05-01 com Lighthouse (3x mobile e 3x desktop) via servidor local `http://127.0.0.1:4173`.

## Meta
- LCP < 2.5s (perfil mobile 4G)
- TTI < 3.0s (perfil mobile 4G)

## Ambiente de medicao
- Navegador: Microsoft Edge (headless) via `CHROME_PATH`.
- Rodadas: 3 mobile + 3 desktop.
- Metodo: Lighthouse CLI com throttling simulado.

## Resultados - Mobile (3 rodadas)
- Rodada 1: LCP 7.21s | TTI 7.30s | Score 74
- Rodada 2: LCP 7.28s | TTI 7.38s | Score 75
- Rodada 3: LCP 7.28s | TTI 7.38s | Score 74
- Media: LCP 7.26s | TTI 7.35s | Score 74.33

## Resultados - Desktop (3 rodadas)
- Rodada 1: LCP 1.33s | TTI 1.35s | Score 95
- Rodada 2: LCP 1.27s | TTI 1.28s | Score 97
- Rodada 3: LCP 1.31s | TTI 1.32s | Score 96
- Media: LCP 1.30s | TTI 1.32s | Score 96.00

## Avaliacao das metas
- Meta mobile de LCP (< 2.5s): NAO ATENDIDA (media 7.26s)
- Meta mobile de TTI (< 3.0s): NAO ATENDIDA (media 7.35s)
- Desktop com folga nas metricas principais.

## Proximos passos recomendados
- Otimizar imagens da hero e referencias (compressao e formatos mais leves).
- Reduzir impacto de fontes web (preload e fallback mais agressivo).
- Reexecutar Lighthouse apos otimizacoes para validar convergencia de LCP/TTI mobile.
