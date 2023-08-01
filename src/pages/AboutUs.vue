<template>
  <q-page class="flex flex-center">
    <div class="column" style="max-width: 350px">
      <div>
      <q-section>
        <q-card class="my-card" flat bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://avatars.githubusercontent.com/u/67292496?v=4">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Silmar </q-item-label>
              <q-item-label caption>
                BSI 021
              </q-item-label>
              <q-item-label caption>
                silmar.junior@usp.br
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-card-section horizontal>
            <q-card-section>
            </q-card-section>

            <q-separator vertical></q-separator>

            <q-card-section>
              Responsavel pelo Routing das páginas, main layout, persistencia de dados,
              lista de favoritos, quero assistir e assistidos,
              sua interação com o banco de dados,  etc.
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions class="flex flex-center">
            <q-btn no-caps href="https://github.com/silmarp">
              <q-avatar size="35px">
                <img src="~assets/github-mark.png">
              </q-avatar>
              <div>&nbsp; silmarp</div>
            </q-btn>
            <q-btn height="35px" href="https://www.linkedin.com/in/silmar-junior-2837811a7/">
                <img height="20px" src="~assets/LI-Logo.png">
            </q-btn>
          </q-card-actions>

        </q-card>
      </q-section>
      </div>

      <div>
        <br>
      </div>

      <div>
      <q-section>
        <q-card class="my-card" flat bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://avatars.githubusercontent.com/u/48134459?v=4">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Murilo Franchi</q-item-label>
              <q-item-label caption>
                BSI 021
              </q-item-label>
              <q-item-label caption>
                murilo.franchi@usp.br
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator></q-separator>

          <q-card-section horizontal>
            <q-card-section>
            </q-card-section>

            <q-separator vertical></q-separator>

            <q-card-section>
              Fez as paginas de lista de animes, visualização do anime selecionado,
              About Us, e os componentes de Card para a visualização de detalhes do anime
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions class="flex flex-center">
            <q-btn no-caps href="https://github.com/mrlFranchi/">
              <q-avatar size="35px">
                <img src="~assets/github-mark.png">
              </q-avatar>
              <div>&nbsp; mrlFranchi</div>
            </q-btn>
            <q-btn height="35px" href="https://www.linkedin.com/in/murilo-franchi/">
                <img height="20px" src="~assets/LI-Logo.png">
            </q-btn>
          </q-card-actions>

        </q-card>
      </q-section>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
