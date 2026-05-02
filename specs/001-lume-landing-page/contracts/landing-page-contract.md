# Contract: Lume Landing Page (Interface de Conteudo)

## Objetivo
Definir contrato de interface para a pagina estatica, garantindo consistencia de navegacao, estrutura de secoes e uso de ativos.

## 1) Contrato de Navegacao

### Requisito
A navbar deve conter exatamente os itens abaixo, na ordem:
1. Problema
2. Impacto
3. Mercado
4. Concorrencia
5. Receita
6. Equipe
7. Proximos Passos
8. Final Feliz

### Regra de vinculacao
Cada item deve apontar para uma ancora de secao existente:
- `#problema`
- `#impacto`
- `#mercado`
- `#concorrencia`
- `#receita`
- `#equipe`
- `#proximos-passos`
- `#final-feliz`

### Criterios de aceite
- Clique no item navega para secao correspondente.
- Estado ativo da navbar reflete secao em foco.
- Em mobile, menu permanece utilizavel sem sobreposicao de conteudo.

## 2) Contrato de Estrutura de Secoes

Cada secao deve expor:
- `id` (ancora)
- `titulo` (visivel)
- `conteudo principal` (texto orientado a pitch)
- `bloco de evidencia` quando aplicavel
- `ativo visual` quando aplicavel

### Matriz minima por secao
- Problema: dados atuais + impacto social + fonte
- Impacto: beneficios mensuraveis para protecao e acao policial
- Mercado: crescimento, publico-alvo, expansao
- Concorrencia: comparativo + diferencial Lume
- Receita: parcerias institucionais + planos premium
- Equipe: membros-chave, funcao, experiencia
- Proximos Passos: curto, medio e longo prazo
- Final Feliz: mensagem inspiradora orientada a impacto

## 3) Contrato de Conteudo e Idioma
- Idioma obrigatorio: portugues (pt-BR).
- Linguagem: clara, objetiva e orientada a decisao.
- Todo dado sensivel a tempo deve incluir fonte/ano.

## 4) Contrato de Ativos

### Origens permitidas
- `img/logo` (canonico)
- `img/referencia`
- `img/screen`
- `img/equipe`

Compatibilidade legado:
- Se existir `img/logos`, a implementacao pode mapear para este caminho como fallback sem quebrar o contrato canonico.

### Regras
- Toda imagem deve conter atributo `alt` descritivo.
- Quebra de arquivo (404 local) deve degradar com fallback textual sem quebrar layout.
- Caminhos de imagem devem ser centralizados em um unico mapeamento para evitar divergencia entre secoes.

## 5) Contrato de Responsividade
- Mobile-first obrigatorio.
- Breakpoints minimos: <576, >=576, >=768, >=992, >=1200.
- Conteudo deve permanecer legivel e sem overflow horizontal.

## 6) Contrato de Interacao
- Scroll suave entre secoes.
- Animacoes leves sem bloquear leitura.
- Navegacao por teclado preservada em elementos interativos.

### Requisitos minimos de acessibilidade
- Deve existir skip link funcional para o conteudo principal.
- Navbar e menu mobile devem ser operaveis via teclado (Enter, Space, Tab, Shift+Tab, Esc quando aplicavel).
- Elementos focaveis devem exibir foco visivel persistente.
- Componentes interativos devem expor atributos ARIA adequados.

## 7) Criterios de conformidade final
- Todos os FR-001..FR-013 rastreados e atendidos.
- Todos os itens da navbar presentes e funcionais.
- Sem texto fora de pt-BR.
- Sem erro visual critico em mobile/desktop.
