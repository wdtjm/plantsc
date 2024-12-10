<template>
  <div class="searchPage">
    <div class="under-navbar"></div>
    <div class="search-title">Search</div>
    <div class="search-line"></div>
    <div class="search-ways">By cell types or marker genes</div>
    <div class="search-layout">
      <div style="display: flex;flex-direction: row;width: 100%;">
        <div class="search-type-title">Search PlantscRNAdb by Cell Types</div>
      </div>
      <div class="search-selectors">
        <div class="unitSearch">
          <el-select class="search-selector" placeholder="-Species-" v-model="selects['species']"
                     @change="selectsChange">
            <el-option
                v-for="item in options['species']"
                :key="item.name"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
        </div>
        <div class="unitSearch">
          <el-select class="search-selector" placeholder="-Tissues-" v-model="selects['tissue']"
                     @change="selectsChange">
            <el-option v-for="item in options['tissues']"
                       :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="unitSearch">
          <el-select class="search-selector" placeholder="-Cell types-" value-key="lable" v-model="selects['celltype']">
            <el-option v-for="item in options['celltypes']"
                       :key="item['lable']" :label="item['lable']" :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="search-buttons">
        <el-button class="search-button" @click="submit">Submit</el-button>
        <el-button class="search-button" @click="reset">Reset</el-button>
      </div>
      <div class="searchMarker">
        <div style="display: flex;flex-direction: row;width: 100%;">
          <div class="search-type-title">Search PlantscRNAdb by Marker Genes</div>
        </div>
        <div>
          <el-select placeholder="-Species-" class="search-marker-select" v-model="marker['species']"
                     @change="selectsChange">
            <el-option
                v-for="item in options['species']"
                :key="item.name"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>
          <el-input class="search-marker-input" v-model="marker['name']" placeholder="Please input a gene name">
          </el-input>
          <div style="width: 100%;display: flex;">
            <div style="margin-left: 10%;">
              Example:<span>AT1G28290</span><span>(A. thaliana),</span><span>Os07g0120650</span>
              <span>(O.sativa),</span><span>ZemaCp017</span><span>(Z.mays)</span>
            </div>
          </div>
          <div class="search-buttons-marker">
            <el-button class="search-button" @click="submitMarker">Submit</el-button>
            <el-button class="search-button" @click="resetMarker">Reset</el-button>
          </div>
        </div>
      </div>

      <div class="searchMarker">
        <div style="display: flex;flex-direction: row;width: 100%;">
          <div class="search-type-title">Search by blast</div>
        </div>
        <div>
          <el-select placeholder="-Species-" class="search-marker-select" v-model="blastParams['species']">
            <el-option
                v-for="item in options['blastSpecies']"
                :key="item.speciesname"
                :label="item.speciesname"
                :value="item.speciesname">
            </el-option>
          </el-select>
          <el-input class="search-marker-input" v-model="blastParams['gene']" placeholder="Please input a gene name">
          </el-input>
          <div class="search-buttons-marker">
            <el-button class="search-button" @click="submitBlast">Submit</el-button>
            <el-button class="search-button" @click="resetBlast">Reset</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {plants} from '@/js/plants';
import {transfer} from '@/js/TreeToArray';
import request from "@/js/request";
import router from "@/router";

export default {
  data() {
    return {
      selects: {
        "species": null,
        "tissue": null,
        "celltype": null
      },
      marker: {
        name: null,
        species: null
      }
      ,
      blastParams: {
        "species": null,
        "gene": null
      },
      options: {
        species: plants,
        tissues: ["Calli", "Cotyledon", "Flower", "Root", "Leaf", "Seed", "Shoot"],
        celltypes: [],
        blastSpecies: []
      }
    }
  },
  methods: {
    reset() {
      this.selects['celltype'] = null
      this.selects['tissue'] = null
      this.selects['species'] = null
    },
    submit() {
      //console.log('selects in submit',this.selects)
      if (this.selects['species'] == null) {
        this.$message({
          'message': "please select species",
          'duration': 1500,
          'type': 'warning'
        })
        //console.log('species null')
        return;
      }
      if (this.selects['tissue'] == null) {
        this.$message({
          'message': "please select tissue",
          'duration': 1500,
          'type': 'warning'
        })
        //console.log('tissue null')
        return;
      }
      if (this.selects['celltype'] == null) {
        this.$message({
          'message': "please select celltype",
          'duration': 1500,
          'type': 'warning'
        })
        //console.log('celltype null')
        return;
      }
      let eventBus = this.$eventBus
      setTimeout(() => {
        eventBus.$emit('search-celltype', this.selects);
      }, 200)
      this.$router.push('/celltype').catch(err => {
      });
    },
    resetMarker() {
      this.marker['name'] = null
      this.marker['species'] = null
    },
    async submitMarker() {
      //console.log('selects in submit',this.selects)

      if (this.marker['species'] == null) {
        this.$message({
          'message': "please select species",
          'duration': 1500,
          'type': 'warning'
        })
        //console.log('species null')
        return;
      }
      if (this.marker['name'] == null) {
        this.$message({
          'message': "please input a gene",
          'duration': 1500,
          'type': 'warning'
        })
        //console.log('tissue null')
        return;
      }
      let test = await this.$request.post('api/getSearchMarkerBySpecies.php', {
        "species": this.marker['species'],
        "marker": this.marker['name']
      })
      console.log('test:', test)
      if (test.data[0]['result'] == 0) {
        this.$message({
          'message': "gene not found",
          'duration': 1500,
          'type': 'warning'
        })
        return;
      }
      this.$marker['name'] = this.marker['name']
      this.$marker['species'] = this.marker['species']
      this.$router.push('/markerdetail').catch(err => {
      });
    },
    selectsChange() {
      console.log('selects', this.selects)
      if (this.selects['tissue'] != null && this.selects['species'] != null) {
        let that = this;
        this.$request.post('/api/TreeDataGet/getTree.php', {
          "name": this.selects['species']
        })
            .then(function (response) {
              that.options['celltypes'] = []
              let dataOfSpecies = null
              response.data.forEach(e => {
                if (e['lable'] == that.selects['tissue'])
                  dataOfSpecies = e
              })

              transfer(dataOfSpecies).forEach(el => {
                if (el['num'] != 0) {
                  that.options['celltypes'].push(el)
                }
              });
            })
      }
    },
    resetBlast() {
      this.blastParams['species'] = null
      this.blastParams['gene'] = null
    },
    submitBlast() {
      router.push('/blast?species=' + this.blastParams['species'] + '&gene=' + this.blastParams['gene'])
    }
  },
  mounted() {
    request.get('api/blast/getBlastSpecies.php').then(response => {
      this.options['blastSpecies'] = response.data.species
    }).catch(err => {})
  },
}
</script>


<style scoped>
.searchPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.463) !important;
}

.search-title {
  margin-top: 30px;
  font-size: xx-large;
  color: hsla(0, 0%, 0%, 60%);
  margin-bottom: 15px;
}

.search-line {
  width: 350px;
  height: 2px;
  background-color: hsla(0, 0%, 0%, 20%);
}

.search-ways {
  font-size: larger;
  color: hsla(0, 0%, 0%, 60%);
  margin-top: 15px;
}

.search-layout {
  width: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-top: 10px;
}

.search-type-title {
  margin-left: 10%;
  margin-bottom: 15px;
  font-size: x-large;
  color: hsla(0, 0%, 0%, 60%);
}

.search-selectors {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* .unitSearch {
    display: inline-block;
    margin-right: -5px;
    .el-select{
      width:300px !important;
    }
    .el-select__inner{
      width:300px !important;
    }
    .el-select--suffix .el-select__inner{
      width:300px !important;
    }
    .el-select__icon{
      height:100%;
    }
} */
.unitSearch {
  width: 100%;
}

.search-button {
  width: 150px
}

.search-selector {
  width: 80%;
  margin-bottom: 15px;

}

.el-select /deep/ .el-input .el-input__inner {
  background-color: #0000000a !important;
}

.el-input /deep/ .el-input__inner {
  background-color: #0000000a !important;
}

.searchMarker {
  margin-top: 30px;
  width: 100%;
  margin-bottom: 20px;
}

.search-marker-select {
  width: 80%;
  margin-bottom: 15px;
}

.search-marker-input {
  width: 80%;
  margin-bottom: 15px;
}

.search-buttons-marker {
  margin-top: 20px;
}
</style>