# Site Profissional — Dr. Valdenor Alves (Nutricionista)

Site profissional completo desenvolvido com Next.js 16 (App Router), TypeScript e Tailwind CSS v4, com foco em estética premium, credibilidade médica, performance, SEO e acessibilidade.

---

## 📌 Informações Centrais e Configuração

Todos os dados oficiais de contato, endereço e links estão centralizados em:
[`src/lib/config.ts`](./src/lib/config.ts)

- **Profissional:** Dr. Valdenor Alves
- **Profissão:** Nutricionista (atuações informadas: Farmacêutico e Educador Físico, pós-graduação em Farmácia Clínica)
- **Experiência:** Mais de 26 anos na área da saúde
- **WhatsApp Oficial:** +55 64 99316-3294 (`https://wa.me/5564993163294`)
- **Instagram Oficial:** `@drvaldenornutricionista` (`https://www.instagram.com/drvaldenornutricionista/`)
- **Endereço do Consultório:** Rua Nizo Jaime de Gusmão, 369, Vila Amalia, Rio Verde - GO, CEP 75901-240
- **Google Maps Oficial:** `https://maps.app.goo.gl/1gYGvkwhX1Lj1Go79`

---

## 🎨 Identidade Visual e Design

- **Verde Principal:** `#174D35`
- **Verde Secundário:** `#2F7650`
- **Verde Claro:** `#E8F2EA`
- **Fundo Neutro:** `#F7F9F6`
- **Texto Principal:** `#202923`
- **Texto Secundário:** `#647067`
- **Tipografia:** Google Fonts — *Plus Jakarta Sans* (textos e interface) e *Cormorant Garamond* (títulos nobres e display).

---

## 📁 Estrutura de Rotas e Páginas

1. **Início (`/`):** Hero acolhedor com chamada individualizada, resumo da trajetória de 26 anos, temas de atuação, princípios do cuidado, artigos recentes e chamada para WhatsApp.
2. **Sobre (`/sobre`):** Trajetória real iniciada na infância a partir de experiências com intolerâncias alimentares, qualificações confirmadas e espaço reservado para registros cadastrais (ex.: CRN).
3. **Serviços (`/servicos`):** Estrutura transparente informando que os atendimentos são personalizados, orientando contato via WhatsApp sem publicar serviços fictícios.
4. **Conteúdos (`/conteudos` e `/conteudos/[slug]`):** Estrutura pronta para blog/CMS educativo, busca e filtros no cliente e estado vazio amigável enquanto não houver artigos oficiais.
5. **Contato (`/contato`):** Endereço completo, botão "Como chegar" no Maps, WhatsApp oficial, Instagram e formulário de contato com validação e conformidade com a LGPD.
6. **Privacidade (`/privacidade`):** Política de privacidade completa e diretrizes de proteção de dados sensíveis na saúde.

---

## 🚀 Como Executar o Projeto Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Acessar a aplicação no navegador
# http://localhost:3000
```

### Verificação de Tipos e Build de Produção

```bash
# Checagem de TypeScript e linting
npm run build
```

---

## 📸 Fotografias Originais do Profissional

As imagens originais do Dr. Valdenor Alves devem ser adicionadas na pasta `public/images/`:
- `dr-valdenor-hero.jpg` (Página inicial)
- `dr-valdenor-apresentacao.jpg` (Seção de apresentação)
- `dr-valdenor-sobre.jpg` (Página Sobre)
- `consultorio.jpg` (Ambiente e consultório)

Quando adicionadas, ative os caminhos em [`src/lib/config.ts`](./src/lib/config.ts) na propriedade `photos`.
Enquanto as fotos não estiverem disponíveis, o componente `<ProfessionalPhoto />` exibe um espaço reservado elegante com monograma, garantindo que imagens de bancos de imagens ou geradas por IA não sejam usadas como se fossem o profissional.

---

## 🔒 Segurança, LGPD e Privacidade

- Formulário de contato com coleta mínima: apenas nome e telefone/e-mail para retorno.
- Alerta claro para não envio de diagnósticos ou informações de saúde no formulário aberto.
- Sem cookies invasivos de terceiros.
- Mensagens direcionadas ao WhatsApp oficial com o texto pré-formatado para confirmação do usuário.
