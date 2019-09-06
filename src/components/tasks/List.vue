<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5>Crie uma tarefa</h5>
        <span class="badge badge-pill">
          <button type="button" class="btn btn-primary">Novo</button>
        </span>
      </div>

      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span class="badge badge-pill">
          <img class="glyph-icon mr-1" :src="imgDone"/>
          <img class="glyph-icon mr-1" :src="imgDone2"/>
          <img class="glyph-icon mr-1" :src="imgCanceled"/>
          <img class="glyph-icon mr-1" :src="imgPlanned2"/>
          <img class="glyph-icon" :src="imgCanceled"/>
        </span>
      </li>

      <li class="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span class="badge badge-pill">
          <img class="glyph-icon mr-1" :src="imgDone"/>
          <img class="glyph-icon" :src="imgPlanned"/>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import imgDone from 'assets/si-glyph-square.svg'
import imgPlanned from 'assets/si-glyph-square-dashed-1.svg'
import imgDone2 from 'assets/si-glyph-circle.svg'
import imgPlanned2 from 'assets/si-glyph-circle-drashed.svg'
import imgCanceled from 'assets/si-glyph-delete.svg'

export default {
  data() {
    return {
      imgDone: imgDone,
      imgPlanned: imgPlanned,
      imgDone2: imgDone2,
      imgPlanned2: imgPlanned2,
      imgCanceled: imgCanceled
    }
  }
}
</script>