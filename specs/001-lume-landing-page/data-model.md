# Data Model: Lume Landing Page para Pitch

## Visao geral
O projeto e uma landing page estatica. O modelo abaixo descreve entidades de conteudo e apresentacao para orientar implementacao e manutencao, mesmo sem banco de dados.

## Entidades

### 1) Secao
- Descricao: Bloco principal da narrativa da landing page.
- Campos:
  - id (string, obrigatorio): identificador unico da ancora (ex.: `problema`).
  - titulo (string, obrigatorio): titulo exibido na secao.
  - subtitulo (string, opcional): complemento de contexto.
  - ordem (number, obrigatorio): posicao na narrativa.
  - conteudo (array de blocos, obrigatorio): textos, metricas e chamadas.
  - cta (objeto, opcional): chamada para acao da secao.
- Regras de validacao:
  - `id` deve ser unico e corresponder ao item de navegacao.
  - `ordem` nao pode repetir.
  - toda secao deve ter pelo menos 1 bloco de conteudo.

### 2) ItemNavegacao
- Descricao: Entrada da navbar que aponta para uma Secao.
- Campos:
  - rotulo (string, obrigatorio): texto visivel no menu.
  - targetId (string, obrigatorio): ancora da Secao.
  - ativo (boolean, derivado): estado visual baseado no scroll.
- Regras de validacao:
  - `targetId` deve referenciar uma Secao existente.
  - ordem do menu deve refletir ordem narrativa.

### 3) Evidencia
- Descricao: Informacao quantitativa ou qualitativa que sustenta argumento de Problema, Impacto ou Mercado.
- Campos:
  - tipo (enum: `estatistica|insight|comparativo`, obrigatorio)
  - valor (string, obrigatorio)
  - descricao (string, obrigatorio)
  - fonte (string, obrigatorio)
  - anoReferencia (number, obrigatorio)
- Regras de validacao:
  - `fonte` nao pode ser vazio.
  - `anoReferencia` e obrigatorio e deve estar explicitado junto da fonte.
  - Evidencias fora da janela recente devem incluir justificativa editorial de relevancia.

### 4) AtivoVisual
- Descricao: Midia usada para reforco visual da narrativa.
- Campos:
  - categoria (enum: `logo|referencia|screen|equipe`, obrigatorio)
  - caminho (string, obrigatorio)
  - alt (string, obrigatorio)
  - legenda (string, opcional)
  - secaoId (string, obrigatorio)
- Regras de validacao:
  - `caminho` deve apontar para arquivo local valido.
  - `alt` deve descrever a imagem para acessibilidade.
  - `secaoId` deve existir na entidade Secao.

### 5) PerfilEquipe
- Descricao: Informacao dos membros-chave exibidos na secao Equipe.
- Campos:
  - nome (string, obrigatorio)
  - funcao (string, obrigatorio)
  - experiencia (string, obrigatorio)
  - fotoPath (string, opcional)
- Regras de validacao:
  - nome + funcao nao podem ser duplicados.

### 6) MarcoRoadmap
- Descricao: Entrega planejada para secao Proximos Passos.
- Campos:
  - horizonte (enum: `curto|medio|longo`, obrigatorio)
  - titulo (string, obrigatorio)
  - descricao (string, obrigatorio)
  - periodo (string, obrigatorio)
- Regras de validacao:
  - deve haver ao menos 1 marco por horizonte.

## Relacionamentos
- Secao 1:N AtivoVisual
- Secao 1:N Evidencia
- Secao 1:N ItemNavegacao (logicamente 1:1 por id, mas modelado como referencia)
- Secao(equipe) 1:N PerfilEquipe
- Secao(proximos-passos) 1:N MarcoRoadmap

## Transicoes de estado
- ItemNavegacao.ativo:
  - `false -> true` quando a secao alvo entra no viewport prioritario.
  - `true -> false` quando outra secao assume prioridade no viewport.

## Mapeamento para requisitos
- FR-001/FR-002: Secao + ItemNavegacao
- FR-003/FR-004/FR-005: Evidencia
- FR-006..FR-010: Secao (conteudo especializado por tema)
- FR-011: composicao de Secao em layout responsivo
- FR-012: AtivoVisual
- FR-013: textos e rotulos definidos em pt-BR
