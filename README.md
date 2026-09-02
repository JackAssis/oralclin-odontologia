# OralClin Odontologia — site institucional + LPs de campanha

Site de aquisição de pacientes para uma clínica odontológica em Itapoá (SC).
Duas frentes no mesmo projeto: páginas otimizadas para busca orgânica e landing
pages dedicadas a tráfego pago.

🔗 **[Ver o site](https://oralclin-preview.vercel.app)**

---

## O problema

Uma clínica odontológica que anuncia no Google tem duas necessidades que
brigam entre si:

- **Busca orgânica** pede páginas ricas, com navegação, blog e links internos.
- **Tráfego pago** pede o contrário: nenhuma rota de fuga, uma única ação
  possível e carregamento rápido.

Resolver as duas com a mesma página significa entregar mal as duas. Por isso o
projeto tem dois tipos de página, alimentados pela mesma base de conteúdo.

## Arquitetura

```
/                              Home
/protese-protocolo-itapoa      ─┐
/implante-dentario-itapoa       │ páginas de SEO: navegação completa,
/alinhadores-invisiveis-itapoa  │ conteúdo longo, indexáveis
/invisalign-itapoa             ─┘

/lp/[slug]                      LPs de campanha: sem menu, formulário acima
                                da dobra, noindex, rastreio de origem
```

As LPs são geradas por `generateStaticParams()` a partir de
[`src/data/campaigns.ts`](src/data/campaigns.ts) — criar uma campanha nova é
adicionar uma entrada no arquivo de dados, sem tocar em rota.

O conteúdo profundo (dores, indicações, objeções) vive em
[`src/data/treatments.ts`](src/data/treatments.ts) e é consumido pelos dois
tipos de página. As LPs guardam só o que é específico do anúncio: headline de
*message match*, bullets e a mensagem de WhatsApp.

## Decisões que valem comentar

**LPs não competem com o SEO.** Cada LP de campanha trata do mesmo assunto da
sua página orgânica. Deixá-las indexáveis geraria conteúdo duplicado e as duas
disputariam a mesma busca. As LPs saem com `noindex, nofollow` e `Disallow:
/lp/` no robots.

**Rastreio de origem sem custo de performance.** `utm_*` e `gclid` são lidos de
`window.location` dentro de um `useEffect`, não via `useSearchParams()` — este
último exigiria um `<Suspense>` e tiraria a página do prerender estático. Numa
LP de anúncio o tempo de carregamento entra no Quality Score, e esses valores só
precisam existir no momento do envio. Ficam em `sessionStorage` para sobreviver
à navegação dentro do site.

**O vídeo de depoimento não é baixado por quem não assiste.** O player mostra
só o poster com um botão de play; os 3,5 MB do vídeo carregam no clique
(`preload="none"`).

**Integrações falham em silêncio, exceto onde não podem.** Google Reviews e GA4
degradam para um estado neutro quando não configurados (bloco de fallback e
no-op, respectivamente). Já a entrega de lead **registra erro explícito** quando
o webhook não está configurado — numa campanha paga, um lead perdido em
silêncio é dinheiro perdido sem ninguém perceber.

**Conformidade com CFO/LGPD.** Nenhum dado clínico ou profissional é inventado:
onde falta informação oficial, o código usa marcadores explícitos. O nome do
profissional nunca aparece sem o CRO ao lado.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 (config via `@theme` no CSS) |
| Animação | framer-motion |
| Deploy | Vercel |

## Rodando localmente

```bash
npm install
npm run dev
```

Variáveis de ambiente em [`.env.local.example`](.env.local.example). Nenhuma é
obrigatória para subir o projeto — sem elas, as integrações caem nos fallbacks
descritos acima.

## Sobre as imagens

As fotos da clínica, o vídeo de depoimento e o logo **não estão versionados**.
São material do cliente, com pessoas identificáveis: a autorização de uso cobre
o site da clínica, não a redistribuição num repositório público. Clonar o
projeto sobe a aplicação funcionando, com os espaços de imagem vazios — o
resultado visual está no [site publicado](https://oralclin-preview.vercel.app).
