/* eslint-disable max-len */
import { Header } from 'common/components/header'
import { Article } from 'common/components/article'

import './edu.scss'

const Edu = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className="fixed">
        <Header />
      </div>
      <div className="w-full h-full max-w-5xl m-auto page-height-container px-4 md:px-0 pt-14">
        <Article title="É falso que as vacinas contra a gripe causam câncer ou outras doenças">
          <span className='text-sm'>Publicado em 11/05/2023 por Ministério da Saúde</span>
          <p>
            Alguns sites e perfis de redes sociais investem exaustivamente em falas mentirosas que trazem
            desinformação sobre as vacinas. Um dos vídeos que circulam na internet diz que os imunizantes
            contra a gripe carregam “vírus e fungos do câncer”. Isso é mentira! O Ministério da Saúde reforça
            que todas as vacinas passam por rigorosos testes e análises antes de serem aplicadas na população
            e não há qualquer comprovação científica quanto ao risco de pessoas desenvolverem câncer por serem
            vacinadas.
          </p>
          <p>
            A vacina Influenza (gripe) é fabricada com vírus inativados, fragmentados e purificados, ou seja,
            não é capaz de induzir o desenvolvimento da doença. Além disso, a composição e a concentração de
            antígenos são atualizadas a cada ano, seguindo orientações da Organização Mundial da Saúde (OMS).
            A estratégia de vacinação contra a gripe foi incorporada no Programa Nacional de Imunizações (PNI)
            em 1999, com o propósito de reduzir internações, complicações e óbitos na população-alvo. A vacina
            é segura, efetiva e pode ser administrada simultaneamente com outras vacinas do calendário
            nacional. 
          </p>
          <p className='border-b-2 border-black pb-6'>
            “Orientamos que os municípios aproveitem a oportunidade da visita das pessoas à unidade de saúde
            para atualizar também a imunização contra a Covid-19 e, se for possível, atualizar outras vacinas
            pendentes no calendário de cada um”, explica o diretor do Departamento de Imunizações do
            Ministério da Saúde, Eder Gatti. 
          </p>
        </Article>

        <Article title="Entenda o comportamento do mosquito vetor da malária e saiba como se proteger">
          <span className='text-sm'>Publicado em 02/05/2023 por Ministério da Saúde</span>
          <p>
            Típica de países subtropicais e tropicais, como é o caso do Brasil, a malária é causada por
            protozoários do gênero Plasmodium transmitidos pela picada da fêmea infectada do mosquito do
            gênero Anopheles, também conhecido como mosquito-prego. O clima brasileiro, principalmente na
            região amazônica, é favorável para o desenvolvimento do vetor, que é mais encontrado ao entardecer
            e ao amanhecer. No entanto, também costuma aparecer durante o período noturno.
          </p>
          <p>
            A fêmea do mosquito precisa de sangue para garantir o amadurecimento e a postura dos ovos. O ciclo
            começa quando o mosquito pica uma pessoa com malária sugando o sangue com parasitos (plasmódios).
            No mosquito, os plasmódios se desenvolvem e se multiplicam. O ciclo se completa quando mosquitos
            infectados picam outra pessoa.
          </p>
          <p>
            A secretária de Vigilância em Saúde e Ambiente, Ethel Maciel, explica que, para prevenir e evitar
            novos casos de malária, é fundamental que o paciente tenha o diagnóstico e inicie o tratamento 
            assim que apresentar os primeiros sintomas da doença. “O tratamento imediato e correto busca atingir o
            parasito em pontos-chaves de seu ciclo evolutivo, impedindo o desenvolvimento de formas
            infectantes para o mosquito e interrompendo a transmissão de plasmódios”, acrescenta a secretária.
          </p>
          <p className='border-b-2 border-black pb-6'>
            Os locais geralmente escolhidos pelos mosquitos da malária para fazer criadouros são coleções de
            água limpa, sombreada e de baixo fluxo, como rios, igarapés, lagos e represas. Os sintomas mais
            comuns da doença envolvem febre alta, calafrios, tremores, sudorese e dor de cabeça, que podem
            ocorrer de forma cíclica.
          </p>
        </Article>

        <Article title="Ministério da Saúde lança Movimento Nacional pela Vacinação">
          <span className='text-sm'>Publicado em 27/02/2023 por Ministério da Saúde</span>
          <p>
            O Ministério da Saúde lança, nesta segunda-feira (27/02), o Movimento Nacional pela Vacinação com o 
            objetivo de retomar as altas coberturas vacinais do Brasil. Com a mensagem “Vacina é vida. Vacina 
            é para todos”, a mobilização inclui vacinação contra a Covid-19 e outros imunizantes do Calendário
            Nacional de Vacinação em várias etapas. Essa ação é uma das prioridades do governo federal para 
            reconstrução do Sistema Único de Saúde (SUS), da confiança nas vacinas e da cultura de vacinação 
            do país.
          </p>
          <p>
            Na primeira etapa, a vacinação será com doses de reforço bivalentes contra a Covid-19 em pessoas
            com maior risco de desenvolver formas graves da doença. Neste primeiro momento, serão vacinados
            idosos acima de 70 anos, pessoas imunocomprometidas, funcionários e pessoas que vivem em instituições
            permanentes, indígenas, ribeirinhos e quilombolas. Cerca de 18 milhões de brasileiros fazem parte
            desse grupo e o Ministério da Saúde distribuiu cerca de 19 milhões de doses de vacinas Covid-19
            para todos os estados e o Distrito Federal.
          </p>
          <p className='pb-8'>
            Em seguida, conforme o avanço da campanha e o cronograma de entrega de doses, outros grupos serão
            vacinados, como as pessoas entre 60 e 69 anos, as pessoas com deficiência permanente, os
            trabalhadores da saúde, gestantes e puérperas e a população privada de liberdade. Esses grupos
            precisam ficar atentos às informações de seus municípios para saber o momento de procurar uma
            unidade de saúde.
          </p>
        </Article>
      </div>
    </div>
  )
}

export default Edu
