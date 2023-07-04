<script setup>
import { ref, computed } from 'vue'
import { getQuestaoPorId } from '@/_data/questoes'
import { getDicaOfId } from '@/_data/caderno'
const currentId = ref(1)

const questaoAtual = computed(() => getQuestaoPorId(currentId.value))
const dicaAtual = computed (() => getDicaOfId(currentId.value)
)
</script>

<template>
  <header class="headerPrincipal">
    <div class="NQuestao">
      <h2 class="numero">{{ questaoAtual.id }}</h2>
    </div>
    <div class="materia">
    </div>
  </header>

  <main>
    <div class="container">
      <div class="Questao">
        <div class="pergunta">
          <span v-html="questaoAtual.pergunta"></span>
        </div>

        <div class="img"></div>
        <!-- Fim de Questao -->
      </div>

      <div class="alternativas">
        <button v-for="(alt, i) in questaoAtual.respostas" :key="i" class="botaoUm" type="button" @click="currentId++">
          {{ alt.texto }}
        </button>
      </div>

      <!-- Fim do container -->
    </div>
  </main>
  <footer class="footerPrincipal">
    <button @click="currentId--">Prev</button>
    <!-- Modal -->
    <button type="button" class="btn buttonModal " data-bs-toggle="modal" data-bs-target="#exampleModal">
      Dica
    </button>
    <!-- <hr> -->    
  </footer>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Caderno</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            <span v-html="dicaAtual.dica"></span>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fim do Modal -->
</template>

<style scoped>

.headerPrincipal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

.Questao {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}
.materia {
  text-align: end;
}
.pergunta {
  color: rgb(199, 199, 199);
  padding: 20px 20px;
  border: 2px solid gray;
  border-radius: 10px 10px 10px 10px;
  width: 50%;
  background-color: rgb(26, 25, 25);
  font-family: 'Comic Neue', cursive;
  font-size: 23px;
  text-align: justify;
  margin-right: 25px;
}
.NQuestao {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: rgb(221, 38, 38);
  margin: 10px;
  margin-left: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-family: 'Comic Neue', cursive;
}
.numero {
  margin: 0;
}

.botaoUm {
  border: none;
  color: white;
  background: rgb(163, 17, 17);
  width: 350px;
  height: 100px;
  margin-bottom: 25px;
  border-radius: 10px 10px 10px 10px;
}
.alternativas {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 375px 375px;
  margin-top: 10%;
}
.footerPrincipal {
  background-color: gray;
  height: 75px;
  margin-bottom: 0;

}
.buttonModal{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: rgb(7, 166, 47);
  color: white;
}
.buttonModal:hover{
  transition: 0.6s;
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
