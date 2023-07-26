<script setup>
import { ref, computed} from 'vue';
import { useToast } from 'vue-toast-notification';

import { getQuestaoPorId } from '@/_data/questoes';
import { getDicaOfId } from '@/_data/caderno';


const $toast = useToast();

const duration = 1000
const currentId = ref(1)
const questaoAtual = computed(() => getQuestaoPorId(currentId.value))
const dicaAtual = computed(() => getDicaOfId(currentId.value))

const pontos = ref(0)
const respostaSelecionada = ref(false);

function verificaQuestao(alternativa) {
  if (!respostaSelecionada.value) {
    respostaSelecionada.value = true;

    if (alternativa.correta) {
      pontos.value++;
      $toast.success('Alternativa Correta.', {
        position: 'top',
        duration,
      });
    } else {
      $toast.error('Alternativa Incorreta.', {
        position: 'top',
        duration,
      });
    }

    setTimeout(() => {
      respostaSelecionada.value = false;
      currentId.value++;
    }, duration);
  }
}
</script>

<template>
  <div>
    <header class="headerPrincipal">
      <div class="NQuestao">
        <h2 class="numero">{{ questaoAtual.id }}</h2>
      </div>
      <div class="pontos">
        <h2 class="numero">{{ pontos }}</h2>
      </div>
      <div class="materia">
        <!-- Seu conteúdo aqui -->
      </div>
    </header>

    <main>
      
      <div class="container">
        <div class="Questao">
          <div class="pergunta">
            <span v-html="questaoAtual.pergunta"></span>
          </div>

          <div class="imagem">
            <img :src="questaoAtual.img" alt="Imagem da pergunta">
          </div>
        </div>

        <div class="alternativas">
          <button v-for="(alt, i) in questaoAtual.respostas" :key="i" class="botaoUm" type="button"
            @click="verificaQuestao(alt)">
            {{ alt.texto }}
          </button>
        </div>
      </div>
    </main>

    <footer class="footerPrincipal">
      <button type="button" class="btn buttonModal " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Dica
      </button>
    </footer>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Caderno</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <span v-html="dicaAtual.dica"></span>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="fade">
      <div v-if="quizConcluido" class="pontuacao-final">
        <h3>Sua pontuação:</h3>
        <p>{{ pontos }} de {{ totalQuestoes }}</p>
        <p class="mensagem-divertida">{{ mensagemDivertida }}</p>
        <button @click="reiniciarQuiz">Reiniciar</button>
      </div>
    </transition>
</template>

<style scoped>
/* Estilos do cabeçalho */
.headerPrincipal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px 20px;
  background-color: #00a86b;
  z-index: 999;
}

.NQuestao {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: #008753;
  margin-left: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-family: 'Comic Neue', cursive;
}

.numero {
  margin: 0;
}

.pontos {
  margin-right: 20px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 200px;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}
.Questao {
  margin-bottom: 40px;
}

.pergunta {
  color: #555;
  padding: 20px;
  border: 2px solid #ccc;
  box-shadow: 2px 2px 2px 1px#555;
  width: 100%;
  font-family: 'Comic Neue', cursive;
  font-size: 23px;
  text-align: center;
  background-color: white;
}

.imagem {
  margin-top: 20px;
}

img {
  max-width: 60%;
  height: auto;
}

.alternativas {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.botaoUm {
  border: none;
  color: white;
  background: #00a86b;
  width: 500px;
  height: 180px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botaoUm:hover {
  background-color: #008753;
}

/* Estilos do rodapé */
.footerPrincipal {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px 20px;
  background-color: #00a86b;
  z-index: 999;
}

.buttonModal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #008753;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttonModal:hover {
  background-color: #006e47;
}

.modal-body {
  color: #555;
}

.modal-footer {
  justify-content: flex-end;
}

</style>
