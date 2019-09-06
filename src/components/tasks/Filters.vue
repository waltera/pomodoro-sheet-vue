<template>
  <div class="card mb-3">
    <div class="card-header">
      Filtros
    </div>
    <div class="card-body">
      <form >
        <div class="form-row">
          <div class="form-group col-12">
            <label for="inputEmail4">Nome</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-12">
            <label for="inputEmail4">Situação</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-8">
            <label for="inputEmail4">Criado em</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-8">
            <label for="inputEmail4">Finalizado em</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>

        <b-button>Limpar</b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>