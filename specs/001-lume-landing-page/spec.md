# Feature Specification: Lume Landing Page para Pitch

**Feature Branch**: `001-create-feature-branch`  
**Created**: 2026-05-01  
**Status**: Draft  
**Input**: User description: "name: Lume Landing Page; description: Landing page para pitch do produto Lume e Lume Force; responsive: true; sections: navbar [Problema, Impacto, Mercado, Concorrência, Receita, Equipe, Próximos Passos, Final Feliz]; assets: logos, referência e telas"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Entender proposta de valor rapidamente (Priority: P1)

Como potencial parceiro institucional ou investidor, quero visualizar uma narrativa clara do problema, impacto e solução do Lume/Lume Force para decidir se avanço para uma conversa comercial ou institucional.

**Why this priority**: Esta é a jornada principal de pitch: sem clareza inicial, as demais seções perdem efetividade e a landing page não cumpre seu objetivo.

**Independent Test**: Pode ser testada de forma independente ao abrir a página, navegar por Problema, Impacto e Mercado, e confirmar se a proposta de valor está compreensível sem apoio externo.

**Acceptance Scenarios**:

1. **Given** que um visitante acessa a landing page pela primeira vez, **When** ele visualiza a seção Problema, **Then** ele encontra dados atuais sobre feminicídio e violência doméstica no Brasil com contexto social claro.
2. **Given** que o visitante continua a navegação, **When** ele acessa a seção Impacto, **Then** ele entende de forma mensurável como o Lume protege mulheres e fortalece a ação policial.
3. **Given** que o visitante precisa avaliar potencial de adoção, **When** ele acessa a seção Mercado, **Then** ele encontra tamanho de oportunidade, público-alvo e potencial de expansão.

---

### User Story 2 - Avaliar viabilidade de negócio e diferenciação (Priority: P2)

Como decisor de parceria ou investimento, quero comparar o Lume com alternativas e entender o modelo de receita para avaliar sustentabilidade e retorno potencial.

**Why this priority**: Após compreender o valor social, o decisor precisa verificar diferenciação competitiva e viabilidade financeira para avançar no funil.

**Independent Test**: Pode ser testada de forma independente ao navegar apenas pelas seções Concorrência e Receita e confirmar que a decisão de continuar o contato é sustentada por diferenciais e monetização.

**Acceptance Scenarios**:

1. **Given** que o visitante avalia soluções existentes, **When** ele acessa a seção Concorrência, **Then** ele identifica apps similares e compreende o diferencial competitivo do Lume.
2. **Given** que o visitante analisa sustentabilidade financeira, **When** ele acessa a seção Receita, **Then** ele entende o modelo baseado em parcerias institucionais e planos premium.

---

### User Story 3 - Construir confiança na execução e próximos marcos (Priority: P3)

Como stakeholder externo, quero conhecer equipe, cronograma e visão de impacto final para ter confiança na capacidade de execução do projeto.

**Why this priority**: Confiança em pessoas e plano de execução reduz risco percebido e aumenta intenção de parceria.

**Independent Test**: Pode ser testada de forma independente ao navegar pelas seções Equipe, Próximos Passos e Final Feliz e confirmar que há credibilidade, direção e visão de impacto positivo.

**Acceptance Scenarios**:

1. **Given** que o visitante deseja validar competência do time, **When** ele acessa a seção Equipe, **Then** ele encontra membros-chave, funções e experiências relevantes.
2. **Given** que o visitante quer entender execução, **When** ele acessa a seção Próximos Passos, **Then** ele visualiza cronograma de curto, médio e longo prazo.
3. **Given** que o visitante busca visão de resultado, **When** ele acessa a seção Final Feliz, **Then** ele recebe mensagem inspiradora conectada à redução de feminicídios e impacto social positivo.

---

### Edge Cases

- O que acontece quando dados estatísticos usados em Problema ou Mercado ficam desatualizados?
- Como a página se comporta quando algum ativo visual (logo, referência ou tela) não está disponível?
- Como a navegação se comporta em telas pequenas com muitas seções no menu?
- Como manter clareza de leitura quando uma seção recebe texto muito extenso?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A página DEVE apresentar uma navegação principal com as seções: Problema, Impacto, Mercado, Concorrência, Receita, Equipe, Próximos Passos e Final Feliz.
- **FR-002**: A navegação DEVE permitir acesso direto a cada seção, mantendo identificação clara da seção atualmente visualizada.
- **FR-003**: A seção Problema DEVE exibir estatísticas atuais sobre feminicídio e violência doméstica no Brasil com fonte identificável.
- **FR-004**: A seção Impacto DEVE apresentar resultados esperados em formato mensurável sobre proteção de mulheres e fortalecimento da ação policial.
- **FR-005**: A seção Mercado DEVE apresentar dados de crescimento de denúncias e medidas protetivas, além do público-alvo e potencial de expansão.
- **FR-006**: A seção Concorrência DEVE mapear alternativas similares e explicitar os diferenciais competitivos do Lume.
- **FR-007**: A seção Receita DEVE descrever modelo de monetização com parcerias institucionais e planos premium.
- **FR-008**: A seção Equipe DEVE apresentar membros-chave, função e experiência relevante para execução da proposta.
- **FR-009**: A seção Próximos Passos DEVE mostrar cronograma estratégico dividido em curto, médio e longo prazo.
- **FR-010**: A seção Final Feliz DEVE encerrar a narrativa com mensagem inspiradora vinculada ao impacto social esperado.
- **FR-011**: A página DEVE ser utilizável em desktop e mobile, preservando legibilidade, navegação e hierarquia de conteúdo.
- **FR-012**: A página DEVE utilizar os ativos visuais disponíveis (logos, referências e telas) de forma coerente com a narrativa de pitch.
- **FR-013**: A página DEVE manter linguagem em português (pt-BR) em todos os textos públicos da apresentação.

### Key Entities *(include if feature involves data)*

- **Seção de Conteúdo**: Bloco temático da landing page (ex.: Problema, Impacto), com título, narrativa principal, evidências e ativos visuais relacionados.
- **Item de Navegação**: Entrada do menu associada a uma seção, usada para orientar o percurso do visitante ao longo do pitch.
- **Evidência de Mercado/Impacto**: Dado quantitativo ou qualitativo com contexto e origem identificável para sustentar argumentos.
- **Perfil de Equipe**: Registro de membro-chave com nome, função e experiência relevante.
- **Marco de Roadmap**: Entrega planejada em horizonte de curto, médio ou longo prazo.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Pelo menos 90% dos avaliadores de teste conseguem identificar proposta de valor, público-alvo e diferencial competitivo em até 3 minutos.
- **SC-002**: Pelo menos 85% dos avaliadores concluem a navegação por todas as seções sem apoio externo.
- **SC-003**: Pelo menos 80% dos avaliadores classificam a clareza da narrativa de pitch como "alta" ou "muito alta".
- **SC-004**: Pelo menos 70% dos stakeholders convidados avançam para uma próxima interação (reunião, contato formal ou solicitação de demonstração).

## Assumptions

- O conteúdo será publicado para público de parceiros institucionais, investidores e tomadores de decisão do setor público/segurança.
- Os dados estatísticos e de mercado serão fornecidos e validados pelo time responsável pelo pitch.
- O escopo desta feature é uma landing page de apresentação institucional (não inclui fluxo transacional, cadastro ou área autenticada).
- Os ativos visuais informados (logos, referências e telas) estarão disponíveis no repositório no momento da implementação.
- A identidade verbal da marca prioriza tom objetivo, humano e orientado a impacto social.
